
import { useState, useRef } from 'react';
import { Copy, Check, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from '@/components/ui/textarea';

interface ProposalResultProps {
  proposal: string;
  onEdit: (editedProposal: string) => void;
}

const ProposalResult = ({ proposal, onEdit }: ProposalResultProps) => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [editedProposal, setEditedProposal] = useState(proposal);
  const [isCopied, setIsCopied] = useState(false);
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

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Your Proposal</h3>
        <div className="flex space-x-2">
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

      <div className="text-xs text-gray-500 dark:text-gray-400 italic">
        Remember to review and personalize this proposal before sending it to potential clients.
      </div>
    </div>
  );
};

export default ProposalResult;
