import Axiogen1 from "../assets/images/projects/rubymuse-1.webp";
import Axiogen2 from "../assets/images/projects/rubymuse-2.webp";
import Rubymuse1 from "../assets/images/projects/rubymuse-1.webp";
import Rubymuse2 from "../assets/images/projects/rubymuse-2.webp";

const projects = [
    {
        id: 1,
        slug: "axiogen",
        title: "Axiogen Project",
        category: "uiux",
        description:
            "A modern, responsive portfolio website designed to showcase projects and services.",
        longDescription:
            "This project focuses on clean UI, responsive layout, optimized performance, and SEO-friendly structure to improve visibility and user experience.",
        thumbnail: Axiogen2,
        mainimg: Axiogen1,
        tech: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
        features: [
            "Modern and clean UI design",
            "Fully responsive across all devices",
            "Optimized for performance and SEO",
            "Smooth animations and interactions",
            "Scalable and maintainable codebase",
        ],
        client: "Personal Project",
        duration: "3 Weeks",
        status: "Completed",
        liveUrl: "https://yourportfolio.com",
    },
    {
        id: 2,
        slug: "rubymuse",
        title: "Rubymuse Website",
        category: "web",
        description:
            "A professional business website built with modern frontend technologies.",
        longDescription:
            "Rubymuse website was developed with a focus on branding, responsiveness, and performance to deliver a smooth user experience.",
        thumbnail: Rubymuse2,
        mainimg: Rubymuse1,
        tech: ["React", "JavaScript", "Bootstrap", "CSS", "HTML"],
        features: [
            "Brand-focused modern design",
            "Mobile-first responsive layout",
            "Fast loading optimized pages",
            "SEO-friendly structure",
            "Easy content scalability",
        ],
        client: "Rubymuse",
        duration: "4 Weeks",
        status: "Completed",
        liveUrl: "https://yourportfolio.com",
    },
];

export default projects;
