<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductCategory extends Model
{
    protected $fillable = [
        'name', 'slug', 'description', 'icon', 'thumbnail_path', 'sort_order', 'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
    ];

    public function subcategories(): HasMany
    {
        return $this->hasMany(ProductSubcategory::class)->orderBy('sort_order');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
