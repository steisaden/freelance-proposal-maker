
import { useNavigate } from 'react-router-dom';
import { ArrowRight, FileText, MessageSquare, Zap, Clock, Shield, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedButton } from '@/components/ui/AnimatedButton';
import FeatureCard from '@/components/features/FeatureCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TestimonialCarousel from '@/components/testimonials/TestimonialCarousel';
import BenefitsSection from '@/components/BenefitsSection';

const Index = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/generator');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-balance">
              Craft Perfect Freelance Proposals in <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">Seconds</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Generate tailor-made proposals for any freelance job posting. Win more clients with professional, personalized proposals that set you apart.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <AnimatedButton
                variant="glow"
                size="xl"
                hasArrow
                onClick={handleGetStarted}
              >
                Start Generating
              </AnimatedButton>
              <Button
                variant="outline"
                size="xl"
                className="border-gray-300 dark:border-gray-700"
                onClick={() => navigate("/pricing")}
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <BenefitsSection />
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">What Our Users Say</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Join thousands of freelancers who are winning more clients with ProposalCraft
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold">Features designed for freelance success</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Everything you need to create winning proposals and boost your acceptance rate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="Instant Generation"
              description="Generate tailored proposals in seconds using the job URL. Save hours of writing time."
            />
            <FeatureCard
              icon={<FileText className="h-6 w-6" />}
              title="Job Analysis"
              description="Our AI extracts and analyzes job requirements to create highly relevant proposals."
            />
            <FeatureCard
              icon={<MessageSquare className="h-6 w-6" />}
              title="Multiple Tones"
              description="Choose from professional, conversational, or technical writing styles to match your voice."
            />
            <FeatureCard
              icon={<Edit3 className="h-6 w-6" />}
              title="Fully Editable"
              description="Easily edit and customize your generated proposals before sending them out."
            />
            <FeatureCard
              icon={<Clock className="h-6 w-6" />}
              title="Time-Saving"
              description="Apply to more jobs in less time with efficiently generated proposals."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Direct Submission"
              description="Premium users can submit proposals directly to clients without leaving ProposalCraft."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl bg-primary-foreground">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5"></div>
            <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to win more freelance jobs?</h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Start generating professional proposals in seconds. Increase your chances of getting hired and save valuable time.
              </p>
              <div className="mt-8">
                <AnimatedButton
                  variant="glow"
                  size="xl"
                  hasArrow
                  onClick={handleGetStarted}
                >
                  Start for Free
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
