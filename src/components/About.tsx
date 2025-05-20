import { Code, Layout, Database } from 'lucide-react';
import SkillBar from './SkillBar';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    const hardSkills = [
        { name: 'HTML & CSS', percentage: 80 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 60 },
        { name: 'TypeScript', percentage: 25 },
        { name: 'Tailwind', percentage: 40 },
        { name: 'SASS', percentage: 65 },
    ];
    
    const softSkills = [
        {id: 'communication', label: t('about.softSkillsList.communication')},
        {id: 'teamwork', label: t('about.softSkillsList.teamwork')},
        {id: 'attentionToDetail', label: t('about.softSkillsList.attentionToDetail')},
        {id: 'problemSolving', label: t('about.softSkillsList.problemSolving')},
    ]
    

    const techStack = [
        { name: 'Frontend', icon: <Layout className="w-6 h-6 text-blue-600 dark:text-blue-400" />, description: 'Creating responsive and user-friendly interfaces' },
        // { name: 'Backend', icon: <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />, description: 'Building robust API endpoints and server logic' },
        { name: 'Database', icon: <Database className="w-6 h-6 text-orange-600 dark:text-orange-400" />, description: 'Managing data storage and retrieval systems' },
        { name: 'Coding', icon: <Code className="w-6 h-6 text-green-600 dark:text-green-400" />, description: 'Writing clean, efficient, and maintainable code' },
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                        {t('about.title')} <span className="text-blue-600 dark:text-blue-400">{t('about.me')}</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            {t('about.whoIAm')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('about.bio1')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('about.bio2')}
                        </p>

                        <div className="pt-4">
                            <a
                                href="#contact"
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    });
                                }}
                            >
                                {t('about.getInTouch')}
                            </a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className='space-y-6'>
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                {t('about.hardSkills')}
                            </h3>
                            <div className="space-y-4">
                                {hardSkills.map((skill) => (
                                    <SkillBar
                                        key={skill.name}
                                        name={skill.name}
                                        percentage={skill.percentage}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='space-y-6'> 
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                {t('about.softSkills')}
                            </h3>
                            <div className="space-y-4">
                                {softSkills.map((skill) => (
                                    <p
                                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                                    key={skill.id}
                                    >
                                        {skill.label}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-12">
                        {t('about.techStack')}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {techStack.map((tech) => (
                            <div
                                key={tech.name}
                                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
                            >
                                <div className="flex items-center mb-4">
                                    {tech.icon}
                                    <h4 className="text-xl font-medium ml-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {tech.name}
                                    </h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {tech.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;