<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    
    <li class="nav-item">
        <a class="nav-link <?php echo ($request_uri === '/') ? 'active text-primary fw-bold' : ''; ?>" href="/">Home</a>
    </li>
    
    <li class="nav-item">
        <a class="nav-link <?php echo ($request_uri === '/resume') ? 'active text-primary fw-bold' : ''; ?>" href="/resume">Resume</a>
    </li>

    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle <?php echo (str_starts_with($request_uri, '/projects')) ? 'active text-primary fw-bold' : ''; ?>" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
        </a>
        <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0">
            <li><h6 class="dropdown-header text-uppercase small text-muted">Case Studies</h6></li>
            <li>
                <a class="dropdown-item" href="/projects/stardust-engine">
                    <i class="fa-duotone fa-planet-ringed me-2 text-primary"></i>The Stardust Engine
                </a>
            </li>
            <li>
                <a class="dropdown-item" href="/projects/jessica">
                    <i class="fa-duotone fa-robot me-2 text-warning"></i>Jessica Automation
                </a>
            </li>
             <li><hr class="dropdown-divider"></li>
            <li>
                <a class="dropdown-item" href="https://raggiesoft.com" target="_blank">
                     <i class="fa-duotone fa-layer-group me-2 text-secondary"></i>RaggieSoft Architecture
                </a>
            </li>
        </ul>
    </li>

    <li class="nav-item">
        <a class="nav-link" href="https://github.com/raggiesoft" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i> GitHub
        </a>
    </li>

    <li class="nav-item ms-lg-3">
        <a class="btn btn-primary btn-sm px-3 rounded-pill" href="mailto:hireme@michaelpragsdale.com">
            <i class="fa-duotone fa-paper-plane me-2"></i>Contact
        </a>
    </li>
</ul>