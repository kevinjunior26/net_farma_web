import { motion } from "framer-motion";

interface HeadlineProps {
    title: string;
    highlights?: string[];
    description: string;
    size?: 'sm' | 'md' | 'lg';
    align?: 'center' | 'left' | 'right';
}

const titleSizeMap = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
};

export default function Headline({
     title,
     highlights,
     description,
     size = 'md',
     align = 'center',
 }: HeadlineProps) {
    const alignClass =
        align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right';

    const titleSize = titleSizeMap[size];

    const getHighlightedTitle = () => {
        if (!highlights || highlights.length === 0) return title;

        const regex = new RegExp(`(${highlights.join('|')})`, 'gi');

        return title.split(regex).map((part, index) =>
                highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
                    <span key={index} className="text-transparent bg-clip-text bg-health-gradient">
          {part}
        </span>
                ) : (
                    <span key={index}>{part}</span>
                )
        );
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${alignClass} mb-16`}
        >
            <h2 className={`${titleSize} font-bold text-gray-900 mb-4`}>
                {getHighlightedTitle()}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </motion.div>
    );
}
