
import { useState } from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import PricingCard from '@/components/pricing/PricingCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const basicFeatures = [
    { text: '50 proposals per month', included: true },
    { text: 'Basic proposal templates', included: true },
    { text: 'Professional tone', included: true },
    { text: 'Job description analysis', included: true },
    { text: 'Editable proposals', included: true },
    { text: 'Advanced customization', included: false },
    { text: 'Priority support', included: false },
    { text: 'Custom branding', included: false },
  ];
  
  const proFeatures = [
    { text: '200 proposals per month', included: true },
    { text: 'All proposal templates', included: true },
    { text: 'All writing tones', included: true },
    { text: 'Advanced job analysis', included: true },
    { text: 'Editable proposals', included: true },
    { text: 'Advanced customization', included: true },
    { text: 'Priority support', included: true },
    { text: 'Custom branding', included: false },
  ];
  
  const businessFeatures = [
    { text: 'Unlimited proposals', included: true },
    { text: 'All proposal templates', included: true },
    { text: 'All writing tones', included: true },
    { text: 'Advanced job analysis', included: true },
    { text: 'Editable proposals', included: true },
    { text: 'Advanced customization', included: true },
    { text: 'Priority support', included: true },
    { text: 'Custom branding', included: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Pricing Plans</h1>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your freelancing needs. Start for free and upgrade as you grow.
            </p>
            
            <div className="flex items-center justify-center mt-8">
              <Label htmlFor="billing-toggle" className={`text-sm ${!isAnnual ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                Monthly
              </Label>
              <Switch
                id="billing-toggle"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="mx-4"
              />
              <Label htmlFor="billing-toggle" className={`text-sm ${isAnnual ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                Annually
                <span className="ml-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                  Save 20%
                </span>
              </Label>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <PricingCard
                title="Starter"
                description="Perfect for freelancers just getting started"
                price={isAnnual ? "$8" : "$10"}
                period={isAnnual ? "month" : "month"}
                features={basicFeatures}
                buttonText="Get Started"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <PricingCard
                title="Professional"
                description="For active freelancers seeking more clients"
                price={isAnnual ? "$16" : "$20"}
                period={isAnnual ? "month" : "month"}
                features={proFeatures}
                isPopular={true}
                buttonText="Get Started"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <PricingCard
                title="Business"
                description="For agencies and power users"
                price={isAnnual ? "$32" : "$40"}
                period={isAnnual ? "month" : "month"}
                features={businessFeatures}
                buttonText="Get Started"
              />
            </motion.div>
          </motion.div>
          
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-semibold">All plans include:</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">Job description analysis</span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">Multiple writing tones</span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">Editable proposals</span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">Platform integrations</span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">Secure cloud storage</span>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span className="ml-3 text-gray-700 dark:text-gray-300">Regular updates</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 max-w-3xl mx-auto p-8 rounded-xl bg-gray-50 dark:bg-gray-900 text-center">
            <h2 className="text-2xl font-semibold">Need a custom plan?</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Contact us for custom pricing tailored to your specific requirements.
            </p>
            <Button className="mt-5 bg-primary hover:bg-primary/90">Contact Sales</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
