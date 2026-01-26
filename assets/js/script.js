const projects = [
    {
        title: "POS Management System",
        desc: "A robust point-of-sale system tailored for small businesses and retail shops.",
        link: "https://demopontify.xyz"
    },
    {
        title: "Block 12 Creative Company Profile",
        desc: "A high-conversion landing page featuring modern UI/UX for a creative agency.",
        link: "https://azkraa.github.io/block12/"
    },
    {
        title: "Akselera Space Agency Company Profile",
        desc: "Futuristic space agency portal with interactive elements and smooth animations.",
        link: "https://akselera.space"
    },
    {
        title: "Avery Catalog",
        desc: "A minimalist digital catalog for fashion brands looking for a clean online presence.",
        link: "https://azkraa.github.io/Avery-Catalog/"
    },
    {
        title: "Fast Cargo Company Profile",
        desc: "Professional company profile project designed to showcase Fast Cargo as a reliable and efficient logistics and shipping service provider.",
        link: "https://azkraa.github.io/FastCargo/"
    },
    {
        title: "Evently Landing Page",
        desc: "Modern web landing page designed for an event ticketing platform that helps users discover, explore, and purchase tickets for upcoming events with ease.",
        link: "" // Will trigger coming-soon.html
    },
    {
        title: "E-Commerce Dashboard",
        desc: "A real-time sales tracker built with Laravel and high-performance data handling.",
        link: "" // Will trigger coming-soon.html
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