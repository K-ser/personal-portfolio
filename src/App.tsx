import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;