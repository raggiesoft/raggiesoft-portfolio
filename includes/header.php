<?php
// includes/header.php
// Universal RaggieSoft Header v10.0 (Portfolio Edition)
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle ?? 'Michael P. Ragsdale - Technologist'); ?></title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Cinzel:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    
    <script src="https://kit.fontawesome.com/ec060982d4.js" crossorigin="anonymous"></script>

    <meta name="description" content="<?php echo htmlspecialchars($ogDescription ?? 'Full-Stack Developer, Accessibility Specialist, and Technologist.'); ?>">
    <meta property="og:title" content="<?php echo htmlspecialchars($ogTitle ?? $pageTitle); ?>">
    <meta property="og:image" content="<?php echo htmlspecialchars($ogImage ?? 'https://assets.raggiesoft.com/portfolio/images/mragsdale-headshot.jpg'); ?>">

    <?php
        // --- ASSET PIPELINE CONFIGURATION ---
        
        $cdn_root = "https://assets.raggiesoft.com";
        
        // 1. Framework Path (The Foundation)
        // This is the clean, unadulterated Bootstrap 5 CSS file
        $path_bootstrap = $cdn_root . "/common/css/bootstrap/bootstrap.css"; 
        
        // 2. Global RaggieSoft Overrides (The Brand)
        // Fixes typography and shared elements across all your sites
        $path_common_css = $cdn_root . "/common/css/bootstrap-common";

        // 3. Portfolio Theme (The Paint)
        // Specific colors and styles for michaelpragsdale.com
        $path_theme = $cdn_root . "/portfolio/css"; 

        // 4. Build the Load Queue (Order Matters!)
        $load_queue = [
            // A. Framework
            ['url' => $path_bootstrap], 
            
            // B. Global Patches
            ['url' => $path_common_css . '/raggiesoft-extras.css'],

            // C. Portfolio Theme Layers
            ['url' => $path_theme . '/root.css'],       // Variables (Colors, Fonts)
            ['url' => $path_theme . '/extras.css'],     // Custom Classes (Cards, Hero)
            ['url' => $path_theme . '/header.css'],     // Nav styling
            ['url' => $path_theme . '/footer.css'],     // Footer styling
            ['url' => $path_theme . '/safety-net.css']  // Final overrides
        ];
    ?>

    <?php foreach ($load_queue as $css): ?>
        <link href="<?php echo $css['url']; ?>?v=<?php echo time(); ?>" rel="stylesheet">
    <?php endforeach; ?>

</head>
<body class="d-flex flex-column min-vh-100">

    <div id="main-site-wrapper" class="d-flex flex-column flex-grow-1 h-100">

        <header class="sticky-top shadow-sm">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">

                <a class="navbar-brand fw-bold" href="/">
                    Michael P. Ragsdale
                </a>

                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                </button>

                <div class="collapse navbar-collapse" id="mainNavbar">
                    <?php
                    // Load the default header menu
                    if (isset($currentHeaderMenu) && file_exists($currentHeaderMenu)) {
                        include $currentHeaderMenu; 
                    } else {
                        // Fallback if not set in router
                        include ROOT_PATH . '/includes/components/headers/header-default.php';
                    }
                    ?>
                </div>

                </div>
            </nav>
        </header>