
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
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-2">Quote HTML Generator</h1>
        <p className="text-gray-400 text-sm">Fast, simple, unstyled quote generator for React</p>
      </div>
      
      <div className="space-y-8">
        {/* Input form */}
        <Card className="p-6 bg-black/40 backdrop-blur-md border border-white/10">
          <h2 className="text-lg font-medium mb-4 text-gray-200">Create Your Quote</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="quote-text" className="block text-sm font-medium mb-1 text-gray-300">
                Quote Text
              </label>
              <Textarea
                id="quote-text"
                placeholder="Enter your quote here..."
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
                className="min-h-[120px] bg-black/20 border-white/10 text-gray-200 placeholder:text-gray-500"
              />
            </div>
            
            <div>
              <label htmlFor="citation" className="block text-sm font-medium mb-1 text-gray-300">
                Citation
              </label>
              <Input
                id="citation"
                placeholder="Author or source"
                value={citation}
                onChange={(e) => setCitation(e.target.value)}
                className="bg-black/20 border-white/10 text-gray-200 placeholder:text-gray-500"
              />
            </div>
          </div>
        </Card>

        {/* Preview section */}
        <Card className="p-6 bg-black/40 backdrop-blur-md border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-200">Preview</h2>
          </div>
          <QuotePreview quoteText={quoteText} citation={citation} />
        </Card>

        {/* Code output section */}
        <Card className="p-6 bg-black/40 backdrop-blur-md border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-200">HTML Code</h2>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCopyCode}
              className="flex items-center gap-1 bg-black/30 border-white/10 text-gray-300 hover:bg-black/50"
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

      <footer className="mt-16 text-center text-gray-500 text-xs">
        <p>Crafted with ❤️ using React and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default Index;
