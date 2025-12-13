<?php
ob_start(); 
// MichaelPragsdale.com - Entry Point & Router
// Powered by RaggieSoft "Elara" Architecture

define('ROOT_PATH', dirname(__DIR__));
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Normalize trailing slashes
if (strlen($request_uri) > 1) {
    $request_uri = rtrim($request_uri, '/');
}

// --- 1. GLOBAL CONFIGURATION ---
$siteConfig = [
    'name'          => 'Michael P. Ragsdale',
    'slug'          => 'portfolio',           // Default CDN Folder (assets.raggiesoft.com/portfolio/)
    'cdn_root'      => 'https://assets.raggiesoft.com',
    'default_theme' => 'corporate',           // Maps to /portfolio/css/bootstrap/root.css
    'default_logo'  => '',                    // Text-based logo used by default
    'default_view'  => 'pages/home'
];

// --- 2. TELEMETRY CONFIGURATION ---
// "Apple-style" clean loader settings to match your branding.
$telemetryConfig = [
    'active'         => true,
    'bgColor'        => '#ffffff',            // Clean White
    'primaryColor'   => '#0d6efd',            // Brand Blue
    'secondaryColor' => '#6c757d',            // Slate Grey
    'successColor'   => '#198754',            // Success Green
    'textColor'      => '#212529',            // Dark Body Text
    'font'           => 'system-ui, -apple-system, sans-serif'
];

require_once ROOT_PATH . '/includes/utils/data-loader.php';

// Default Page Meta (Fallback)
$pageConfig = [
    'title'       => $siteConfig['name'],
    'site'        => $siteConfig['slug'], 
    'theme'       => $siteConfig['default_theme'],
    'logo'        => $siteConfig['default_logo'],
    'view'        => 'errors/404',
    'header'      => 'header-default',
    'sidebar'     => 'sidebar-default',
    'showSidebar' => false 
];

// --- 3. ROUTE DEFINITIONS ---
$routes = [
    
    // -- HOMEPAGE --
    '/' => [
        'view'  => 'pages/home',
        'title' => 'Home - ' . $siteConfig['name']
    ],

    // -- CASE STUDY: THE STARDUST ENGINE --
    // Demonstrates the Router's ability to switch site context and theme instantly.
    '/projects/stardust-engine' => [
        'view'        => 'pages/templates/ad-astra', // Uses the sci-fi template layout
        'title'       => 'Case Study: The Stardust Engine',
        
        // CONTEXT SWITCH: Points asset loader to /stardust-engine/ CDN folder
        'site'        => 'stardust-engine',
        
        // THEME ACTIVATION: Loads /stardust-engine/css/bootstrap/ad-astra/*.css
        'theme'       => 'ad-astra',
        
        // LOGO SWAP: Uses the band's logo instead of text
        'logo'        => 'https://assets.raggiesoft.com/stardust-engine/images/stardust-engine-logo.png',
        
        'showSidebar' => false
    ]
];

// --- 4. ROUTING LOGIC ---
if (isset($routes[$request_uri])) {
    // Explicit Route Match
    $pageConfig = array_merge($pageConfig, $routes[$request_uri]);
} else {
    // Auto-Discovery (Elara Smart Routing)
    // Checks if /pages/segment.php exists and loads it automatically
    $potential_path = 'pages' . $request_uri;
    if (file_exists(ROOT_PATH . '/' . $potential_path . '.php')) {
        $pageConfig['view'] = $potential_path;
        $slug = basename($request_uri);
        $pageConfig['title'] = ucwords(str_replace('-', ' ', $slug)) . ' - ' . $siteConfig['name'];
    }
}

// --- 5. THEME ENGINE ---

// Determine Context
$currentSite      = $pageConfig['site'];       // e.g. 'portfolio'
$currentPageTheme = $pageConfig['theme'];      // e.g. 'corporate' or 'ad-astra'
$defaultTheme     = $siteConfig['default_theme']; // e.g. 'corporate'
$cdn_root         = $siteConfig['cdn_root'];

// 1. GLOBAL BASE
// Absolute baseline. Bootstrap 5.3.8 (No RaggieSoft code here).
$path_bootstrap = $cdn_root . "/common/css/bootstrap.css";

// 2. DETERMINE THEME DIRECTORY
// Base path: https://assets.raggiesoft.com/{site-name}/css/bootstrap
$path_site_base = $cdn_root . "/" . $currentSite . "/css/bootstrap";

// Logic:
// If the requested theme is the Site Default (corporate), we look in the base folder.
// If it is a Named Theme (ad-astra), we look in a subfolder.
if ($currentPageTheme === $defaultTheme) {
    $path_active_theme = $path_site_base;
} else {
    $path_active_theme = $path_site_base . "/" . $currentPageTheme;
}

// 3. BUILD CSS STACK
// Every theme folder MUST contain these 5 specific overrides.
$css_files = [
    $path_bootstrap,                        // 0. Vanilla Framework
    $path_active_theme . '/root.css',       // 1. Variables, Colors, Fonts
    $path_active_theme . '/extras.css',     // 2. Theme-specific FX (Glass, Glows)
    $path_active_theme . '/header.css',     // 3. Navbar Layout & Style
    $path_active_theme . '/footer.css',     // 4. Footer Layout & Style
    $path_active_theme . '/safety-net.css'  // 5. Final Layout & WCAG Fixes
];

// --- 6. RENDER ---

if (!file_exists(ROOT_PATH . '/' . $pageConfig['view'] . '.php')) {
    http_response_code(404);
    $pageConfig['view'] = 'errors/404';
}

$pageTitle = $pageConfig['title'];
$showSidebar = $pageConfig['showSidebar'];

// Pass queues to Header for Telemetry
$load_queue = [];
foreach($css_files as $css) {
    $load_queue[] = ['type' => 'css', 'url' => $css, 'name' => 'Styles: ' . basename($css)];
}

require_once ROOT_PATH . '/includes/header.php';

echo '<div class="container-fluid flex-grow-1 d-flex p-0">';
echo '  <div class="row flex-grow-1 m-0 w-100">';

if ($showSidebar) {
    $sidebarFile = ROOT_PATH . '/includes/components/sidebars/' . $pageConfig['sidebar'] . '.php';
    if (file_exists($sidebarFile)) {
        echo '<aside class="col-md-3 col-lg-2 d-none d-md-block bg-body-tertiary border-end p-3">';
        include $sidebarFile;
        echo '</aside>';
        echo '<main id="main-content" class="col-md-9 col-lg-10 p-0">';
    } else {
        echo '<main id="main-content" class="col-12 p-0">';
    }
} else {
    echo '<main id="main-content" class="col-12 p-0">';
}

// Load the actual content view
require_once ROOT_PATH . '/' . $pageConfig['view'] . '.php';

echo '    </main>';
echo '  </div>';
echo '</div>';

require_once ROOT_PATH . '/includes/footer.php';
ob_end_flush();
?>