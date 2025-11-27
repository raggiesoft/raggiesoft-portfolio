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
// A. Check for Explicit Configuration
$pageConfig = $routes[$request_uri] ?? [];

// B. Auto-Discovery Logic
if (!isset($pageConfig['view'])) {
    $potentialPath = 'pages' . $request_uri;
    
    // 1. Direct File Match (/about -> pages/about.php)
    if (file_exists(ROOT_PATH . '/' . $potentialPath . '.php')) {
        $pageConfig['view'] = $potentialPath;
    } 
    // 2. Directory Index (/blog -> pages/blog/overview.php)
    elseif (is_dir(ROOT_PATH . '/' . $potentialPath) && file_exists(ROOT_PATH . '/' . $potentialPath . '/overview.php')) {
        $pageConfig['view'] = $potentialPath . '/overview';
    }
}

// C. Auto-Title Logic (The "H1" Update)
// Only runs if a specific title wasn't manually set in $routes
if (!isset($pageConfig['title'])) {
    $titleFound = false;

    // 1. Try to read the first <h1> tag from the view file
    if (isset($pageConfig['view'])) {
        $viewPath = ROOT_PATH . '/' . $pageConfig['view'] . '.php';
        
        if (file_exists($viewPath)) {
            $content = file_get_contents($viewPath);
            
            // Regex to find content between <h1> tags
            if (preg_match('/<h1[^>]*>(.*?)<\/h1>/si', $content, $matches)) {
                $h1Text = trim(strip_tags($matches[1])); // Remove inner HTML (like <i> icons)
                
                // Security check: If H1 contains PHP code, skip it (can't render it yet)
                if (!str_contains($h1Text, '<?')) {
                    $pageConfig['title'] = $h1Text . ' - ' . $siteName;
                    $titleFound = true;
                }
            }
        }
    }

    // 2. Fallback: Extract from URL Slug (if H1 failed or wasn't found)
    if (!$titleFound) {
        $slug = basename($request_uri);
        
        // Handle Root URL
        if ($slug === '' || $slug === 'index.php') {
            $prettySlug = 'Home';
        } else {
            $prettySlug = ucwords(str_replace('-', ' ', $slug));
        }
        
        $pageConfig['title'] = $prettySlug . ' - ' . $siteName;
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