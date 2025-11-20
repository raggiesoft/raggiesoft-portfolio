<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title><?php echo htmlspecialchars($pageTitle); ?></title>

    <meta name="description" content="<?php echo htmlspecialchars($ogDescription); ?>">
    <meta property="og:title" content="<?php echo htmlspecialchars($ogTitle); ?>">
    <meta property="og:description" content="<?php echo htmlspecialchars($ogDescription); ?>">
    <meta property="og:image" content="<?php echo htmlspecialchars($ogImage); ?>">
    <meta property="og:url" content="<?php echo htmlspecialchars($ogUrl); ?>">

    <script src="https://kit.fontawesome.com/ec060982d4.js" crossorigin="anonymous"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

    <link rel="stylesheet" href="<?php echo $cdnBaseUrl; ?>/common/css/bootstrap-overrides.css">
    
    <?php 
        $themeToLoad = $currentPageTheme ?? 'raggiesoft';
        
        // This logic builds the path: https://assets.raggiesoft.com/raggiesoft-corporate/css/theme-raggiesoft-corporate.css
        // defined by $projectSlug in your index.php
        if ($themeToLoad === 'raggiesoft') {
            $themeUrl = $cdnBaseUrl . '/common/css/theme-raggiesoft.css';
        } else {
            $themeUrl = $cdnBaseUrl . '/' . $projectSlug . '/css/theme-' . $themeToLoad . '.css';
        }
    ?>
    <link rel="stylesheet" href="<?php echo htmlspecialchars($themeUrl); ?>">

</head>
<body class="d-flex flex-column min-vh-100">

    <header class="sticky-top shadow-sm">
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container">
          <a class="navbar-brand fw-bold text-primary" href="/"><?php echo htmlspecialchars($siteName); ?></a>
          
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
            <span class="hamburger-bar"></span>
          </button>

          <div class="collapse navbar-collapse" id="mainNavbar">
            <?php 
                // Dynamically include the menu file defined in index.php (usually header-default.php)
                if (isset($currentHeaderMenu) && file_exists($currentHeaderMenu)) {
                    include $currentHeaderMenu;
                } elseif (file_exists(ROOT_PATH . '/includes/components/headers/header-default.php')) {
                    include ROOT_PATH . '/includes/components/headers/header-default.php';
                } else {
                    echo '<ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link" href="/">Home</a></li></ul>';
                }
            ?>
          </div>
        </div>
      </nav>
    </header>