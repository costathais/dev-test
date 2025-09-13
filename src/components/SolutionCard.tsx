import { IconName, SolutionProps } from '@/types';
import { ListTodo, Search, BanknoteArrowUp, LucideIcon } from 'lucide-react';
import Link from 'next/link';


const iconMap: Record<IconName, LucideIcon> = {
    'letter-text': ListTodo,
    'search': Search,
    'banknote-arrow-up': BanknoteArrowUp,
};

export function SolutionCard({ title, description, icon, ctas }: SolutionProps) {
    const IconComponent = iconMap[icon];
    
    return (
        <div className="flex flex-col p-4 text-[#170038]">
        <div className="w-24 h-24 relative mb-4">
        {IconComponent ? (
            <IconComponent
            className="w-18 h-18 md:w-24 md:h-24 text-[#FF4D00]"
            />
        ) : null}   
        </div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-base mb-4">{description}</p>
        <Link
        href={ctas.url}
        className="inline-block max-w-full bg-[#170038] font-semibold text-white px-4 py-2 rounded-lg uppercase break-words"
        >
        {ctas.name}
        </Link>
        </div>
    );
}
