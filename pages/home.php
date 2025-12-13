<?php
// pages/home.php
// Context: Michael P. Ragsdale - Main Portfolio
// Description: Data-driven view consuming employment.json, education.json, and projects.json

// 1. Fetch Data via the Elara Data Loader
// Note: This relies on your 'portfolio' slug being set in index.php
$employment = getSiteData('employment.json');
$education  = getSiteData('education.json');
$projects   = getSiteData('projects.json');
$locations  = getSiteData('locations.json');

// 2. Resume Hardcoded Data (Profile & Skills)
// Extracted from mragsdale-resume-nov2025.docx
$skills = [
    "Frontend" => ["HTML5", "CSS3 (Custom Properties)", "Bootstrap 5", "WCAG 2.1 AA/AAA", "Section 508", "ARIA", "Deque axe"],
    "Backend"  => ["PHP 8.x", "Python", "Bash/Shell", "SQL (MariaDB/MySQL)", "REST APIs"],
    "DevOps"   => ["Linux (Ubuntu)", "Nginx", "Systemd", "Git/GitHub", "DigitalOcean", "Let's Encrypt"],
    "Methods"  => ["Empathetic Engineering", "No-Root Security", "Responsive Design", "Mobile-First"]
];
?>

<section class="py-5 text-center container">
    <div class="row py-lg-5">
        <div class="col-lg-8 col-md-10 mx-auto">
            <h1 class="fw-bold display-4 mb-2">Michael P. Ragsdale</h1>
            <p class="lead text-primary fw-medium mb-4">Full-Stack Developer & Accessibility Specialist</p>
            <p class="text-secondary mb-5 w-75 mx-auto">
                Full-Stack Web Developer with a background in systems administration. 
                Proven ability to architect custom PHP frameworks, automate server infrastructure, 
                and ensure strict WCAG 2.1/Section 508 compliance.
            </p>
            <div class="d-flex justify-content-center gap-3">
                <a href="mailto:hireme@michaelpragsdale.com" class="btn btn-primary rounded-pill px-4">
                    <i class="fa-duotone fa-envelope me-2"></i>Hire Me
                </a>
                <a href="https://github.com/raggiesoft" target="_blank" class="btn btn-outline-secondary rounded-pill px-4">
                    <i class="fa-brands fa-github me-2"></i>GitHub
                </a>
            </div>
        </div>
    </div>
</section>

<div class="container mb-5">
    <div class="card border-0 shadow-sm bg-body-tertiary">
        <div class="card-body p-4">
            <h2 class="h5 text-uppercase text-secondary fw-bold mb-4">Technical Skills</h2>
            <div class="row g-4">
                <?php foreach($skills as $category => $items): ?>
                <div class="col-md-6 col-lg-3">
                    <h6 class="fw-bold text-primary mb-2"><?php echo $category; ?></h6>
                    <ul class="list-unstyled mb-0">
                        <?php foreach($items as $skill): ?>
                            <li class="small mb-1"><i class="fa-solid fa-check text-success me-2 opacity-50"></i><?php echo $skill; ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>

<?php if (!empty($projects)): ?>
<div class="container mb-5" id="projects">
    <h3 class="border-bottom pb-2 mb-4 fw-bold">Featured Projects</h3>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <?php foreach ($projects as $project): ?>
        <div class="col">
            <div class="card project-card h-100 shadow-sm border-0">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h4 class="h5 fw-bold mb-0 text-primary"><?php echo htmlspecialchars($project['name']); ?></h4>
                        <?php if(isset($project['is_featured']) && $project['is_featured']): ?>
                            <span class="badge bg-warning text-dark"><i class="fa-solid fa-star"></i></span>
                        <?php endif; ?>
                    </div>
                    <p class="small text-muted fw-bold mb-3"><?php echo htmlspecialchars($project['tagline']); ?></p>
                    <p class="card-text small"><?php echo htmlspecialchars($project['description']); ?></p>
                    
                    <div class="mb-3">
                        <?php foreach ($project['tech_stack'] as $tech): ?>
                            <span class="skill-pill text-xs"><?php echo htmlspecialchars($tech); ?></span>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php if (!empty($project['repo_url']) || !empty($project['live_url'])): ?>
                <div class="card-footer py-3">
                    <?php if (!empty($project['live_url'])): ?>
                        <a href="<?php echo $project['live_url']; ?>" class="btn btn-sm btn-primary me-2"><i class="fa-duotone fa-globe me-1"></i> Live Demo</a>
                    <?php endif; ?>
                    <?php if (!empty($project['repo_url'])): ?>
                        <a href="<?php echo $project['repo_url']; ?>" class="btn btn-sm btn-outline-secondary"><i class="fa-brands fa-github me-1"></i> Source</a>
                    <?php endif; ?>
                </div>
                <?php endif; ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>
<?php endif; ?>

<?php if (!empty($employment)): ?>
<div class="container mb-5" id="experience">
    <h3 class="border-bottom pb-2 mb-4 fw-bold">Professional Experience</h3>
    <div class="vstack gap-4">
        <?php foreach ($employment as $job): 
            // Skip non-public jobs if you want to mirror the JSON flag
            if (isset($job['is_public']) && !$job['is_public']) continue;
        ?>
        <div class="card timeline-card border-0 shadow-sm">
            <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h4 class="h5 fw-bold mb-0"><?php echo htmlspecialchars($job['company']); ?></h4>
                    <span class="badge bg-secondary"><?php echo htmlspecialchars($job['location']); ?></span>
                </div>
                
                <?php foreach ($job['roles'] as $role): ?>
                    <div class="mb-3">
                        <h5 class="h6 text-primary fw-bold mb-1">
                            <?php echo htmlspecialchars($role['title']); ?>
                        </h5>
                        <div class="small text-muted fst-italic mb-2">
                            <?php echo htmlspecialchars($role['period']); ?>
                        </div>
                        
                        <?php if (isset($role['description']['it'])): ?>
                        <ul class="small mb-0 text-secondary">
                            <?php foreach ($role['description']['it'] as $point): ?>
                                <li><?php echo htmlspecialchars($point); ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>
<?php endif; ?>

<?php if (!empty($education)): ?>
<div class="container mb-5" id="education">
    <h3 class="border-bottom pb-2 mb-4 fw-bold">Education & Certifications</h3>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <?php foreach ($education as $edu): ?>
        <div class="col">
            <div class="card h-100 border-0 shadow-sm bg-body-tertiary">
                <div class="card-body">
                    <h5 class="fw-bold mb-1"><?php echo htmlspecialchars($edu['institution']); ?></h5>
                    <p class="small text-muted mb-3"><?php echo htmlspecialchars($edu['location']); ?></p>
                    
                    <?php foreach ($edu['roles'] as $degree): ?>
                        <div class="mb-2">
                            <strong class="text-primary d-block small"><?php echo htmlspecialchars($degree['title']); ?></strong>
                            <span class="badge bg-light text-dark border"><?php echo htmlspecialchars($degree['period']); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</div>
<?php endif; ?>

<?php if (!empty($locations)): ?>
<div class="container mb-5">
    <div class="alert alert-light border shadow-sm d-flex align-items-center" role="alert">
        <i class="fa-duotone fa-map-location-dot fs-3 text-success me-3"></i>
        <div>
            <h6 class="fw-bold mb-1">Availability</h6>
            <p class="small mb-0">
                Open to roles in: 
                <?php 
                    $locLabels = array_column($locations, 'label');
                    echo implode(", ", $locLabels);
                ?>
            </p>
        </div>
    </div>
</div>
<?php endif; ?>