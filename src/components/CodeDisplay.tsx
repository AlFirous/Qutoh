
import { useState, useEffect } from "react";

interface CodeDisplayProps {
  code: string;
}

const CodeDisplay = ({ code }: CodeDisplayProps) => {
  const [hasContent, setHasContent] = useState(false);
  
  useEffect(() => {
    setHasContent(false);
    
    const timer = setTimeout(() => {
      if (code.trim() !== "") {
        setHasContent(true);
      }
    }, 10);
    
    return () => clearTimeout(timer);
  }, [code]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 bg-muted/50 text-xs font-medium text-muted-foreground px-4 py-1.5 rounded-t-md border-b">
        HTML
      </div>
      <pre className={`mt-7 p-4 pt-2 rounded-md bg-muted/30 overflow-x-auto font-mono text-sm leading-relaxed border transition-all duration-200 ${hasContent ? "animate-fade-in" : ""}`}>
        <code className="text-foreground/90 whitespace-pre-wrap">{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
