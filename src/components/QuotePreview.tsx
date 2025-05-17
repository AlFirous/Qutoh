
import { cn } from "@/lib/utils";

interface QuotePreviewProps {
  quoteText: string;
  citation: string;
}

const QuotePreview = ({ quoteText, citation }: QuotePreviewProps) => {
  return (
    <div className="border border-white/10 rounded-md p-6 bg-black/40 backdrop-blur-md">
      <figure className="quote">
        <blockquote className={cn(
          "text-lg font-medium italic border-l-4 border-gray-600 pl-4 py-1",
          !quoteText && "text-gray-500"
        )}>
          {quoteText || "Your quote will appear here..."}
        </blockquote>
        <figcaption className={cn(
          "mt-2 text-right text-sm",
          !citation && "text-gray-500"
        )}>
          {citation || "Citation will appear here..."}
        </figcaption>
      </figure>
    </div>
  );
};

export default QuotePreview;
