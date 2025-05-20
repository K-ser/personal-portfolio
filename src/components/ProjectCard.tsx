import { useState } from 'react';
import { ExternalLink, Github, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    demoLink: string;
    codeLink: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const [showDetails, setShowDetails] = useState(false);
    const { t } = useTranslation();

    return (
        <div
            className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
            <div className="relative overflow-hidden h-56">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs font-medium bg-blue-600/80 text-white rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
                            aria-label={t('projects.viewDemo')}
                        >
                            <ExternalLink size={18} />
                        </a>
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
                            aria-label={t('projects.viewCode')}
                        >
                            <Github size={18} />
                        </a>
                        <button
                            onClick={() => setShowDetails(!showDetails)}
                            className="p-2 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
                            aria-label={t('projects.details')}
                        >
                            <Info size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                    {project.description}
                </p>

                {showDetails && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{t('projects.details')}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {project.description}
                        </p>
                        <div className="flex flex-col gap-2">
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                            >
                                <ExternalLink size={16} /> {t('projects.viewDemo')}
                            </a>
                            <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                            >
                                <Github size={16} /> {t('projects.viewCode')}
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;