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
    <header className="h-12 shrink-0 flex items-center justify-between px-3 border-b border-zinc-200 bg-white"></header>
  );
};

export default BuilderHeader;
