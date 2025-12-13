<?php
// includes/utils/data-loader.php

/**
 * Fetches and decodes a JSON file from the Portfolio CDN.
 * * @param string $filename The name of the file (e.g., 'projects.json')
 * @return array The decoded data as an associative array, or an empty array on failure.
 */
function getPortfolioData($filename) {
    // 1. Define the Source of Truth
    $cdn_base = "https://assets.raggiesoft.com/portfolio/json/";
    $url = $cdn_base . $filename;
    
    // 2. Fetch the content
    // We use @ to suppress warnings if the file doesn't exist yet
    $json_content = @file_get_contents($url);
    
    // 3. Validate
    if ($json_content === false) {
        // Optional: Log error in a real production environment
        return [];
    }
    
    // 4. Decode and Return
    return json_decode($json_content, true) ?? [];
}
?>