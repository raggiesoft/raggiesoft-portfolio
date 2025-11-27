<div class="container py-5">
    <div class="row mb-5 align-items-center">
        <div class="col-lg-8">
            <h1 class="display-3 fw-bold text-primary mb-2">The Stardust Engine</h1>
            <p class="h3 text-secondary mb-3">A Narrative Web Platform & Digital Archive</p>
            <p class="lead text-muted">
                The Stardust Engine is a "dual-world" project: it functions simultaneously as a real-world portfolio piece demonstrating advanced PHP architecture and as the in-universe archive for a fictional 1980s band.
            </p>
            <div class="d-flex gap-3 mt-4">
                <a href="https://thestardustengine.com" target="_blank" class="btn btn-primary">
                    <i class="fa-duotone fa-arrow-up-right-from-square me-2"></i>Visit Live Site
                </a>
                <a href="https://github.com/raggiesoft/stardust-engine" target="_blank" class="btn btn-outline-secondary">
                    <i class="fa-brands fa-github me-2"></i>View Source
                </a>
            </div>
        </div>
    </div>

    <hr class="border-secondary opacity-25 mb-5">

    <div class="row g-5">
        <!-- Left Column: The Architecture -->
        <div class="col-lg-6">
            <h2 class="h4 fw-bold text-uppercase text-primary border-bottom border-primary pb-2 mb-4">
                Technical Architecture
            </h2>
            
            <div class="mb-4">
                <h3 class="h5 fw-bold text-body">The "Elara" Router</h3>
                <p class="small text-muted">
                    Unlike heavy frameworks (Laravel) or CMS platforms (WordPress), this site runs on a custom, lightweight PHP router I architected specifically for speed and portability.
                </p>
                <ul class="list-group list-group-flush small">
                    <li class="list-group-item bg-transparent ps-0">
                        <i class="fa-solid fa-compass text-warning me-2"></i>
                        <strong>Auto-Discovery:</strong> The router intelligently maps URLs to file paths without requiring a manual route table for every page.
                    </li>
                    <li class="list-group-item bg-transparent ps-0">
                        <i class="fa-solid fa-layer-group text-warning me-2"></i>
                        <strong>Theme Engine:</strong> Implements a separation of concerns between "Logic" (Bootstrap overrides) and "Paint" (Theme variables), allowing the entire site's look to change by swapping a single CSS file from the CDN.
                    </li>
                </ul>
            </div>

            <div class="mb-4">
                <h3 class="h5 fw-bold text-body">Automated Asset Pipeline</h3>
                <p class="small text-muted">
                    To maintain a Git repository free of binary bloat, I developed a "Factory" script (Bash/FFmpeg).
                </p>
                <div class="card bg-dark text-light border-0">
                    <div class="card-body font-monospace small p-3">
                        # Automated Workflow:<br>
                        1. Reads album.json metadata.<br>
                        2. Transcodes WAV masters to MP3/OGG.<br>
                        3. Packages ZIP/7z archives.<br>
                        4. Syncs to DigitalOcean Spaces via Rclone.
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Column: The Creative/AI Component -->
        <div class="col-lg-6">
            <h2 class="h4 fw-bold text-uppercase text-warning border-bottom border-warning pb-2 mb-4">
                Creative & AI Collaboration
            </h2>

            <p class="mb-4">
                This project serves as a practical exploration of <strong>Generative AI</strong> as a creative partner. Every asset in the fictional universe was co-created:
            </p>

            <div class="row g-3">
                <div class="col-md-6">
                    <div class="card h-100 border-secondary bg-transparent">
                        <div class="card-body text-center">
                            <i class="fa-duotone fa-brain-circuit fs-1 text-primary mb-3"></i>
                            <h5 class="card-title h6">Lore & Lyrics</h5>
                            <p class="card-text small text-muted">Collaborative writing with <strong>Google Gemini</strong> to flesh out a 40-year fictional history.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 border-secondary bg-transparent">
                        <div class="card-body text-center">
                            <i class="fa-duotone fa-record-vinyl fs-1 text-warning mb-3"></i>
                            <h5 class="card-title h6">Music Production</h5>
                            <p class="card-text small text-muted">Full-length albums composed and generated using <strong>Suno AI</strong>, then post-processed in GarageBand.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 border-secondary bg-transparent">
                        <div class="card-body text-center">
                            <i class="fa-duotone fa-palette fs-1 text-info mb-3"></i>
                            <h5 class="card-title h6">Visual Arts</h5>
                            <p class="card-text small text-muted">Album covers and band photography generated via <strong>DALL-E</strong>.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card h-100 border-secondary bg-transparent">
                        <div class="card-body text-center">
                            <i class="fa-duotone fa-code fs-1 text-success mb-3"></i>
                            <h5 class="card-title h6">The Glue</h5>
                            <p class="card-text small text-muted"><strong>PHP 8.x</strong> code ties these disparate assets into a cohesive, browsable experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>