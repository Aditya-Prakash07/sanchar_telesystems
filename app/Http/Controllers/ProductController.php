<?php

namespace App\Http\Controllers;

use App\Models\ProductCategory;
use App\Models\ProductSubcategory;
use App\Models\PortfolioItem;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    /**
     * /products — full category + subcategory tree, mirrors the old mega-menu
     * but as a browsable page instead of a dead end.
     */
    public function index(): Response
    {
        $categories = ProductCategory::where('is_published', true)
            ->orderBy('sort_order')
            ->with(['subcategories' => fn ($q) => $q->where('is_published', true)])
            ->get(['id', 'name', 'slug', 'description', 'thumbnail_path']);

        return Inertia::render('Products/Index', [
            'categories' => $categories,
            'seo' => [
                'title' => 'Products — Sanchar Telesystems',
                'description' => 'DMR, TETRA, P25, License-Free and Amateur radios, PTT over Cellular (PoC/MCX), LTE-R, Captive LTE and communication accessories.',
            ],
        ]);
    }

    /**
     * /products/{category}/{subcategory} — item grid for one subcategory.
     */
    public function subcategory(ProductCategory $category, ProductSubcategory $subcategory): Response
    {
        abort_unless($subcategory->product_category_id === $category->id, 404);

        $items = $subcategory->items()
            ->where('is_published', true)
            ->get(['id', 'name', 'slug', 'short_description', 'cover_image_path', 'model_number']);

        return Inertia::render('Products/Category', [
            'category' => $category->only('name', 'slug'),
            'subcategory' => $subcategory->only('name', 'slug', 'description'),
            'items' => $items,
            'seo' => [
                'title' => $subcategory->name.' — Sanchar Telesystems',
                'description' => $subcategory->description ?? "Browse {$subcategory->name} communication equipment from Sanchar Telesystems.",
            ],
        ]);
    }

    /**
     * /products/{category}/{subcategory}/{item} — single product spec page.
     */
    public function show(ProductCategory $category, ProductSubcategory $subcategory, PortfolioItem $item): Response
    {
        abort_unless($item->product_subcategory_id === $subcategory->id, 404);

        return Inertia::render('Products/Show', [
            'category' => $category->only('name', 'slug'),
            'subcategory' => $subcategory->only('name', 'slug'),
            'item' => $item,
            'seo' => [
                'title' => ($item->meta_title ?: $item->name).' — Sanchar Telesystems',
                'description' => $item->meta_description ?: $item->short_description,
            ],
        ]);
    }
}
