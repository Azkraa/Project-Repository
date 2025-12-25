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
        link: ""
    },
    {
        title: "Fashlog",
        desc: "A minimalist digital catalog for fashion brands looking for a clean online presence.",
        link: ""
    }
];

const container = document.getElementById('project-grid');

projects.forEach(project => {
    const card = `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <a href="${project.link}" class="link-btn" target="_blank">View Project</a>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
});