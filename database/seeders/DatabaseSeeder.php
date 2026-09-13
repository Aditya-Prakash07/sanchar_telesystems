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
                'thumbnail' => 'media/products/1560597371_poc.jpg',
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
                'thumbnail' => 'media/sectors/back1.png',
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
                'description' => 'Started in 1946, KENWOOD is a world leader in land mobile radios with a global reputation for advanced RF engineering, superb reliability, and innovative mission-critical performance. Sanchar has been Kenwood\'s accredited distributor in India since 1999.',
                'logo_path' => 'media/partners/1560034561_Kenwood-logo.png',
                'website_url' => 'https://www.kenwood.com/',
                'sort_order' => 0,
            ],
            [
                'name' => 'Diamond Corporation, Japan',
                'description' => 'Established in 1955, Diamond Antenna Japan is the global benchmark in high-gain base station, mobile, and handheld RF antennas. Sanchar provides genuine Diamond antennas to maximize transceiver range and signal integrity.',
                'logo_path' => 'media/partners/1560034773_da.png',
                'website_url' => 'https://www.diamond-ant.co.jp/english/',
                'sort_order' => 1,
            ],
            [
                'name' => 'Radio Activity',
                'description' => 'Specialized RF engineering company focused on DMR Tier III simulcast and multisite repeater stations. A 100% subsidiary of JVCKENWOOD Group, Radio Activity partners with Sanchar to cater to Indian professional mobile radio networks.',
                'logo_path' => 'media/partners/1560034967_ra.png',
                'website_url' => 'https://www.radioactivity-tlc.com/',
                'sort_order' => 2,
            ],
            [
                'name' => 'EF Johnson Technologies',
                'description' => 'Founded in 1923, A JVCKENWOOD company delivering modern turnkey P25 solutions for public safety and tactical first responders. Sanchar serves as their accredited representative in India for mission-critical wireless deployments.',
                'logo_path' => 'media/partners/1560035008_ef.png',
                'website_url' => 'https://www.efjohnson.com/',
                'sort_order' => 3,
            ],
            [
                'name' => 'Yaesu',
                'description' => 'Synonymous with premium transceivers for amateur radio, air band, and marine communicators (Standard Horizon) for over half a century. Sanchar is the authorized National Distributor for Yaesu across the Indian subcontinent.',
                'logo_path' => 'media/partners/1560035046_ya.png',
                'website_url' => 'https://www.yaesu.com/',
                'sort_order' => 4,
            ],
            [
                'name' => 'RugGear',
                'description' => 'Global pioneer in designing rugged smart mobile devices and mission-critical MCPTT / Push-to-Talk over Cellular (PoC) terminals tested to MIL-STD-810H and IP68 standards. Sanchar delivers rugged tactical PTT hardware with RugGear.',
                'logo_path' => 'media/partners/1560035112_ru.png',
                'website_url' => 'https://www.ruggear.com/',
                'sort_order' => 5,
            ],
            [
                'name' => 'Wireless Technologies',
                'description' => 'Wireless Technologies Finland Ltd develops carrier-grade real-time group communication and dispatch platforms (PushCom) compliant with 3GPP and IETF telecom standards, powering Sanchar\'s nationwide PoC fleet deployments.',
                'logo_path' => 'media/partners/1560578565_PushCom_Logo_1.PNG',
                'website_url' => 'https://www.wirelesstechnologies.mobi/',
                'sort_order' => 6,
            ],
            [
                'name' => 'Teltronics (Cab Radios)',
                'description' => 'Global leader in railway mission-critical communications (EN 50155). Teltronic delivers continuous train-to-trackside voice and data over TETRA, LTE-R, and future 5G FRMCS standards, deployed by Sanchar for Indian rail infrastructure.',
                'logo_path' => 'media/partners/1707162735_Teltronics.png',
                'website_url' => 'https://www.teltronic.es/en/',
                'sort_order' => 7,
            ],
            [
                'name' => 'Nokia (Captive 4G/5G)',
                'description' => 'World leader in Private Wireless and Industrial 4G/5G networks. Nokia RAN infrastructure provides future-proof, carrier-grade connectivity for critical ports, mining, and smart industrial campuses deployed by Sanchar.',
                'logo_path' => 'media/partners/1707308840_nokia.png',
                'website_url' => 'https://www.nokia.com/networks/solutions/private-wireless/',
                'sort_order' => 8,
            ],
            [
                'name' => 'Resonous',
                'description' => 'Bangalore-based 4G/5G Wireless Network Solutions provider with deep R&D focus, delivering secure, reliable, and cost-effective end-to-end small cells and core networks for Indian defense, rural telecom, and Industry 4.0 IoT.',
                'logo_path' => 'media/partners/1707308900_Resonous.png',
                'website_url' => 'https://www.resonous.com/',
                'sort_order' => 9,
            ],
        ];

        OemPartner::truncate();
        foreach ($oemPartners as $p) {
            OemPartner::create($p + ['is_published' => true]);
        }

        // 7. Original Live Site Hero Banners
        $heroBanners = [
            [
                'heading' => 'CONNECTION EVERYWHERE',
                'subheading' => 'World-class wireless communication solutions engineered for India’s defense, homeland security, and critical industrial sectors.',
                'image_path' => 'media/banners/banner1.png',
                'cta_label' => 'Explore Products',
                'cta_url' => '/products',
                'sort_order' => 0,
            ],
            [
                'heading' => 'SEAMLESS COMMUNICATION',
                'subheading' => 'Integrated DMR, TETRA, and P25 trunking architectures built for zero failure in high-risk operational environments.',
                'image_path' => 'media/banners/banner2.jpg',
                'cta_label' => 'View DMR Systems',
                'cta_url' => '/products',
                'sort_order' => 1,
            ],
            [
                'heading' => 'PTT OVER CELLULAR',
                'subheading' => 'Nationwide instant group voice and live dispatch over LTE & Wi-Fi networks — keeping emergency forces connected without range limits.',
                'image_path' => 'media/banners/banner3.jpg',
                'cta_label' => 'Discover PoC Platforms',
                'cta_url' => '/products',
                'sort_order' => 2,
            ],
            [
                'heading' => 'STAY CONNECTED',
                'subheading' => 'Over three decades of mission-critical engineering excellence trusted by the Parliament of India, Delhi Police, and Indian Railways.',
                'image_path' => 'media/banners/banner4.jpg',
                'cta_label' => 'Consult with Engineering Desk',
                'cta_url' => '/contact-us',
                'sort_order' => 3,
            ],
        ];

        Banner::truncate();
        foreach ($heroBanners as $b) {
            Banner::create($b + ['is_published' => true]);
        }
    }
}

