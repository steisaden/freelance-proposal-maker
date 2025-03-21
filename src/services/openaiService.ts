
import { toast } from '@/components/ui/use-toast';

interface GenerateProposalParams {
  jobUrl: string;
  tone: string;
  platform: string;
  customInstructions?: string;
  proposalLength?: number;
}

// This is a simulated API call - in a real implementation, this would connect to your backend
// which would then make the actual API call to OpenAI with your API key
export const generateProposalWithGPT4o = async ({
  jobUrl,
  tone,
  platform,
  customInstructions = '',
  proposalLength = 250
}: GenerateProposalParams): Promise<string> => {
  try {
    // In production, this would be an API call to your backend
    console.log('Generating proposal with GPT-4o-mini for:', jobUrl);
    console.log('Tone:', tone);
    console.log('Platform:', platform);
    console.log('Custom instructions:', customInstructions);
    console.log('Proposal length:', proposalLength);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Validate URL
    if (!jobUrl.includes('upwork.com') && !jobUrl.includes('fiverr.com') && !jobUrl.includes('freelancer.com')) {
      throw new Error('Please enter a valid job URL from a supported platform');
    }
    
    // Simulate GPT-4o-mini response with different tones
    let proposalIntro;
    if (tone === 'professional') {
      proposalIntro = "I'm writing to express my interest in your project. After reviewing your requirements, I believe my experience makes me an excellent candidate.";
    } else if (tone === 'conversational') {
      proposalIntro = "Hey there! I came across your job posting and I'm really excited about the opportunity to work with you on this project.";
    } else if (tone === 'technical') {
      proposalIntro = "Upon analyzing your technical requirements, I'd like to present my approach to delivering an efficient and scalable solution for your project.";
    } else {
      proposalIntro = "Thank you for posting this job opportunity. I'm interested in working with you on this project.";
    }
    
    // Create a simulated proposal with appropriate length
    const lengthFactor = proposalLength / 250;
    
    const skillsSection = "I have extensive experience in this field, having successfully completed several similar projects. Key highlights of my background include:\n\n• Over 5 years of expertise in web development and design\n• Proficiency in modern frameworks and technologies\n• A portfolio of successful projects with satisfied clients\n• Strong communication skills and responsive work ethic";
    
    const approachSection = lengthFactor > 1 ? "\n\nMy approach to your project would be methodical and client-focused. I would begin with a thorough analysis of your requirements, followed by regular updates throughout the development process to ensure alignment with your vision." : "";
    
    const timelineSection = lengthFactor > 1.5 ? "\n\nBased on your requirements, I estimate this project would take approximately 2-3 weeks to complete, with the first deliverable ready within 3-4 days of project commencement." : "";
    
    const customSection = customInstructions ? `\n\nRegarding your specific requirements: ${customInstructions}\n\n` : '\n\n';
    
    const closingStatement = `I would be happy to discuss this project in more detail. Please feel free to message me on ${platform} if you have any questions or would like to schedule a call.\n\nLooking forward to potentially working together.\n\nBest regards,\n[Your Name]`;
    
    return `${proposalIntro}\n\n${skillsSection}${approachSection}${timelineSection}${customSection}${closingStatement}`;
  } catch (error) {
    console.error('Error generating proposal:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate proposal';
    toast({
      title: "Error",
      description: errorMessage,
      variant: "destructive",
    });
    throw error;
  }
};
