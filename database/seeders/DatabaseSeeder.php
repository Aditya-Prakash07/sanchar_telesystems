<?php

namespace Database\Seeders;

use App\Models\Banner;
use App\Models\CompanyStat;
use App\Models\NewsPost;
use App\Models\OemPartner;
use App\Models\PortfolioItem;
use App\Models\ProductCategory;
use App\Models\ProductSubcategory;
use App\Models\TeamMember;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seeds categories, rich products, real media assets, leadership profiles,
     * client case studies, and OEM partners for Sanchar Telesystems.
     */
    public function run(): void
    {
        // 0. Super Administrator Account
        User::firstOrCreate(
            ['email' => 'admin@sanchartelesystems.com'],
            [
                'name' => 'System Administrator',
                'password' => Hash::make('Sanchar@2026!'),
                'role' => User::ROLE_SUPER_ADMIN,
            ]
        );

        // 1. Categories & Subcategories Tree
        $tree = [
            'Professional / Amateur Radio' => [
                'thumbnail' => 'media/sectors/p1.jpg',
                'description' => 'Military-grade, high-reliability voice and data communications across DMR, TETRA, and P25 protocols.',
                'subs' => [
                    'Digital Mobile Radio (DMR)',
                    'License Free',
                    'Amateur',
                    'P25',
                    'Tetra',
                    'Marine & Air Band',
                ],
            ],
            'PTT over Cellular (PoC)' => [
                'thumbnail' => 'media/products/poc_banner_11.jpg',
                'description' => 'Nationwide instant group voice and video dispatch over 4G/LTE and Wi-Fi networks with sub-second latency.',
                'subs' => [
                    'PoC Platform',
                    'PoC / MCX Terminals',
                ],
            ],
            'LTE-R' => [
                'thumbnail' => 'media/sectors/LTTE-R.jpeg',
                'description' => 'Dedicated broadband wireless communication standard for high-speed train control, passenger safety, and railway signaling.',
                'subs' => ['LTE-R'],
            ],
            'Captive LTE' => [
                'thumbnail' => 'media/products/1709450160_Captive-LTE.jpeg',
                'description' => 'Private, secure cellular infrastructure for airports, ports, mining operations, and critical utilities.',
                'subs' => ['Captive LTE'],
            ],
            'Accessories' => [
                'thumbnail' => 'media/sectors/Diamond_Antenna_1.jpg',
                'description' => 'High-gain Diamond antennas, heavy-duty surveillance earpieces, multi-unit chargers, and RF connectors.',
                'subs' => ['Diamond', 'Kenwood', 'Others'],
            ],
        ];

        $sort = 0;
        $createdSubs = [];
        foreach ($tree as $categoryName => $catData) {
            $category = ProductCategory::updateOrCreate(
                ['slug' => Str::slug($categoryName)],
                [
                    'name' => $categoryName,
                    'description' => $catData['description'],
                    'thumbnail_path' => $catData['thumbnail'],
                    'sort_order' => $sort++,
                    'is_published' => true,
                ]
            );

            $subSort = 0;
            foreach ($catData['subs'] as $subName) {
                $subSlug = Str::slug($categoryName.'-'.$subName);
                $sub = ProductSubcategory::updateOrCreate(
                    ['slug' => $subSlug],
                    [
                        'product_category_id' => $category->id,
                        'name' => $subName,
                        'description' => "Engineered {$subName} wireless solutions for enterprise, industrial, and defense deployment.",
                        'sort_order' => $subSort++,
                        'is_published' => true,
                    ]
                );
                $createdSubs[$subName] = $sub;
            }
        }

        // 2. Rich Products directly from Live Site (all 121 models)
        $scrapedProductsFile = storage_path('app/scraped_products.json');
        if (file_exists($scrapedProductsFile)) {
            $scraped = json_decode(file_get_contents($scrapedProductsFile), true);
            foreach ($scraped as $i => $p) {
                // Find matching subcategory
                $subNameTarget = strtolower(trim($p['subcategory']));
                if ($subNameTarget === 'amatuer') {
                    $subNameTarget = 'amateur';
                }
                $matchedSub = null;
                foreach ($createdSubs as $name => $subObj) {
                    if (strtolower(trim($name)) === $subNameTarget) {
                        $matchedSub = $subObj;
                        break;
                    }
                }

                if ($matchedSub) {
                    $baseSlug = Str::slug($matchedSub->name . '-' . $p['name']);
                    // Ensure unique slug
                    $slug = $baseSlug;
                    $counter = 1;
                    while (PortfolioItem::where('slug', $slug)->exists()) {
                        $slug = $baseSlug . '-' . $counter++;
                    }

                    PortfolioItem::create([
                        'product_subcategory_id' => $matchedSub->id,
                        'name' => $p['name'],
                        'slug' => $slug,
                        'model_number' => $p['model_number'] ?: $p['name'],
                        'short_description' => $p['short_description'],
                        'description' => $p['description'],
                        'specifications' => $p['specifications'],
                        'cover_image_path' => $p['cover_image_path'],
                        'is_published' => true,
                        'sort_order' => $i,
                    ]);
                }
            }
        }

        // 3. Executive Team with Real Portraits & Exact Bios from Live Site
        $team = [
            [
                'name' => 'Mr. Suresh Gupta',
                'title' => 'Founder & Director',
                'bio' => 'Mr. Suresh Gupta is founder director of the company bringing in more than 30 years of technology industry leadership. He is pivotal in managing corporate direction and strategy with his deep technical knowledge.',
                'photo_path' => 'media/team/MrSureshGupta_1.jpg',
                'sort_order' => 0,
            ],
            [
                'name' => 'Ms. Priyanka Gupta',
                'title' => 'Director',
                'bio' => 'Priyanka Gupta holds bachelor degree in engineering and masters in Business administration with an experience over a decade helps in marketing, alliances and channels.',
                'photo_path' => 'media/team/PriyankaGupta.jpg',
                'sort_order' => 1,
            ],
            [
                'name' => 'Mr. Amit Goyal',
                'title' => 'Vice President',
                'bio' => 'Amit Goyal holds bachelor degree in engineering and masters in Business administration with an experience over two decades helps in software development, partnership development and projects.',
                'photo_path' => 'media/team/Amit_goyal.jpeg',
                'sort_order' => 2,
            ],
            [
                'name' => 'Ms. Ritu Goel',
                'title' => 'General Manager – Technical',
                'bio' => 'Ritu Goel - G.M - Technical is having core technical expertise and provides technical direction to the company with her two decade of experience.',
                'photo_path' => 'media/team/ritugoel.jpg',
                'sort_order' => 3,
            ],
            [
                'name' => 'Mr. Amit Bhardwaj',
                'title' => 'General Manager – Finance & Imports',
                'bio' => 'Amit Bhardwaj, General Manager – Finance & Imports is a veteran in finance & EXIM and is heading finance of the company from the date of inception. With his 17 years of hands-on experience in strategic finance planning, company achieved stern financial outlook.',
                'photo_path' => 'media/team/AmitBhardwaj.jpg',
                'sort_order' => 4,
            ],
        ];

        foreach ($team as $member) {
            TeamMember::updateOrCreate(
                ['name' => $member['name']],
                $member + ['is_published' => true]
            );
        }

        // 4. Testimonials / Flagship Deployments
        $testimonials = [
            [
                'client_name' => 'Parliament of India, Delhi',
                'story' => 'Sanchar Telesystems engineered and commissioned the secure wireless communication network for the Parliament of India, with 24/7 dedicated mission-critical SLA and maintenance support.',
                'logo_path' => 'media/clients/Parliament.png',
                'sort_order' => 0,
            ],
            [
                'client_name' => 'Delhi Police, Delhi',
                'story' => 'Awarded the single largest LTE PoC end-to-end communication contract in India in 2022, supplying over 2,500 smart tactical terminals and real-time dispatcher command console integration.',
                'logo_path' => 'media/clients/DelhiPolice.png',
                'sort_order' => 1,
            ],
            [
                'client_name' => 'Surat Diamond Bourse (SDB), Surat',
                'story' => 'Engineered and deployed complete private captive LTE coverage with 70+ specialized terminals across the world’s largest diamond trading hub, guaranteeing uninterrupted security communications.',
                'logo_path' => 'media/clients/sdb.png',
                'sort_order' => 2,
            ],
        ];

        foreach ($testimonials as $t) {
            Testimonial::updateOrCreate(
                ['client_name' => $t['client_name']],
                $t + ['is_published' => true]
            );
        }

        // 5. Impact Telemetry (Exact Production Key Stats from User)
        $stats = [
            ['label' => 'UNITS SOLD', 'value' => 300000, 'suffix' => ' +', 'icon' => 'briefcase', 'sort_order' => 0],
            ['label' => 'PROJECTS DELIVERED', 'value' => 500, 'suffix' => ' +', 'icon' => 'clipboard', 'sort_order' => 1],
            ['label' => 'DISTRIBUTORS / DEALERS NETWORK', 'value' => 50, 'suffix' => ' +', 'icon' => 'network', 'sort_order' => 2],
        ];

        CompanyStat::truncate();
        foreach ($stats as $s) {
            CompanyStat::create($s);
        }

        // 6. Global OEM Partners with Detailed Descriptions & Working URLs
        $oemPartners = [
            [
                'name' => 'Kenwood Corporation, Japan',
                'description' => 'Started in 1946 KENWOOD IS WORLD LEADER in mobile radios .It has carved out a worldwide reputation as a leader in its field , based on its advanced technologies, innovative R&D manufacturing quality and superb reliability of its product in mission critical application. Sanchar has been their accredited distributor in India since 1999 to provide best of these sophisticated land mobile radios to its esteemed customer.',
                'logo_path' => 'media/partners/1560034561_Kenwood-logo.png',
                'website_url' => 'https://www.kenwood.com/',
                'sort_order' => 0,
            ],
            [
                'name' => 'Diamond Corporation, Japan',
                'description' => 'Established in September 4th 1955 Diamond, Japan are world leader in RF Antennas and accessories. Sanchar has been associated with them to provide excellent antennas to give enhanced permanence to our Radios.',
                'logo_path' => 'media/partners/1560034773_da.png',
                'website_url' => 'https://www.diamond-ant.co.jp/english/',
                'sort_order' => 1,
            ],
            [
                'name' => 'Radio Activity',
                'description' => 'Founded in 2003, Radio Activity is a dynamic and flexible engineering company, specialized in the design of radio devices and applications. With vast experience and multi-disciplinary skills, their team of engineers designs, develops and continuously offers customized solutions to the Professional Mobile Radio (PMR) market. 100% subsidiary of JVCKENWOOD group, Sanchar associates with them to cater Indian market.',
                'logo_path' => 'media/partners/1560034967_ra.png',
                'website_url' => 'https://www.radioactivity-tlc.com/',
                'sort_order' => 2,
            ],
            [
                'name' => 'EF Johnson Technologies',
                'description' => 'Founded in 1923, A JVCKENWOOD company,EF Johnson are committed to providing modern, turnkey solutions for today and the future. They deliver superior products so that customer can focus on their mission - protecting and saving lives. Sanchar are their local representative in India.',
                'logo_path' => 'media/partners/1560035008_ef.png',
                'website_url' => 'https://www.efjohnson.com/',
                'sort_order' => 3,
            ],
            [
                'name' => 'Yaesu',
                'description' => 'The Yaesu brand is well known among ham radio aficionados and is synonymous with premium quality ham radios. From stationary multi-feature communications equipment to portable devices, YAESU has consistently represented the best in communications equipment to the world\'s top DX\'ers for over half a century. Sanchar is National distributor for Yaesu for their Ham radios and air band and marine radios(Standard Horizon).',
                'logo_path' => 'media/partners/1560035046_ya.png',
                'website_url' => 'https://www.yaesu.com/',
                'sort_order' => 4,
            ],
            [
                'name' => 'RugGear',
                'description' => 'RugGearhas been a global leader in the design and manufacturing of rugged phones and the partner of choice for leading network operators, enterprises and brands around the world.Sanchar has partnered with them for rugged phone suitable for PTT operations.',
                'logo_path' => 'media/partners/1560035112_ru.png',
                'website_url' => 'https://www.ruggear.com/',
                'sort_order' => 5,
            ],
            [
                'name' => 'Wireless Technologies',
                'description' => 'Wireless Technologies Finland Ltd, business ID FI18411756, was founded in Espoo in 2003. The company focuses on developing and supplying real-time group communication solutions for mobile operators and organizations. Our core-solution is a superset of relevant telecom standards from 3GPP and IETF, with a rich set of extensions, flexible integration and configuration options.',
                'logo_path' => 'media/partners/1560578565_PushCom_Logo_1.PNG',
                'website_url' => 'http://www.wirelesstechnologies.mobi/',
                'sort_order' => 6,
            ],
            [
                'name' => 'Teltronics (Cab Radios)',
                'description' => "Teltronic solutions are based on TETRA and LTE standards, and offer continuous train-ground voice and data communication. In addition, the 5G standard and its application for the future FRMCS (Future Railway Mobile Communication System) also form part of Teltronic’s offer for the railway sector.\n\nIn order to manage the wide range of functionalities of Teltronic on-board equipment, its portfolio includes a set of control consoles. All these consoles include an easy-to-use interface, from which you can control the radio equipment, as well as a set of audio accessories (headphone, speaker and microphone) in order to facilitate driver communications.",
                'logo_path' => 'media/partners/1707162735_Teltronics.png',
                'website_url' => 'https://www.teltronic.es/en/',
                'sort_order' => 7,
            ],
            [
                'name' => 'Nokia (Captive 4G/5G)',
                'description' => "Nokia is the biggest market leader in the Private LTE sector. Nokia RAN devices are by nature future-proof; for example, Nokia radios manufactured after 2012 may be software-upgraded to 5G, which speeds up the rollout of 5G.\n\nNokia RAN combines the flexibility of cloud RAN and open RAN with the efficiency of single RAN supporting 2G, 3G, 4G, and 5G.",
                'logo_path' => 'media/partners/1707308840_nokia.png',
                'website_url' => 'https://www.nokia.com/networks/solutions/private-wireless/',
                'sort_order' => 8,
            ],
            [
                'name' => 'Resonous',
                'description' => 'Resonous technologies is a Bangalore based 4G and 5G Wireless Network Solutions Supplier with strong R&D focus for nearly 10 years, delivering cutting edge solutions with secure, reliable, and cost-effective end to end portfolio, Resonous technologies is  specialized to serves the industry-tailored needs of Voice, Broadband Data, and IoT. Resonous technologies focused domains are Rural Telecom, Defense, and Industry4.0 Communications with operations in India, Europe and USA.',
                'logo_path' => 'media/partners/1707308900_Resonous.png',
                'website_url' => 'https://resonoustech.com/',
                'sort_order' => 9,
            ],
        ];

        OemPartner::truncate();
        foreach ($oemPartners as $p) {
            OemPartner::create($p + ['is_published' => true]);
        }

        // 7. Motorola Solutions-Style Hero Banners
        $heroBanners = [
            [
                'heading' => 'Accelerating Mission-Critical Communications',
                'subheading' => 'Our plan to scale and diversify tactical wireless operations, DMR Tier III networks and secure communications to meet growing national demand.',
                'image_path' => 'media/banners/banner1.jpg',
                'cta_label' => 'Explore DMR Radios',
                'cta_url' => '/products/professional-amateur-radio/professional-amateur-radio-digital-mobile-radio-dmr',
                'sort_order' => 0,
            ],
            [
                'heading' => 'Next-Generation PoC & Broadband Networks',
                'subheading' => 'Empowering first responders and defense forces with nationwide LTE push-to-talk, live dispatching, and sub-second voice latency.',
                'image_path' => 'media/banners/banner2.jpg',
                'cta_label' => 'Explore PoC Solutions',
                'cta_url' => '/products/ptt-over-cellular-poc',
                'sort_order' => 1,
            ],
            [
                'heading' => 'Intrinsically Safe Industrial & Defense Radios',
                'subheading' => 'Certified explosion-proof ATEX and MIL-STD-810H rugged communications built for hazardous industrial sectors, refineries and tactical operations.',
                'image_path' => 'media/banners/banner3.jpg',
                'cta_label' => 'Discover ATEX Radios',
                'cta_url' => '/products/professional-amateur-radio',
                'sort_order' => 2,
            ],
            [
                'heading' => 'Nationwide Turnkey Wireless Infrastructure',
                'subheading' => 'Over three decades of mission-critical engineering excellence trusted by the Parliament of India, Delhi Police, and Indian Railways.',
                'image_path' => 'media/banners/banner4.jpg',
                'cta_label' => 'Explore Infrastructure',
                'cta_url' => '#sectors',
                'sort_order' => 3,
            ],
        ];

        Banner::truncate();
        foreach ($heroBanners as $b) {
            Banner::create($b + ['is_published' => true]);
        }

        // 8. Press Dispatches & Latest News (Official from sanchartelesystems.com)
        $newsPosts = [
            [
                'title' => 'Sanchar Telesystems invited to "International experience sharing Conclave on Broadband PPDR Network 2024"',
                'slug' => 'sanchar-telesystems-broadband-ppdr-network-conclave-2024',
                'body' => '<p>The International Experience Sharing Conclave on Broadband Public Protection & Disaster Relief (BB-PPDR) Network was held at the Vigyan Bhawan, New Delhi on March 13th. The event was organized by the Directorate of Coordination Police Wireless (DCPW), Ministry of Home Affairs, the conclave brought together industry experts & Disaster Management teams to evaluate the traditional communication networks and the contemporary requirements of PPDR agencies, with the aim to find solutions to bridge the gaps.</p><p>Sanchar Telesystems Limited set-up an experience centre for the representatives of PPDR agencies attending the event and showcased its STELE MCX radios and their capabilities.</p>',
                'cover_image_path' => 'news/1710581517_BBPPDR.jpeg',
                'published_at' => '2024-03-16',
                'is_published' => true,
            ],
        ];

        NewsPost::truncate();
        foreach ($newsPosts as $post) {
            NewsPost::create($post);
        }
    }
}

