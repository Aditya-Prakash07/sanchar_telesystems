<?php

namespace Database\Seeders;

use App\Models\CompanyStat;
use App\Models\OemPartner;
use App\Models\ProductCategory;
use App\Models\ProductSubcategory;
use App\Models\TeamMember;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seeds the category/subcategory tree, team, testimonials and OEM list
     * transcribed from the current live site, so the new build launches with
     * real structure instead of "Lorem ipsum" placeholders. Product photos,
     * datasheets and banner images still need to be uploaded through
     * /admin — the client has these on hand per the brief.
     */
    public function run(): void
    {
        $tree = [
            'Professional / Amateur Radio' => [
                'Digital Mobile Radio (DMR)',
                'License Free',
                'Amateur',
                'P25',
                'Tetra',
                'Marine & Air Band',
            ],
            'PTT over Cellular (PoC)' => [
                'PoC Platform',
                'PoC / MCX Terminals',
            ],
            'LTE-R' => ['LTE-R'],
            'Captive LTE' => ['Captive LTE'],
            'Accessories' => ['Diamond', 'Kenwood', 'Others'],
        ];

        $sort = 0;
        foreach ($tree as $categoryName => $subNames) {
            $category = ProductCategory::create([
                'name' => $categoryName,
                'slug' => \Illuminate\Support\Str::slug($categoryName),
                'sort_order' => $sort++,
            ]);

            $subSort = 0;
            foreach ($subNames as $subName) {
                ProductSubcategory::create([
                    'product_category_id' => $category->id,
                    'name' => $subName,
                    'slug' => \Illuminate\Support\Str::slug($categoryName.'-'.$subName),
                    'sort_order' => $subSort++,
                ]);
            }
        }

        TeamMember::insert([
            ['name' => 'Suresh Gupta', 'title' => 'Founder & Director', 'bio' => 'Brings more than 30 years of technology industry leadership, pivotal in managing corporate direction and strategy.', 'sort_order' => 0, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Priyanka Gupta', 'title' => 'Director', 'bio' => 'Holds a bachelor\'s in engineering and an MBA, with over a decade of experience in marketing, alliances and channels.', 'sort_order' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Amit Goyal', 'title' => 'Vice President', 'bio' => 'Holds a bachelor\'s in engineering and an MBA, with over two decades in software development, partnerships and projects.', 'sort_order' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Ritu Goel', 'title' => 'General Manager – Technical', 'bio' => 'Two decades of core technical expertise, providing technical direction across the company.', 'sort_order' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Amit Bhardwaj', 'title' => 'General Manager – Finance & Imports', 'bio' => '17 years of hands-on experience in strategic finance and EXIM, heading finance since inception.', 'sort_order' => 4, 'created_at' => now(), 'updated_at' => now()],
        ]);

        Testimonial::insert([
            ['client_name' => 'Parliament, Delhi', 'story' => 'Sanchar Telesystems commissioned TETRA at the Parliament of India, New Delhi, with an ongoing annual maintenance contract.', 'sort_order' => 0, 'created_at' => now(), 'updated_at' => now()],
            ['client_name' => 'SDB, Surat', 'story' => 'An LTE solution with more than 70 terminals was installed at the Surat Diamond Bourse in 2022, addressing its critical communication and safety requirements.', 'sort_order' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['client_name' => 'Delhi Police, Delhi', 'story' => 'Delhi Police placed the single largest LTE end-to-end order with Sanchar Telesystems in 2022, covering over 2,500 terminals.', 'sort_order' => 2, 'created_at' => now(), 'updated_at' => now()],
        ]);

        CompanyStat::insert([
            ['label' => 'Units Sold', 'value' => 0, 'suffix' => '+', 'sort_order' => 0],
            ['label' => 'Projects Delivered', 'value' => 0, 'suffix' => '+', 'sort_order' => 1],
            ['label' => 'Distributors / Dealers Network', 'value' => 0, 'suffix' => '+', 'sort_order' => 2],
        ]);

        // OEM names carried over from the live site — logos need uploading via /admin.
        foreach (['Kenwood', 'Nokia', 'Teltronics', 'Resonous'] as $i => $name) {
            OemPartner::create([
                'name' => $name,
                'logo_path' => 'placeholder.png', // replace via /admin/oem-partners
                'sort_order' => $i,
            ]);
        }
    }
}
