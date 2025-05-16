
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
  const generatedHtml = `<figure class="random-quote">
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
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-8">Quote HTML Generator</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column: Input form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Create Your Quote</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="quote-text" className="block text-sm font-medium mb-1">
                Quote Text
              </label>
              <Textarea
                id="quote-text"
                placeholder="Enter your quote here..."
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
                className="min-h-[120px]"
              />
            </div>
            
            <div>
              <label htmlFor="citation" className="block text-sm font-medium mb-1">
                Citation
              </label>
              <Input
                id="citation"
                placeholder="Author or source"
                value={citation}
                onChange={(e) => setCitation(e.target.value)}
              />
            </div>
          </div>
        </Card>

        {/* Right column: Output preview and code */}
        <div className="space-y-6">
          {/* Preview section */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Preview</h2>
            </div>
            <QuotePreview quoteText={quoteText} citation={citation} />
          </Card>

          {/* Code output section */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">HTML Code</h2>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCopyCode}
                className="flex items-center gap-1"
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
    </div>
  );
};

export default Index;
