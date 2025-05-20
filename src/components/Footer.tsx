import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-200 mb-3">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#home"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#home')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            });
                                        }}
                                    >
                                        {t('nav.home')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#about"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#about')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            });
                                        }}
                                    >
                                        {t('nav.about')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#projects')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            });
                                        }}
                                    >
                                        {t('nav.projects')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-gray-400 hover:text-blue-400 transition-colors"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#contact')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            });
                                        }}
                                    >
                                        {t('nav.contact')}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-200 mb-3">{t('contact.info.title')}</h3>
                            <ul className="space-y-2">
                                <li className="text-gray-400">
                                    <a href="mailto:kevingarcore@gmail.com" className="hover:text-blue-400 transition-colors inline-flex items-center gap-2">
                                        <Mail size={16} /> kevingarcore@gmail.com
                                    </a>
                                </li>
                                <li className="text-gray-400">
                                    Mexico City, Mexico
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {currentYear} Kev Developer. All rights reserved.
                    </p>

                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/K-ser"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kevin-garcia-a7a898247/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:kevingarcore@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            aria-label="Gmail"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;