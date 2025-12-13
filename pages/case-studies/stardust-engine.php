<?php
// pages/case-studies/stardust-engine.php
// Context: Portfolio Case Study (Ad Astra Theme Active)

$heroBg = "https://assets.raggiesoft.com/stardust-engine/images/hero-background.jpg";
?>

<div class="starfield-container">
    <div class="starfield-twinkling"></div>
</div>

<div class="container pb-5 glass-container">
    
    <div style="background: linear-gradient(to bottom right, rgba(5, 5, 8, 0.8), rgba(5, 5, 8, 0.6)), url('<?php echo $heroBg; ?>') center/cover no-repeat; min-height: 60vh;" class="d-flex align-items-center justify-content-center text-center rounded-4 shadow-lg mb-5 border border-primary border-opacity-25">
        <div class="fade-in-up p-4">
            <span class="badge rounded-pill border border-info text-info mb-3 px-3 py-2 shadow-glow text-uppercase">
                <i class="fa-duotone fa-microchip me-2"></i>Audio Engineering Project
            </span>
            <h1 class="display-2 fw-bold text-uppercase text-glow-primary mb-2" style="font-family: 'Audiowide', sans-serif; letter-spacing: 3px;">
                The Stardust Engine
            </h1>
            <p class="lead text-white-50" style="font-family: 'Exo 2', sans-serif;">
                A multimedia archive for a fictional 80s rock band.
            </p>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-10">
            
            <div class="card terminal-card p-4 mb-5">
                <div class="terminal-header">
                    <i class="fa-duotone fa-code-branch me-2"></i>
                    System Log // Project Overview
                </div>
                <div class="terminal-text text-light">
                    <p class="mb-2">
                        <strong>OBJECTIVE:</strong> Create a believable digital archive for "The Stardust Engine," a fictional band that exists only in lore.
                    </p>
                    <p class="mb-4">
                        <strong>EXECUTION:</strong> The site combines traditional web design with an immersive "In-Universe" terminal interface. It features a custom JavaScript audio player capable of gapless playback for progressive rock suites, tied directly to a JSON-based discography database.
                    </p>
                    
                    <div class="row g-3 mt-4">
                        <div class="col-md-4">
                            <div class="p-3 border border-secondary rounded bg-dark bg-opacity-50">
                                <h5 class="text-info h6 mb-2">Audio Core</h5>
                                <p class="small text-muted mb-0">Custom HTML5 Audio API wrapper for seamless track transitions.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 border border-secondary rounded bg-dark bg-opacity-50">
                                <h5 class="text-info h6 mb-2">Lore Database</h5>
                                <p class="small text-muted mb-0">Interconnected wiki system powered by flat-file JSON data.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 border border-secondary rounded bg-dark bg-opacity-50">
                                <h5 class="text-info h6 mb-2">Theme System</h5>
                                <p class="small text-muted mb-0">CSS variable engine allowing for "Era-Specific" visual themes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex justify-content-between align-items-center p-4 rounded bg-black border border-primary border-opacity-25">
                <div>
                    <h4 class="text-white h5 mb-1" style="font-family: 'Audiowide';">Ready to listen?</h4>
                    <p class="text-secondary small mb-0">Experience the archive exactly as a user would.</p>
                </div>
                <div>
                    <a href="/portfolio" class="btn btn-outline-secondary rounded-pill px-4 me-2">Back</a>
                    <a href="https://thestardustengine.com" target="_blank" class="btn btn-primary rounded-pill px-4 shadow-glow">
                        <i class="fa-duotone fa-rocket-launch me-2"></i>Visit Archive
                    </a>
                </div>
            </div>

        </div>
    </div>
</div>