<?php
// pages/case-studies/jessica.php
// Context: DevOps / Server Automation / Infrastructure as Code
// Theme: Terminal / CLI / Hacker Green

$heroBg = "https://assets.raggiesoft.com/common/patterns/circuit-board.png"; 
?>

<style>
    .terminal-green { color: #00ff00; }
    .cmd-prompt { color: #00ff00; font-weight: bold; }
    .cmd-path { color: #5ea1ff; }
    .console-bg { background-color: #0c0c0c; border: 1px solid #333; font-family: 'Consolas', 'Monaco', monospace; }
    .cursor { animation: blink 1s step-end infinite; }
    @keyframes blink { 50% { opacity: 0; } }
    .module-card { border-left: 3px solid #00ff00; background: rgba(0, 255, 0, 0.05); }
</style>

<div class="container pb-5">
    
    <div class="row align-items-center py-5 my-5">
        <div class="col-lg-6">
            <div class="fade-in-up">
                <span class="badge bg-success text-black mb-3 px-3 py-2 rounded-pill text-uppercase fw-bold font-monospace">
                    <i class="fa-duotone fa-terminal me-2"></i>Infrastructure as Code
                </span>
                <h1 class="display-3 fw-bold text-body-emphasis mb-3">
                    Jessica.
                </h1>
                <p class="lead text-secondary mb-4">
                    The modular Bash engine that powers the RaggieSoft network.
                    <br>From "New Idea" to "Live URL" in <strong>30 seconds</strong>.
                </p>
                <div class="d-flex gap-3">
                    <a href="#logic" class="btn btn-dark btn-lg rounded-pill px-4">
                        <i class="fa-duotone fa-code me-2"></i>View Source Logic
                    </a>
                    <a href="/portfolio" class="btn btn-outline-secondary btn-lg rounded-pill px-4">
                        Back to Portfolio
                    </a>
                </div>
            </div>
        </div>
        
        <div class="col-lg-6">
            <div class="card console-bg shadow-lg border-0 rounded-3 overflow-hidden">
                <div class="card-header bg-dark border-bottom border-secondary d-flex gap-2 p-3">
                    <div class="rounded-circle bg-danger" style="width:12px; height:12px;"></div>
                    <div class="rounded-circle bg-warning" style="width:12px; height:12px;"></div>
                    <div class="rounded-circle bg-success" style="width:12px; height:12px;"></div>
                </div>
                <div class="card-body p-4 text-light small">
                    <div class="mb-1">
                        <span class="cmd-path">root@glowing-galaxy:~/jessica#</span> 
                        <span class="cmd-prompt">./amanda.sh</span>
                    </div>
                    <div class="text-white-50 mb-2">=== Amanda: Main Menu ===</div>
                    <div class="text-white-50 mb-1">1. Create new site (Phoebe)</div>
                    <div class="text-white-50 mb-1">2. Update system (Selene)</div>
                    <div class="text-white-50 mb-1">3. Rotate router (Helena)</div>
                    <div class="mb-2"><span class="cmd-prompt">Choice:</span> 1</div>
                    
                    <div class="text-info mb-1">> Calling Coralie for naming...</div>
                    <div class="text-white-50 mb-1">  - Router: <span class="text-success">verity</span></div>
                    <div class="text-white-50 mb-1">  - App:    <span class="text-success">julian</span></div>
                    
                    <div class="text-info mb-1">> Phoebe is configuring Nginx...</div>
                    <div class="text-white-50 mb-1">  - Domain: aethelsaga.com</div>
                    <div class="text-white-50 mb-1">  - SSL:    Let's Encrypt (Certbot)</div>
                    
                    <div class="mb-1 mt-2">
                        <span class="text-success fw-bold">SUCCESS:</span> Site is live.
                    </div>
                    <div class="mt-2">
                        <span class="cmd-path">root@glowing-galaxy:~/jessica#</span> <span class="cursor">_</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="my-5">

    <div class="row g-5" id="logic">
        <div class="col-lg-4">
            <h3 class="h5 fw-bold text-uppercase text-body-secondary mb-4">The Stack</h3>
            <ul class="list-unstyled">
                <li class="mb-3 d-flex align-items-center">
                    <i class="fa-brands fa-linux fa-2x text-warning me-3"></i>
                    <div>
                        <strong>Ubuntu 22.04 LTS</strong>
                        <div class="small text-muted">DigitalOcean Droplet</div>
                    </div>
                </li>
                <li class="mb-3 d-flex align-items-center">
                    <i class="fa-solid fa-server fa-2x text-success me-3"></i>
                    <div>
                        <strong>Nginx</strong>
                        <div class="small text-muted">Reverse Proxy & Web Server</div>
                    </div>
                </li>
                <li class="mb-3 d-flex align-items-center">
                    <i class="fa-solid fa-shield-halved fa-2x text-info me-3"></i>
                    <div>
                        <strong>Certbot</strong>
                        <div class="small text-muted">Auto-SSL Integration</div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="col-md-8">
            <h2 class="h3 fw-bold mb-4">Architecture & Philosophy</h2>
            <p class="text-secondary">
                <strong>Jessica</strong> is not a single script; she is a modular suite of Bash utilities designed to manage a multi-site Linux server. 
                She follows the philosophy of "Humanized Operations"—naming modules after people to reduce cognitive load and make server management feel like interacting with a crew.
            </p>
            <p class="text-secondary">
                Unlike standard hosting panels which are black boxes, Jessica is transparent. Every configuration file she writes is based on the <strong>Elara Standard</strong>, ensuring every site on the server shares the same secure, optimized architecture.
            </p>
        </div>
    </div>

    <div class="row g-4 mt-4">
        <div class="col-12"><h3 class="h5 fw-bold text-uppercase text-body-secondary border-bottom pb-2">The Crew</h3></div>
        
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 module-card border-0 shadow-sm">
                <div class="card-body">
                    <h4 class="h5 fw-bold text-success"><i class="fa-duotone fa-hammer me-2"></i>Phoebe</h4>
                    <p class="small text-muted mb-0">
                        The Builder. Handles site creation, Nginx configuration, and SSL provisioning. She builds the house.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-4">
            <div class="card h-100 module-card border-0 shadow-sm">
                <div class="card-body">
                    <h4 class="h5 fw-bold text-success"><i class="fa-duotone fa-rotate me-2"></i>Selene</h4>
                    <p class="small text-muted mb-0">
                        The Caretaker. Manages the update cycle, OS packages, and service restarts to keep the server healthy.
                    </p>
                </div>
            </div>
        </div>

        <div class="col-md-6 col-lg-4">
            <div class="card h-100 module-card border-0 shadow-sm">
                <div class="card-body">
                    <h4 class="h5 fw-bold text-success"><i class="fa-duotone fa-fingerprint me-2"></i>Coralie</h4>
                    <p class="small text-muted mb-0">
                        The Namer. Generates unique, secure folder names for every project to prevent directory guessing attacks.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-center mt-5">
        <div class="col-12">
            <div class="card border-secondary shadow-sm">
                <div class="card-header bg-body-tertiary">
                    <i class="fa-duotone fa-file-code me-2"></i>clara/phoebe.sh (Nginx Generation)
                </div>
                <div class="card-body bg-light p-0">
<pre class="m-0 p-4 text-dark" style="font-family: 'Consolas', monospace; font-size: 0.9rem;">
<span class="text-muted"># From Phoebe: Writing the Nginx Server Block</span>
<span class="text-primary">sudo tee</span> /etc/nginx/sites-available/$SITE_NAME > /dev/null &lt;&lt;EOF
server {
    listen 80;
    server_name $SITE_NAME;
    <span class="text-muted"># Root points to the public router folder, keeping app logic secure</span>
    root $SITE_PATH/$ROUTER_FOLDER;
    index $ROUTER_FILE;
    
    location / {
        <span class="text-muted"># The "Elara" Front Controller Pattern</span>
        try_files \$uri \$uri/ /$ROUTER_FILE?\$query_string;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.4-fpm.sock;
    }
}
EOF
</pre>
                </div>
            </div>
        </div>
    </div>

</div>