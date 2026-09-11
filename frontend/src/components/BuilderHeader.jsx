import { ArrowLeftIcon } from "lucide-react";

const BuilderHeader = ({
  projectName,
  version,
  showCode,
  publishing,
  onToggleShowCode,
  onOpenPreview,
  onPublish,
  onDownload,
  onBack,
  onLogout,
}) => {
  return (
    <header className="h-12 shrink-0 flex items-center justify-between px-3 border-b border-zinc-200 bg-white">
      <div className="flex items-center gap-2">
        <button
          onClick={onBack}
          className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 cursor-pointer"
        >
          <ArrowLeftIcon size={16} />
        </button>
        <img src="/logo.svg" alt="img" className="invert size-5" />
        <span>{projectName}</span>
      </div>
    </header>
  );
};

export default BuilderHeader;
