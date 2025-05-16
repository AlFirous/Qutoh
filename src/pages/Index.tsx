
import { useState, useEffect } from "react";
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
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-2xl font-medium text-center mb-10">
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Quote HTML Generator
        </span>
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column: Input form */}
        <Card className="p-6 border shadow-linear">
          <h2 className="text-base font-medium mb-4 text-foreground/90">Create Your Quote</h2>
          
          <div className="space-y-5">
            <div>
              <label htmlFor="quote-text" className="block text-xs font-medium mb-1.5 text-foreground/80">
                Quote Text
              </label>
              <Textarea
                id="quote-text"
                placeholder="Enter your quote here..."
                value={quoteText}
                onChange={(e) => setQuoteText(e.target.value)}
                className="min-h-[120px] resize-none transition-all duration-200 focus:ring-primary/40"
              />
            </div>
            
            <div>
              <label htmlFor="citation" className="block text-xs font-medium mb-1.5 text-foreground/80">
                Citation
              </label>
              <Input
                id="citation"
                placeholder="Author or source"
                value={citation}
                onChange={(e) => setCitation(e.target.value)}
                className="transition-all duration-200 focus:ring-primary/40"
              />
            </div>
          </div>
        </Card>

        {/* Right column: Output preview and code */}
        <div className="space-y-6">
          {/* Preview section */}
          <Card className="p-6 border shadow-linear">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium text-foreground/90">Preview</h2>
            </div>
            <QuotePreview quoteText={quoteText} citation={citation} />
          </Card>

          {/* Code output section */}
          <Card className="p-6 border shadow-linear">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium text-foreground/90">HTML Code</h2>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCopyCode}
                className="flex items-center gap-1 h-7 text-xs transition-all duration-200 hover:bg-primary/10 hover:text-foreground"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
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
