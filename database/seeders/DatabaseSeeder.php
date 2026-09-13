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

        // 6. Global OEM Partners from Live Site
        $scrapedPartnersFile = storage_path('app/scraped_partners.json');
        if (file_exists($scrapedPartnersFile)) {
            $partners = json_decode(file_get_contents($scrapedPartnersFile), true);
            foreach ($partners as $i => $p) {
                OemPartner::updateOrCreate(
                    ['name' => $p['name']],
                    [
                        'logo_path' => $p['logo_path'],
                        'website_url' => $p['website_url'] ?: '#',
                        'sort_order' => $i,
                        'is_published' => true,
                    ]
                );
            }
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

