const projects = [
    {
        title: "POS Management System",
        desc: "A robust point-of-sale system tailored for small businesses and retail shops.",
        link: "https://demopontify.xyz"
    },
    {
        title: "Block 12 Creative Landing Page",
        desc: "A high-conversion landing page featuring modern UI/UX for a creative agency.",
        link: "https://azkraa.github.io/block12/"
    },
    {
        title: "Akselera Space Agency Landing Page",
        desc: "Futuristic space agency portal with interactive elements and smooth animations.",
        link: "https://akselera.space"
    },
    {
        title: "E-Commerce Dashboard",
        desc: "A real-time sales tracker built with Laravel and high-performance data handling.",
        link: "" // Will trigger coming-soon.html
    },
    {
        title: "Avery Catalog",
        desc: "A minimalist digital catalog for fashion brands looking for a clean online presence.",
        link: "https://azkraa.github.io/Avery-Catalog/" // Will trigger coming-soon.html
    }
];

const container = document.getElementById('project-grid');

projects.forEach(project => {
    // 1. Determine the URL: Use 'coming-soon.html' if link is empty
    const isComingSoon = project.link === "";
    const finalLink = isComingSoon ? "coming-soon.html" : project.link;
    
    // 2. Determine Button Text
    const btnText = isComingSoon ? "Coming Soon" : "View Project";

    // 3. Set Target: Open internal coming-soon in same tab, external in new tab
    const targetAttr = isComingSoon ? "" : 'target="_blank" rel="noopener noreferrer"';

    const card = `
        <div class="project-card">
            <div>
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
            </div>
            <a href="${finalLink}" class="link-btn" ${targetAttr}>
                ${btnText}
            </a>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
});