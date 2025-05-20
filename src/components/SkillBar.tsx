import { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
    name: string;
    percentage: number;
}

const SkillBar = ({ name, percentage }: SkillBarProps) => {
    const [animate, setAnimate] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div ref={ref} className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{percentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                    style={{
                        width: animate ? `${percentage}%` : '0%',
                        transitionDelay: '0.2s'
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;