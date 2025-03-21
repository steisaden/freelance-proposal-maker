
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';

interface PaymentCheckoutProps {
  planName: string;
  price: string;
  period: string;
  isOpen: boolean;
  onClose: () => void;
}

const PaymentCheckout = ({ planName, price, period, isOpen, onClose }: PaymentCheckoutProps) => {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePayment = async () => {
    setPaymentStatus('processing');
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate successful payment
    setPaymentStatus('success');
    
    // Reset after showing success
    setTimeout(() => {
      onClose();
      setPaymentStatus('idle');
      
      // Update localStorage to simulate user authentication state
      localStorage.setItem('isPremiumUser', 'true');
      localStorage.setItem('userPlan', planName);
      
      toast({
        title: "Payment Successful",
        description: `Your ${planName} plan is now active.`,
      });
      
      navigate('/generator');
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {paymentStatus === 'success' ? 'Payment Successful' : `Subscribe to ${planName} Plan`}
          </DialogTitle>
          {paymentStatus !== 'success' && (
            <DialogDescription>
              Complete your subscription to access premium features.
            </DialogDescription>
          )}
        </DialogHeader>
        
        {paymentStatus === 'success' ? (
          <div className="py-6 flex flex-col items-center text-center space-y-4">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-medium">Payment Successful!</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Thank you for subscribing. Your {planName} plan is now active.
            </p>
            <Button 
              onClick={() => navigate('/generator')}
              className="mt-4"
            >
              Start Using Premium Features
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Plan</span>
                  <span className="text-sm">{planName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Price</span>
                  <span className="text-sm">{price}/{period}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Billing</span>
                  <span className="text-sm capitalize">{period}ly</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>{price}</span>
                  </div>
                </div>
              </div>
              
              {/* Simulated payment form - in a real app, this would integrate with Stripe, PayPal, etc. */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md" 
                      disabled={paymentStatus === 'processing'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md" 
                      disabled={paymentStatus === 'processing'}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Card Number</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md" 
                    placeholder="4242 4242 4242 4242"
                    disabled={paymentStatus === 'processing'}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Expiry Date</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md" 
                      placeholder="MM/YY"
                      disabled={paymentStatus === 'processing'}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">CVC</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md" 
                      placeholder="123"
                      disabled={paymentStatus === 'processing'}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <DialogFooter className="flex-col sm:flex-row sm:justify-end gap-2">
              <Button
                variant="outline"
                onClick={onClose}
                disabled={paymentStatus === 'processing'}
              >
                Cancel
              </Button>
              <Button
                onClick={handlePayment}
                disabled={paymentStatus === 'processing'}
              >
                {paymentStatus === 'processing' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay ${price}`
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentCheckout;
