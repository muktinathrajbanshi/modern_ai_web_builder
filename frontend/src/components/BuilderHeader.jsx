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
        <span className="text-sm font-semibold truncate max-w-38 md:max-w-50">
          {projectName}
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-500 font-medium">
          v{version}
        </span>
      </div>
    </header>
  );
};

export default BuilderHeader;
