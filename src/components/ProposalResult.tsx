
import { useState, useRef } from 'react';
import { Copy, Check, Edit2, Send, Lock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

interface ProposalResultProps {
  proposal: string;
  onEdit: (editedProposal: string) => void;
  isPremiumUser: boolean;
}

const ProposalResult = ({ proposal, onEdit, isPremiumUser }: ProposalResultProps) => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProposal, setEditedProposal] = useState(proposal);
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editedProposal);
      setIsCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Your proposal has been copied to clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
      }
    }, 0);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    onEdit(editedProposal);
    toast({
      title: "Changes saved",
      description: "Your edits have been saved.",
    });
  };

  const handleCancelEdit = () => {
    setEditedProposal(proposal);
    setIsEditing(false);
  };

  const handleDirectSubmit = () => {
    if (!isPremiumUser) {
      toast({
        title: "Premium feature",
        description: "Direct submission is available only for premium users. Please upgrade your plan.",
        variant: "destructive",
      });
      return;
    }
    
    setShowDialog(true);
  };

  const handleSubmitProposal = async () => {
    setIsSubmitting(true);
    
    // This would be an API call to submit the proposal directly to the platform
    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowDialog(false);
    
    toast({
      title: "Proposal submitted",
      description: "Your proposal has been successfully submitted to the client.",
    });
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Your Proposal</h3>
        <div className="flex flex-wrap gap-2 justify-end">
          {isEditing ? (
            <>
              <Button variant="outline" size="sm" onClick={handleCancelEdit}>
                Cancel
              </Button>
              <Button variant="default" size="sm" onClick={handleSaveEdit}>
                Save
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={handleEdit}
                className="flex items-center gap-1.5"
              >
                <Edit2 className="h-4 w-4" />
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="flex items-center gap-1.5"
              >
                {isCopied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
              {isPremiumUser ? (
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleDirectSubmit}
                  className="flex items-center gap-1.5 bg-primary"
                >
                  <Send className="h-4 w-4" />
                  Submit Directly
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5"
                  onClick={() => toast({
                    title: "Premium feature",
                    description: "Direct submission is available only for premium users. Please upgrade your plan.",
                  })}
                >
                  <Lock className="h-4 w-4" />
                  Premium Feature
                </Button>
              )}
            </>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden transition-all">
        {isEditing ? (
          <Textarea
            ref={textareaRef}
            value={editedProposal}
            onChange={(e) => setEditedProposal(e.target.value)}
            className="min-h-[300px] p-4 w-full font-mono text-sm border-0 focus-visible:ring-0 resize-y"
          />
        ) : (
          <div className="p-4 whitespace-pre-wrap font-mono text-sm max-h-[500px] overflow-y-auto">
            {editedProposal}
          </div>
        )}
      </div>

      {!isPremiumUser && (
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex items-start gap-3">
          <Lock className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-amber-800 dark:text-amber-400">Premium Feature</h4>
            <p className="text-sm text-amber-700 dark:text-amber-500">
              Upgrade to a paid plan to submit proposals directly to clients without leaving ProposalCraft.
            </p>
          </div>
        </div>
      )}

      <div className="text-xs text-gray-500 dark:text-gray-400 italic">
        Remember to review and personalize this proposal before sending it to potential clients.
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Proposal Directly</DialogTitle>
            <DialogDescription>
              Your proposal will be submitted directly to the client through their platform.
            </DialogDescription>
          </DialogHeader>
          
          <div className="max-h-[300px] overflow-y-auto border rounded-md p-3 bg-gray-50 dark:bg-gray-900">
            <pre className="text-sm whitespace-pre-wrap">{editedProposal}</pre>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmitProposal} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Proposal
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProposalResult;
