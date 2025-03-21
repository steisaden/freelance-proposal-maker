
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProposalForm from '@/components/ProposalForm';
import ProposalResult from '@/components/ProposalResult';
import { useProposalGenerator } from '@/hooks/useProposalGenerator';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Generator = () => {
  const { proposal, isGenerating, error, generateProposal, setProposal } = useProposalGenerator();
  const [activeTab, setActiveTab] = useState<string>('form');

  const handleProposalGenerated = (generatedProposal: string) => {
    setProposal(generatedProposal);
    setActiveTab('result');
  };

  const handleEditProposal = (editedProposal: string) => {
    setProposal(editedProposal);
  };

  const containerVariants = {
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
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                asChild
              >
                <a href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </a>
              </Button>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Proposal Generator</h1>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                Create a professional, tailored proposal in seconds
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="border-b border-gray-200 dark:border-gray-800">
                  <div className="px-6 pt-6">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="form">
                        1. Create Proposal
                      </TabsTrigger>
                      <TabsTrigger value="result" disabled={!proposal}>
                        2. Edit & Copy
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>

                <div className="p-6">
                  <TabsContent value="form" className="mt-0">
                    <ProposalForm 
                      onProposalGenerated={handleProposalGenerated}
                      isLoading={isGenerating}
                      error={error}
                    />
                  </TabsContent>
                  
                  <TabsContent value="result" className="mt-0">
                    {proposal && (
                      <ProposalResult 
                        proposal={proposal}
                        onEdit={handleEditProposal}
                      />
                    )}
                  </TabsContent>
                </div>
              </Tabs>
            </div>
            
            <div className="mt-8 bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">Tips for Effective Proposals</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
                <li>Always personalize your proposal with specific details from the job posting</li>
                <li>Address the client's pain points directly in your proposal</li>
                <li>Highlight relevant experience and past successes</li>
                <li>Keep your proposal concise and to the point</li>
                <li>Include a clear call to action at the end</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Generator;
