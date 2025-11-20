<?php
// RaggieSoft Elara Router v2.2 (Portfolio Edition)
define('ROOT_PATH', dirname(__DIR__));
$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (strlen($request_uri) > 1) {
    $request_uri = rtrim($request_uri, '/');
}

// --- 1. GLOBAL DEFAULTS ---
$siteName = 'Michael P. Ragsdale';
// This tells the system to look for themes in: https://assets.raggiesoft.com/raggiesoft-corporate/css/
$projectSlug = 'raggiesoft-corporate'; 
// This loads: https://assets.raggiesoft.com/raggiesoft-corporate/css/theme-raggiesoft-corporate.css
$defaultTheme = 'raggiesoft-corporate'; 
$cdnBaseUrl = 'https://assets.raggiesoft.com';

$defaults = [
    'view' => 'errors/404',
    'title' => $siteName . ' - Technologist & Developer',
    'theme' => $defaultTheme,
    'showSidebar' => false, 
    'sidebar' => 'sidebar-default',
    'ogTitle' => $siteName,
    'ogDescription' => "Technologist, Systems Administrator, and Web Developer based in Norfolk, VA.",
    'ogImage' => $cdnBaseUrl . "/images/og-portfolio-default.jpg", 
    'ogUrl' => "https://michaelpragsdale.com" . $request_uri
];

// --- 2. ROUTE CONFIGURATION ---
// Only defining pages that need special metadata overrides.
$routes = [
    '/' => [
        'view' => 'pages/home',
        'title' => $siteName . ' | Portfolio'
    ],
    '/resume' => [
        'view' => 'pages/resume',
        'title' => 'Resume - ' . $siteName
    ],
    // Explicitly defining this to set a custom Title and OG Description
    '/projects/jessica' => [
        'view' => 'pages/projects/jessica',
        'title' => 'Project: Jessica Automation Suite - ' . $siteName,
        'ogDescription' => 'A human-centered server automation suite designed for emotional safety and operational resilience.'
    ]
];

// --- 3. SMART ROUTER LOGIC ---
$pageConfig = $routes[$request_uri] ?? [];

if (!isset($pageConfig['view'])) {
    $potentialPath = 'pages' . $request_uri;
    if (file_exists(ROOT_PATH . '/' . $potentialPath . '.php')) {
        $pageConfig['view'] = $potentialPath;
    } elseif (is_dir(ROOT_PATH . '/' . $potentialPath) && file_exists(ROOT_PATH . '/' . $potentialPath . '/overview.php')) {
        $pageConfig['view'] = $potentialPath . '/overview';
    }
}

// --- 4. MERGE & RENDER ---
$config = array_merge($defaults, $pageConfig);

$pageTitle = $config['title'];
$currentPageTheme = $config['theme'];
$showSidebar = $config['showSidebar'];
// ... (Rest of the render logic remains the same)
require_once ROOT_PATH . '/includes/header.php';

echo '<div class="container-fluid flex-grow-1 d-flex">';
echo '  <div class="row flex-grow-1">';

// Portfolio typically doesn't need a sidebar, but logic is kept just in case
if ($showSidebar) {
    $sidebarPath = ROOT_PATH . '/includes/components/sidebars/' . $config['sidebar'] . '.php';
    echo '    <aside class="col-md-3 col-lg-2 d-none d-md-block bg-body-tertiary border-end p-3">';
    if (file_exists($sidebarPath)) require_once $sidebarPath;
    echo '    </aside>';
    echo '    <main id="main-content" class="col-md-9 col-lg-10 p-0">';
} else {
    echo '    <main id="main-content" class="col-12 p-0">'; 
}

if (file_exists(ROOT_PATH . '/' . $config['view'] . '.php')) {
    require_once ROOT_PATH . '/' . $config['view'] . '.php';
} else {
    http_response_code(404);
    require_once ROOT_PATH . '/errors/404.php';
}

echo '    </main>'; 
echo '  </div>'; 
echo '</div>'; 

require_once ROOT_PATH . '/includes/footer.php';
?>