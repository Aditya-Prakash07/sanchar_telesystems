<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (
    getenv('APP_OFFLINE') === 'true'
    || file_exists(__DIR__ . '/../offline.flag')
    || file_exists(__DIR__ . '/../storage/framework/down')
    || file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')
) {
    http_response_code(503);
    header('Retry-After: 3600');
    header('Cache-Control: no-cache, private');
    if (file_exists(__DIR__ . '/../resources/views/maintenance.php')) {
        require __DIR__ . '/../resources/views/maintenance.php';
        exit;
    } elseif (file_exists(__DIR__ . '/maintenance.html')) {
        readfile(__DIR__ . '/maintenance.html');
        exit;
    } elseif (isset($maintenance) && file_exists($maintenance)) {
        require $maintenance;
    }
}

// Register the Composer autoloader...
require __DIR__.'/../vendor/autoload.php';

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once __DIR__.'/../bootstrap/app.php';

$app->handleRequest(Request::capture());
