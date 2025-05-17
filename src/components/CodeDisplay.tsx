
interface CodeDisplayProps {
  code: string;
}

const CodeDisplay = ({ code }: CodeDisplayProps) => {
  return (
    <div className="relative">
      <pre className="p-4 rounded-md bg-black/80 text-gray-300 font-mono text-sm overflow-x-auto border border-white/10 backdrop-blur-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;
