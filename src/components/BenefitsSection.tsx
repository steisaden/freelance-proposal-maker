
import { Clock, TrendingUp, ArrowRight, Check, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitItem = ({ icon, title, description, delay }: BenefitItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all"
    >
      <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary">
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Save up to 90% of your time",
      description: "Generate professional proposals in seconds instead of hours. Apply to more jobs in less time."
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Increase your success rate",
      description: "Our clients report up to 75% higher response rates with tailored proposals that match client needs."
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Premium quality output",
      description: "Powered by OpenAI's GPT-4o-mini to ensure professional, engaging, and error-free proposals."
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Multiple writing styles",
      description: "Choose from professional, conversational, or technical tones to match your personal brand."
    },
    {
      icon: <Check className="h-5 w-5" />,
      title: "Direct submission",
      description: "Premium users can submit proposals directly to clients without leaving ProposalCraft."
    },
    {
      icon: <ArrowRight className="h-5 w-5" />,
      title: "Seamless workflow",
      description: "Integrates with major freelance platforms including Upwork, Fiverr, and Freelancer."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Boost Your Freelance Success
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            Save valuable time and win more clients with our AI-powered proposal generator
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
