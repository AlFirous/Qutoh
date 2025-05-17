
interface CodeDisplayProps {
  code: string;
}

const CodeDisplay = ({ code }: CodeDisplayProps) => {
  return (
    <div className="relative">
      <pre className="p-4 rounded-md bg-black/5 dark:bg-white/5 backdrop-blur-sm overflow-x-auto font-mono text-sm whitespace-pre-wrap">
        {code}
      </pre>
    </div>
  );
};

export default CodeDisplay;
