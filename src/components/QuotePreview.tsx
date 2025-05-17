
import { cn } from "@/lib/utils";

interface QuotePreviewProps {
  quoteText: string;
  citation: string;
}

const QuotePreview = ({ quoteText, citation }: QuotePreviewProps) => {
  return (
    <div className="border rounded-md p-6 bg-black/5 dark:bg-white/5 backdrop-blur-sm">
      <figure className="quote">
        <blockquote className={cn(
          "text-lg font-medium italic border-l-4 border-gray-300 pl-4 py-1",
          !quoteText && "text-gray-400"
        )}>
          {quoteText || "Your quote will appear here..."}
        </blockquote>
        <figcaption className={cn(
          "mt-2 text-right text-sm",
          !citation && "text-gray-400"
        )}>
          {citation || "Citation will appear here..."}
        </figcaption>
      </figure>
    </div>
  );
};

export default QuotePreview;
