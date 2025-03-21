
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

interface UseProposalGeneratorReturn {
  proposal: string | null;
  isGenerating: boolean;
  error: string | null;
  generateProposal: (jobUrl: string, tone: string, platform: string, customInstructions?: string) => Promise<void>;
  setProposal: (proposal: string) => void;
  clearProposal: () => void;
}

// This is a mock function that would be replaced with actual API call
const fetchProposalFromApi = async (
  jobUrl: string,
  tone: string,
  platform: string,
  customInstructions?: string
): Promise<string> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Check if URL is valid
  if (!jobUrl.includes('upwork.com') && !jobUrl.includes('fiverr.com') && !jobUrl.includes('freelancer.com')) {
    throw new Error('Please enter a valid job URL from a supported platform');
  }
  
  // Simulate a response based on the tone
  let proposalIntro;
  if (tone === 'professional') {
    proposalIntro = "I'm writing to express my interest in your project. After reviewing your requirements, I believe my experience makes me an excellent candidate.";
  } else if (tone === 'conversational') {
    proposalIntro = "Hey there! I just came across your job posting and I'm super interested in working with you on this project.";
  } else {
    proposalIntro = "Upon examining your technical requirements, I've identified an approach that would optimize both efficiency and scalability.";
  }
  
  const closingStatement = `Please message me on ${platform} if you'd like to discuss this further. I'm looking forward to potentially working together.`;
  
  const customText = customInstructions 
    ? `\n\nAs per your specific requirements: ${customInstructions}\n\n` 
    : '\n\n';
  
  return `${proposalIntro}\n\nI have extensive experience in this field, having successfully completed several similar projects in the past. I'm confident I can deliver high-quality results that meet your expectations and deadlines.${customText}${closingStatement}\n\nBest regards,\n[Your Name]`;
};

export const useProposalGenerator = (): UseProposalGeneratorReturn => {
  const [proposal, setProposal] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const generateProposal = async (
    jobUrl: string,
    tone: string,
    platform: string,
    customInstructions?: string
  ) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const generatedProposal = await fetchProposalFromApi(
        jobUrl,
        tone,
        platform,
        customInstructions
      );
      
      setProposal(generatedProposal);
      toast({
        title: "Proposal generated",
        description: "Your proposal has been successfully generated.",
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to generate proposal. Please try again.";
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const clearProposal = () => {
    setProposal(null);
    setError(null);
  };

  return {
    proposal,
    isGenerating,
    error,
    generateProposal,
    setProposal,
    clearProposal,
  };
};
