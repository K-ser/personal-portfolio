import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            title: 'Personal Portfolio',
            description: 'A fully responsive portfolio to junior web developer.',
            image: '/assets/img/portfolio.png',
            technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
            category: 'frontend',
            demoLink: 'https://personal-portfolio-eight-alpha-61.vercel.app/',
            codeLink: 'https://github.com/K-ser/personal-portfolio',
        },
        {
            id: 2,
            title: 'Movie App',
            description: 'A movie search application that allows users to search for movies, view details, and save favorites.',
            image: '../assets/img/movie-app.png',
            technologies: ['HTML/CSS', 'JavaScript', 'TMDB API'],
            category: 'frontend',
            demoLink: 'https://movie-app-henna-five-65.vercel.app/#home',
            codeLink: 'https://github.com/K-ser/movie-app',
        },
        {
            id: 3,
            title: 'Showi Landing Page',
            description: 'A landing page for a fictional product called Showi.',
            image: '../assets/img/showi.png',
            technologies: ['JavaScript', 'HTML', 'SASS'],
            category: 'frontend',
            demoLink: 'https://showi-landing-page.vercel.app/',
            codeLink: 'https://github.com/K-ser/showi',
        },
    ];

    const filters = [
        { id: 'all', label: t('projects.filters.all') },
        { id: 'frontend', label: t('projects.filters.frontend') },
        { id: 'backend', label: t('projects.filters.backend') },
        { id: 'fullstack', label: t('projects.filters.fullstack') },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                        {t('projects.title')} <span className="text-blue-600 dark:text-blue-400">{t('projects.highlight')}</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('projects.description')}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`
                px-6 py-2 rounded-full transition-all duration-300
                ${activeFilter === filter.id
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}
              `}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;