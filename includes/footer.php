<footer class="mt-auto py-5">
    <div class="container text-center">
        
        <h2 class="h4 fw-bold text-uppercase text-glow-primary">
            <?php if ($currentSite === 'aethel'): ?>
                The Silver Gauntlet of Aethel
            <?php elseif ($currentSite === 'stardust-engine'): ?>
                The Stardust Engine
            <?php else: ?>
                RaggieSoft
            <?php endif; ?>
        </h2>

        <p class="mt-2 text-body-secondary">
            <?php if ($currentSite === 'aethel'): ?>
                A restored 1980s fantasy saga by Michael Ragsdale.
            <?php elseif ($currentSite === 'stardust-engine'): ?>
                A musical universe created with Gemini, Suno, and DALL-E.
            <?php else: ?>
                Narrative Engineering & Full Stack Development.
            <?php endif; ?>
        </p>

        <p class="mt-4 small text-body-secondary">
            Content licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" class="link-secondary">CC BY-SA 4.0</a>.
            | Code licensed under <a href="https://opensource.org/licenses/MIT" class="link-secondary">MIT</a>.
        </p>

        <div class="mt-4 d-flex justify-content-center gap-4">
            <a href="https://github.com/raggiesoft" class="link-secondary fs-4"><i class="fa-brands fa-github"></i></a>
            <a href="https://michaelpragsdale.com" class="link-secondary fs-4"><i class="fa-duotone fa-briefcase"></i></a>
        </div>
    </div>
</footer>