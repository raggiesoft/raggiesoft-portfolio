<?php
// pages/case-studies/silver-gauntlet.php
// Context: Portfolio Case Study (Aethel Theme Active)

$heroBg = "https://assets.raggiesoft.com/aethel/images/twin-suns-hero.jpg";
?>

<div class="starfield-container">
    <div class="starfield-twinkling"></div>
</div>

<div class="container pb-5 glass-container">
    
    <div style="background: linear-gradient(to bottom, rgba(10,10,18,0.3), rgba(10,10,18,0.9)), url('<?php echo $heroBg; ?>') center/cover no-repeat; min-height: 60vh;" class="d-flex align-items-center justify-content-center text-center rounded-bottom-4 shadow-lg mb-5">
        <div class="fade-in-up p-4">
            <span class="badge rounded-pill border border-warning text-warning mb-3 px-3 py-2 shadow-glow text-uppercase">
                <i class="fa-duotone fa-code me-2"></i>Full Stack Case Study
            </span>
            <h1 class="display-2 fw-bold text-uppercase text-glow-gold mb-2" style="font-family: 'Cinzel', serif;">
                The Silver Gauntlet
            </h1>
            <p class="lead text-white-50" style="font-family: 'Crimson Text', serif;">
                Architecting a text-heavy, immersive fantasy experience.
            </p>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-lg-10">
            
            <div class="card terminal-card p-5 border-warning shadow-lg mb-5" style="background: rgba(15, 15, 20, 0.9);">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h2 class="h3 text-warning fw-bold mb-4" style="font-family: 'Cinzel', serif;">The Challenge</h2>
                        <div class="text-light" style="font-family: 'Crimson Text', serif; font-size: 1.1rem;">
                            <p>
                                <em>The Silver Gauntlet of Aethel</em> is a massive, multi-generational saga. The challenge was to present dense narrative content (50+ chapters) in a way that felt like a "Digital Book" without sacrificing modern web accessibility.
                            </p>
                            <p>
                                Standard blog templates were too rigid. I needed a custom engine that could handle dynamic "Eras," character tracking, and an immersive "Twin Suns" aesthetic that shifts based on the time of day in the story.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-4 text-center border-start border-secondary">
                        <div class="d-grid gap-3">
                            <div class="p-3 bg-black rounded border border-secondary">
                                <h4 class="h6 text-secondary text-uppercase mb-1">Tech Stack</h4>
                                <span class="text-warning">PHP 8.2 &bull; Bootstrap 5 &bull; JSON</span>
                            </div>
                            <div class="p-3 bg-black rounded border border-secondary">
                                <h4 class="h6 text-secondary text-uppercase mb-1">Key Feature</h4>
                                <span class="text-info">Dynamic Theme Engine</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-4 mb-5">
                <div class="col-md-6">
                    <div class="card h-100 bg-transparent border-secondary hover-lift">
                        <div class="card-body">
                            <i class="fa-duotone fa-router fa-2x text-info mb-3"></i>
                            <h3 class="h5 text-white" style="font-family: 'Cinzel';">The Elara Router</h3>
                            <p class="text-secondary small">
                                Implemented a specialized version of the Elara router to handle <code>/era/book/chapter</code> nesting automatically. The system parses the URL structure to pre-load the correct JSON manifest for the specific Era being viewed.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 bg-transparent border-secondary hover-lift">
                        <div class="card-body">
                            <i class="fa-duotone fa-sun-cloud fa-2x text-warning mb-3"></i>
                            <h3 class="h5 text-white" style="font-family: 'Cinzel';">Twin Suns Telemetry</h3>
                            <p class="text-secondary small">
                                Developed a custom telemetry loader that mimics the "Gold" and "Silver" suns. The loader isn't just a progress bar; it's a narrative device that introduces the user to the dual-magic system of the world before the content even loads.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <a href="/portfolio" class="btn btn-outline-secondary rounded-pill px-4 me-3">
                    <i class="fa-duotone fa-arrow-left me-2"></i>Back to Portfolio
                </a>
                <a href="https://aethelsaga.com" target="_blank" class="btn btn-warning rounded-pill px-5 shadow-glow" 
                   style="background: linear-gradient(45deg, #FFD700, #FFA500); border: none; color: #000; font-weight: bold; font-family: 'Cinzel', serif;">
                    <i class="fa-duotone fa-external-link me-2"></i>Launch Live Site
                </a>
            </div>

        </div>
    </div>
</div>