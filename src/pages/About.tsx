
import { motion } from 'framer-motion';
import { Users, Zap, Award, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
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
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">About ProposalCraft</h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We're on a mission to help freelancers win more clients through perfect proposals.
            </p>
          </motion.div>
          
          {/* Our Story */}
          <motion.div
            className="max-w-3xl mx-auto prose prose-lg dark:prose-invert mb-16 md:mb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-center" 
              variants={itemVariants}
            >
              Our Story
            </motion.h2>
            <motion.p variants={itemVariants}>
              ProposalCraft was born from a simple observation: freelancers spend too much time writing proposals and not enough time doing the work they love. As freelancers ourselves, we experienced the frustration of crafting unique proposals for each job, only to be rejected or never hear back.
            </motion.p>
            <motion.p variants={itemVariants}>
              We created ProposalCraft to solve this problem. Our platform helps freelancers create tailored, professional proposals in seconds, saving hours of valuable time and increasing acceptance rates.
            </motion.p>
            <motion.p variants={itemVariants}>
              Since our launch, we've helped thousands of freelancers win more clients and grow their businesses. We're proud to be part of their success stories and committed to continuously improving our platform to meet their evolving needs.
            </motion.p>
          </motion.div>
          
          {/* Values */}
          <motion.div 
            className="mb-16 md:mb-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-center mb-12" 
              variants={itemVariants}
            >
              Our Values
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
              >
                <div className="bg-primary/10 text-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We build tools that help freelancers understand and address their clients' needs effectively, creating win-win relationships.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
              >
                <div className="bg-primary/10 text-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Efficiency</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in maximizing productivity by automating repetitive tasks, allowing freelancers to focus on what they do best.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
              >
                <div className="bg-primary/10 text-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We're committed to providing high-quality tools that help freelancers present themselves professionally and win more work.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800"
                variants={itemVariants}
              >
                <div className="bg-primary/10 text-primary h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We foster a supportive community of freelancers who share insights and help each other succeed in the competitive freelance marketplace.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your freelance career?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of freelancers who are winning more clients with ProposalCraft.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started Today</Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
