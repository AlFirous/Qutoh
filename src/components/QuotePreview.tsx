
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface QuotePreviewProps {
  quoteText: string;
  citation: string;
}

const QuotePreview = ({ quoteText, citation }: QuotePreviewProps) => {
  const [hasContent, setHasContent] = useState(false);
  
  useEffect(() => {
    setHasContent(false);
    
    const timer = setTimeout(() => {
      if (quoteText || citation) {
        setHasContent(true);
      }
    }, 10);
    
    return () => clearTimeout(timer);
  }, [quoteText, citation]);

  return (
    <div className="border rounded-lg p-6 bg-card shadow-linear transition-all duration-150">
      <figure className={cn(
        "random-quote transition-opacity duration-200",
        hasContent ? "animate-fade-in" : ""
      )}>
        <blockquote className={cn(
          "relative text-lg font-normal pl-4 py-1.5 linear-gradient-border",
          !quoteText && "text-muted-foreground italic"
        )}>
          {quoteText || "Your quote will appear here..."}
        </blockquote>
        <figcaption className={cn(
          "mt-3 text-right text-sm font-medium",
          !citation && "text-muted-foreground"
        )}>
          {citation ? `— ${citation}` : "Citation will appear here..."}
        </figcaption>
      </figure>
    </div>
  );
};

export default QuotePreview;
