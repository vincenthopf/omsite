import { LucideIcon } from 'lucide-react';

interface CardIconProps {
  icon: LucideIcon;
  className?: string;
}

export default function CardIcon({ icon: Icon, className = '' }: CardIconProps) {
  return (
    <div className={`inline-flex items-center justify-center mb-3 ${className}`}>
      <Icon 
        className="w-6 h-6 text-sky-400 transition-colors group-hover:text-sky-300" 
        strokeWidth={1.5}
      />
    </div>
  );
}