
import { useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

interface ProposalFormProps {
  onProposalGenerated: (proposal: string) => void;
  isLoading: boolean;
  error: string | null;
}

const ProposalForm = ({ onProposalGenerated, isLoading, error }: ProposalFormProps) => {
  const { toast } = useToast();
  const [jobUrl, setJobUrl] = useState('');
  const [tone, setTone] = useState('professional');
  const [customInstructions, setCustomInstructions] = useState('');
  const [platform, setPlatform] = useState('upwork');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobUrl.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a job URL to continue.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulated proposal generation (this would connect to your API in a real app)
    const sampleProposal = `Hello,\n\nI noticed your job posting for a web developer and I'm very interested in working with you. I have 5+ years of experience building React applications and have worked on similar projects in the past.\n\nBased on your requirements, I would approach this project by first setting up the basic architecture, then implementing the core features you've described. I estimate this would take approximately 2-3 weeks to complete.\n\nMy rate for this project would be $40/hour, and I'm available to start immediately.\n\nPlease message me on ${platform} if you'd like to discuss this further.\n\nBest regards,\n[Your Name]`;
    
    setTimeout(() => {
      onProposalGenerated(sampleProposal);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="job-url">Job URL</Label>
        <Input
          id="job-url"
          placeholder="https://www.upwork.com/jobs/~01234abcd5678efgh"
          value={jobUrl}
          onChange={(e) => setJobUrl(e.target.value)}
          className="transition-all border-gray-300 dark:border-gray-700 focus:border-primary"
        />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Paste the full job URL from Upwork, Fiverr, Freelancer, etc.
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="platform">Platform</Label>
        <Select value={platform} onValueChange={setPlatform}>
          <SelectTrigger id="platform" className="w-full">
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="upwork">Upwork</SelectItem>
            <SelectItem value="fiverr">Fiverr</SelectItem>
            <SelectItem value="freelancer">Freelancer</SelectItem>
            <SelectItem value="peopleperhour">PeoplePerHour</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-4">
        <Label>Proposal Tone</Label>
        <RadioGroup 
          defaultValue="professional" 
          value={tone} 
          onValueChange={setTone}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="flex items-center space-x-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4 transition-all hover:border-primary">
            <RadioGroupItem value="professional" id="professional" />
            <Label htmlFor="professional" className="cursor-pointer font-normal flex-1">Professional</Label>
          </div>
          <div className="flex items-center space-x-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4 transition-all hover:border-primary">
            <RadioGroupItem value="conversational" id="conversational" />
            <Label htmlFor="conversational" className="cursor-pointer font-normal flex-1">Conversational</Label>
          </div>
          <div className="flex items-center space-x-2 border border-gray-200 dark:border-gray-800 rounded-lg p-4 transition-all hover:border-primary">
            <RadioGroupItem value="technical" id="technical" />
            <Label htmlFor="technical" className="cursor-pointer font-normal flex-1">Technical</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="custom-instructions">Custom Instructions (Optional)</Label>
        <Textarea
          id="custom-instructions"
          placeholder="Add any specific requirements or information you want to include in your proposal..."
          value={customInstructions}
          onChange={(e) => setCustomInstructions(e.target.value)}
          className="min-h-[100px] transition-all border-gray-300 dark:border-gray-700 focus:border-primary"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Proposal...
          </>
        ) : (
          'Generate Proposal'
        )}
      </Button>
    </form>
  );
};

export default ProposalForm;
