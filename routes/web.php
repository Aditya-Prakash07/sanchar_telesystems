<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\CareersController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OemPartnerController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/about-us', [AboutController::class, 'index'])->name('about');

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/{category:slug}/{subcategory:slug}', [ProductController::class, 'subcategory'])
    ->name('products.subcategory');
Route::get('/products/{category:slug}/{subcategory:slug}/{item:slug}', [ProductController::class, 'show'])
    ->name('products.show');

Route::get('/oem-partners', [OemPartnerController::class, 'index'])->name('oem-partners');
Route::get('/careers', [CareersController::class, 'index'])->name('careers');

Route::get('/contact-us', [ContactUsController::class, 'index'])->name('contact');
Route::post('/contact-us', [ContactUsController::class, 'store'])->name('contact.store');

// Filament serves /admin itself once installed — no route needed here.
