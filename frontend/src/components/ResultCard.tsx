import { motion } from "framer-motion";
import { Copy, Check, ExternalLink } from "lucide-react";

interface ResultCardProps {
  shortCode: string | null;
  origin: string;
  isCopied: boolean;
  onCopy: () => void;
}

export function ResultCard({ shortCode, origin, isCopied, onCopy }: ResultCardProps) {
  if (!shortCode || !origin) return null;

  const fullUrl = `${origin}/${shortCode}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-8 w-full max-w-2xl bg-surface p-6 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
    >
      <div className="overflow-hidden w-full">
        <p className="text-sm text-gray-500 mb-1 font-sans">Your short link is ready:</p>
        <div className="flex items-center gap-2">
          <a
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-primary hover:underline font-sans truncate"
          >
            {fullUrl}
          </a>
          <ExternalLink size={16} className="text-gray-400" />
        </div>
      </div>

      <button
        onClick={onCopy}
        className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg border border-gray-200 transition-colors shrink-0 font-sans cursor-pointer"
      >
        {isCopied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
        <span>{isCopied ? "Copied" : "Copy"}</span>
      </button>
    </motion.div>
  );
}
