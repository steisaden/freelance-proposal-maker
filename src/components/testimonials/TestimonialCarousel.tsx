
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  avatarFallback: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Riley Olie',
    role: 'Freelance Stylist',
    company: 'Self-employed',
    avatarUrl: '/lovable-uploads/d61790ff-17a9-47ba-be33-f77e07d8e70b.png',
    avatarFallback: 'RO',
    content: 'ProposalCraft transformed my freelancing business. I used to spend hours writing proposals with a very low success rate. Now I create professional proposals in minutes and my client conversion has increased by 70%!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Web Developer',
    company: 'PixelPerfect',
    avatarUrl: '',
    avatarFallback: 'MC',
    content: 'As a non-native English speaker, writing compelling proposals was always a challenge. ProposalCraft helps me sound professional and confident. I've landed 5 new clients in my first month using it!'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Digital Marketer',
    company: 'ClickAdvantage',
    avatarUrl: '',
    avatarFallback: 'SJ',
    content: 'The time savings alone make ProposalCraft worth every penny. What used to take me 45 minutes now takes less than 5. The quality is consistently better than what I could write myself, even on my best days.'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'UX Designer',
    company: 'DesignHub',
    avatarUrl: '',
    avatarFallback: 'DP',
    content: 'I was skeptical about AI-generated content, but ProposalCraft changed my mind. The proposals are tailored to each job, highlighting my relevant skills perfectly. My client response rate has doubled!'
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto px-4 py-12">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-10">
        <Button 
          onClick={goToPrevious} 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 shadow-md"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="flex flex-col items-center">
              <div className="mb-6 relative">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Avatar className="w-20 h-20 border-4 border-gray-100 dark:border-gray-800 cursor-pointer">
                      {testimonials[currentIndex].avatarUrl ? (
                        <AvatarImage src={testimonials[currentIndex].avatarUrl} alt={testimonials[currentIndex].name} />
                      ) : null}
                      <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                        {testimonials[currentIndex].avatarFallback}
                      </AvatarFallback>
                    </Avatar>
                  </HoverCardTrigger>
                  <HoverCardContent align="center" className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        {testimonials[currentIndex].avatarUrl ? (
                          <AvatarImage src={testimonials[currentIndex].avatarUrl} />
                        ) : null}
                        <AvatarFallback>{testimonials[currentIndex].avatarFallback}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1 text-left">
                        <h4 className="text-sm font-semibold">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                        <div className="flex items-center pt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className="h-4 w-4 fill-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>

              <blockquote className="text-lg md:text-xl italic mb-6 max-w-2xl">
                "{testimonials[currentIndex].content}"
              </blockquote>

              <div className="mt-4">
                <h4 className="font-bold text-lg uppercase tracking-wider">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].role} | {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-10">
        <Button 
          onClick={goToNext} 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 shadow-md"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-primary w-4' : 'bg-gray-300 dark:bg-gray-700'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
