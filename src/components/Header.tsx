import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    const navItems = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.projects'), href: '#projects' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (sectionId: string) => {
        setIsMenuOpen(false);
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a
                    href="#home"
                    className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('#home');
                    }}
                >
                    Kev<span className="text-purple-600 dark:text-purple-400">Developer</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.href);
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        onClick={toggleLanguage}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle language"
                    >
                        <Languages size={20} className="text-gray-700 dark:text-gray-300" />
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {theme === 'dark' ? (
                            <Sun size={20} className="text-yellow-400" />
                        ) : (
                            <Moon size={20} className="text-gray-700" />
                        )}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                <div className="flex items-center md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle language"
                    >
                        <Languages size={20} className="text-gray-700 dark:text-gray-300" />
                    </button>
                    <button
                        onClick={toggleTheme}
                        className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {theme === 'dark' ? (
                            <Sun size={20} className="text-yellow-400" />
                        ) : (
                            <Moon size={20} className="text-gray-700" />
                        )}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X size={24} className="text-gray-700 dark:text-gray-300" />
                        ) : (
                            <Menu size={24} className="text-gray-700 dark:text-gray-300" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;