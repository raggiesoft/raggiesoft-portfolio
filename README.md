# MichaelPRagsdale.com

The professional portfolio and digital resume of **Michael P. Ragsdale**.

This website serves as the central hub for my work as a technologist and system administrator. It is designed not just to *display* my skills, but to *demonstrate* them through its underlying architecture.

**Live URL:** [https://michaelpragsdale.com](https://michaelpragsdale.com)

---

## 🎯 Purpose

This project transforms a static document (my resume) into a dynamic, living application. It showcases:

1.  **Full-Stack Competency:** Custom PHP routing, Bootstrap 5 front-end, and Nginx server management.
2.  **Project Case Studies:** Deep dives into complex projects like the *Jessica Automation Suite* and *The Stardust Engine*.
3.  **Professional Identity:** A consolidated view of my experience in empathetic system design, accessibility (WCAG/Section 508), and DevOps.

---

## 🛠️ Technical Architecture

Unlike a static HTML site or a heavy CMS like WordPress, this portfolio runs on a custom, lightweight PHP framework I developed called **"Elara."**

### 1. The "Elara" Smart Router
The core of the site is a file-based router (`public/index.php`) that handles URL mapping dynamically.
- **Clean URLs:** Maps `/resume` to `pages/resume.php` automatically.
- **Context Awareness:** Dynamically injects specific Open Graph tags and Page Titles based on the requested route.
- **Zero-Config:** New pages are auto-discovered; no manual route registration is required for standard views.

### 2. Separation of Concerns (CDN Architecture)
To keep this repository lightweight and maintainable, the "Code" is separated from the "Assets."
- **Code:** This repo contains only the PHP logic and HTML structure.
- **Assets:** Images, CSS, and JS are hosted on a separate DigitalOcean Space (`assets.raggiesoft.com`).
- **Theming:** The site loads a specific **"Corporate Theme"** (Royal Blue & Orange) from the CDN, defined by the `$projectSlug` in the router configuration.

### 3. Accessibility First
Reflecting my background as a Section 508 Compliance Specialist:
- **Semantic HTML:** Uses proper header hierarchies (`h1` -> `h6`) and ARIA labels.
- **Color Contrast:** The "Corporate" theme is audited for WCAG AA compliance.
- **Navigation:** Fully accessible via keyboard and screen readers.

---

## 📂 Directory Structure

```text
/michaelpragsdale.com
├── public/
│   └── index.php          <-- Entry Point & Router Logic
├── includes/
│   ├── header.php         <-- Global Head, Meta Tags, CDN Theme Loader
│   ├── footer.php         <-- Global Footer & Copyright
│   └── components/        <-- Reusable UI (Navbars, Cards)
├── pages/
│   ├── home.php           <-- Landing Page (Summary of Resume)
│   ├── resume.php         <-- Full CV (HTML Version)
│   └── projects/
│       ├── jessica.php    <-- Case Study: Server Automation
│       └── stardust.php   <-- Case Study: Narrative/AI Project
└── errors/
    └── 404.php
````

---

## 🚀 Deployment

This project is designed for a **LAMP/LEMP** stack.

- **Production Environment:** DigitalOcean Droplet (Managed via Laravel Forge).
- **Server:** Nginx (configured for PHP-FPM 8.x).
- **Document Root:** Points to the `/public` directory for security.
    

### Local Development

1. Clone the repository:
    
    Bash
    
    ```
    git clone [https://github.com/raggiesoft/raggiesoft-portfolio.git](https://github.com/raggiesoft/raggiesoft-portfolio.git)
    ```
    
2. Start the built-in PHP server:
    
    Bash
    
    ```
    cd public
    php -S localhost:8000
    ```
    
3. Visit `http://localhost:8000`.
    

---

## 📜 License

This portfolio is open source.

- **Source Code:** [MIT License](https://opensource.org/licenses/MIT)
- **Resume Content:** All rights reserved by Michael P. Ragsdale.
    

---

## 📬 Contact

- **Email:** [hireme@michaelpragsdale.com](mailto:hireme@michaelpragsdale.com)
- **GitHub:** [github.com/raggiesoft](https://github.com/raggiesoft)
- **Architecture Hub:** [raggiesoft.com](https://raggiesoft.com)
    

© 2025 Michael P. Ragsdale.