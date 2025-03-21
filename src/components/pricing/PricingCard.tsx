
import { Check } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import { cn } from '@/lib/utils';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText?: string;
  className?: string;
}

const PricingCard = ({
  title,
  description,
  price,
  period,
  features,
  isPopular = false,
  buttonText = 'Get Started',
  className,
}: PricingCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden transition-all",
        isPopular 
          ? "shadow-xl scale-[1.02] bg-white dark:bg-gray-900" 
          : "bg-gray-50/50 dark:bg-gray-950/50 hover:shadow-md",
        className
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-xs font-medium">
          Popular
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 h-12">{description}</p>
        
        <div className="mt-6 flex items-baseline">
          <span className="text-4xl font-extrabold">{price}</span>
          <span className="ml-1 text-gray-600 dark:text-gray-400">/{period}</span>
        </div>
        
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`flex-shrink-0 mt-1 ${feature.included ? 'text-primary' : 'text-gray-400'}`}>
                <Check className="h-5 w-5" />
              </div>
              <span className={feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-500 line-through'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        
        <div className="mt-8">
          <AnimatedButton
            variant={isPopular ? 'glow' : 'default'}
            size="lg"
            fullWidth
            hasArrow
          >
            {buttonText}
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
