import { useEffect, useRef } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const letters = titleRef.current?.textContent?.split('') || [];
        if (titleRef.current) {
            titleRef.current.innerHTML = '';

            letters.forEach((letter, i) => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.classList.add('inline-block', 'transition-transform', 'duration-300');
                span.style.animationDelay = `${i * 0.05}s`;
                titleRef.current?.appendChild(span);
            });
        }

        const handleHover = () => {
            const spans = titleRef.current?.querySelectorAll('span');
            spans?.forEach((span, i) => {
                span.style.transitionDelay = `${i * 0.02}s`;
                span.classList.add('hover:text-blue-600', 'dark:hover:text-blue-400');
            });
        };

        titleRef.current?.addEventListener('mouseenter', handleHover);

        return () => {
            titleRef.current?.removeEventListener('mouseenter', handleHover);
        };
    }, []);

    const scrollToNext = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center relative pt-16 pb-16 px-4 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
        >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-40 left-1/3 w-64 h-64 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto max-w-4xl text-center z-10 space-y-8">
                <p className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4 animate-fadeIn">
                    {t('hero.greeting')}
                </p>
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight mb-6 animate-fadeIn"
                >
                    Kev-Developer
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fadeIn animation-delay-400">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects')?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                            });
                        }}
                    >
                        {t('hero.viewWork')}
                    </a>
                    <a
                        href="/resume.pdf"
                        className="px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 border border-blue-200 dark:border-gray-700"
                        download
                    >
                        <Download size={18} />
                        {t('hero.resume')}
                    </a>
                </div>

                <div className="flex justify-center items-center gap-4 mt-8 animate-fadeIn animation-delay-600">
                    <a
                        href="https://github.com/K-ser"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kevin-garcia-a7a898247/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href='mailto:kevingarcore@gmail.com'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        aria-label="Gmail"
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <button
                    onClick={scrollToNext}
                    className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label="Scroll down"
                >
                    <ChevronDown size={24} />
                </button>
            </div>
        </section>
    );
};

export default Hero;