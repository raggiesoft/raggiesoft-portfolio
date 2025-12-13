<?php
// includes/header.php
// Universal RaggieSoft Header v9.0 (Context-Aware)
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($pageTitle ?? 'RaggieSoft'); ?></title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Cinzel:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/ec060982d4.js" crossorigin="anonymous"></script>

    <meta name="description" content="<?php echo htmlspecialchars($ogDescription ?? 'RaggieSoft: Narrative & Code.'); ?>">
    <meta property="og:title" content="<?php echo htmlspecialchars($ogTitle ?? $pageTitle); ?>">
    <meta property="og:image" content="<?php echo htmlspecialchars($ogImage ?? 'https://assets.raggiesoft.com/stardust-engine/images/stardust-engine-logo-social.jpg'); ?>">

    <?php
        $site  = $currentSite ?? 'corporate'; 
        $theme = $currentPageTheme ?? null;
        $cdn_root = "https://assets.raggiesoft.com";
        
        // 1. Define Paths
        $path_common = $cdn_root . "/common/css/bootstrap-common"; 
        
        // Determine Site Root
        if ($site === 'corporate') { 
            $path_site = $cdn_root . "/raggiesoft-corporate/css/bootstrap"; 
        } else {
            $path_site = $cdn_root . "/{$site}/css/bootstrap";
        }
        
        // Determine Sub-Theme Root (if active)
        $path_theme = ($theme) ? $path_site . "/{$theme}" : $path_site;

        // 2. Build Queue (The New Architecture)
        $load_queue = [
            // A. The Engine (Only Common File)
            ['url' => $path_common . '/bootstrap-base.css'], 
            
            // B. The Definition (Site/Theme Specifics)
            ['url' => $path_theme . '/root.css'],
            ['url' => $path_theme . '/extras.css'],
            ['url' => $path_theme . '/header.css'],
            ['url' => $path_theme . '/footer.css'],
            ['url' => $path_theme . '/safety-net.css'],
            ['url' => $path_theme . '/raggiesoft-extras.css']
        ];
    ?>

    
    <?php foreach ($load_queue as $css): ?>
        <link href="<?php echo $css['url']; ?>?v=<?php echo time(); ?>" rel="stylesheet">
    <?php endforeach; ?>

    <style>
        #global-site-loader {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background-color: <?php echo $loaderBg ?? '#ffffff'; ?>; 
            z-index: 9999;
            display: flex; flex-direction: column; align-items: center; justify-content: center;
            transition: opacity 0.5s ease-out;
        }
        .loader-spinner {
            width: 50px; height: 50px; 
            border: 3px solid rgba(125, 125, 125, 0.2);
            border-top: 3px solid <?php echo $loaderColor ?? '#0d6efd'; ?>; 
            border-radius: 50%;
            animation: spin 1s linear infinite; margin-bottom: 20px;
        }
        #loader-text {
            color: <?php echo $loaderTextColor ?? '#212529'; ?>;
            font-family: '<?php echo $loaderFont ?? 'inherit'; ?>', sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.9rem;
            font-weight: bold;
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    </style>

</head>
<body class="d-flex flex-column min-vh-100">

    <div id="global-site-loader">
        <div class="loader-spinner"></div>
        <div id="loader-text">
            <?php echo htmlspecialchars($loaderText ?? 'Loading...'); ?>
        </div>
    </div>
    
    <script>
        window.addEventListener('load', function() {
            const overlay = document.getElementById('global-site-loader');
            if(overlay) {
                // Slight delay to ensure layout is settled
                setTimeout(() => {
                    overlay.style.opacity = '0';
                    setTimeout(() => overlay.style.display = 'none', 500);
                }, 200);
            }
        });
    </script>

    <div id="main-site-wrapper" class="d-flex flex-column flex-grow-1 h-100">

        <header class="sticky-top shadow-sm">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">

                <a class="navbar-brand text-uppercase d-flex align-items-center" href="/" aria-label="Home">
                    <img src="https://assets.raggiesoft.com/stardust-engine/images/stardust-engine-logo.png" 
                        class="me-2" style="height: 40px;">
                    <span style="font-family: 'Audiowide';"><span class="d-none d-md-inline">The </span>Stardust Engine</span>
                </a>

                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                    <span class="hamburger-bar"></span>
                </button>

                <div class="collapse navbar-collapse" id="mainNavbar">
                    <?php
                    if (isset($currentHeaderMenu) && file_exists($currentHeaderMenu)) {
                        include $currentHeaderMenu; 
                    }
                    ?>
                </div>

                </div>
            </nav>
        </header>