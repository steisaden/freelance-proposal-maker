
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { generateProposalWithGPT4o } from '@/services/openaiService';

interface UseProposalGeneratorReturn {
  proposal: string | null;
  isGenerating: boolean;
  error: string | null;
  generateProposal: (jobUrl: string, tone: string, platform: string, customInstructions?: string, proposalLength?: number) => Promise<void>;
  setProposal: (proposal: string) => void;
  clearProposal: () => void;
  isPremiumUser: boolean;
  setIsPremiumUser: (isPremium: boolean) => void;
}

export const useProposalGenerator = (): UseProposalGeneratorReturn => {
  const [proposal, setProposal] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPremiumUser, setIsPremiumUser] = useState(false);
  const { toast } = useToast();

  const generateProposal = async (
    jobUrl: string,
    tone: string,
    platform: string,
    customInstructions?: string,
    proposalLength?: number
  ) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const generatedProposal = await generateProposalWithGPT4o({
        jobUrl,
        tone,
        platform,
        customInstructions,
        proposalLength
      });
      
      setProposal(generatedProposal);
      toast({
        title: "Proposal generated",
        description: "Your proposal has been successfully generated using GPT-4o-mini.",
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
    isPremiumUser,
    setIsPremiumUser
  };
};
