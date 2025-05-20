import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormStatus('idle');
            }, 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                        {t('contact.title')} <span className="text-blue-600 dark:text-blue-400">{t('contact.highlight')}</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('contact.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                            {t('contact.info.title')}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {t('contact.info.description')}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">{t('contact.info.email')}</h4>
                                    <a href="mailto:contact@johndeveloper.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        kevingarcore@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">{t('contact.info.phone')}</h4>
                                    <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        +52 55-9143-5126
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-800 dark:text-white">{t('contact.info.location')}</h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Mexico City, Mexico
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                            {t('contact.form.title')}
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={t('contact.form.name')}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {t('contact.form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder={t('contact.form.email')}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {t('contact.form.subject')}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder={t('contact.form.subject')}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder={t('contact.form.message')}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className={`
                                w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2
                                ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}
                                `}
                            >
                                {formStatus === 'submitting' ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {t('contact.form.sending')}
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        {t('contact.form.send')}
                                    </>
                                )}
                            </button>

                            {formStatus === 'success' && (
                                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                                    {t('contact.form.success')}
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
                                    {t('contact.form.error')}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;