
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";
import QuotePreview from "@/components/QuotePreview";
import CodeDisplay from "@/components/CodeDisplay";

const Index = () => {
  const [quoteText, setQuoteText] = useState("");
  const [citation, setCitation] = useState("");
  const [copied, setCopied] = useState(false);

  // Generate the HTML code for the quote
  const generatedHtml = `<figure class="quote">
  <blockquote>${quoteText}</blockquote>
  <figcaption>${citation}</figcaption>
</figure>`;

  // Handle copying the code to clipboard
  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedHtml);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-8">Quote HTML Generator</h1>
      
      <div className="space-y-6">
        {/* Input form */}
        <Card className="p-6 bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-medium mb-4">Create Your Quote</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="quote-text" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Quote Text
              </label>
              <Textarea
                id="quote-text"
                placeholder="Enter your quote here..."
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
                className="min-h-[120px] bg-white/50 dark:bg-black/20 backdrop-blur-sm"
              />
            </div>
            
            <div>
              <label htmlFor="citation" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Citation
              </label>
              <Input
                id="citation"
                placeholder="Author or source"
                value={citation}
                onChange={(e) => setCitation(e.target.value)}
                className="bg-white/50 dark:bg-black/20 backdrop-blur-sm"
              />
            </div>
          </div>
        </Card>

        {/* Preview section */}
        <Card className="p-6 bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Preview</h2>
          </div>
          <QuotePreview quoteText={quoteText} citation={citation} />
        </Card>

        {/* Code output section */}
        <Card className="p-6 bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">HTML Code</h2>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCopyCode}
              className="flex items-center gap-1 bg-white/50 dark:bg-black/20 backdrop-blur-sm"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy</span>
                </>
              )}
            </Button>
          </div>
          <CodeDisplay code={generatedHtml} />
        </Card>
      </div>
    </div>
  );
};

export default Index;
