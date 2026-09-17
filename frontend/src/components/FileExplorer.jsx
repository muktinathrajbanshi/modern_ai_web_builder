import { useMemo } from "react";

function buildTree(paths) {
  const root = [];
  for (const filepath of paths.sort()) {
    const parts = filepath.split("/").filter(Boolean);
    let current = root;
  }
}

const FileExplorer = ({ files, activeFile, onFileSelect }) => {
  const tree = useMemo(() => buildTree(Object.keys(files)), [files]);

  return (
    <div className="py-2 overflow-y-auto hide-scrollbar">
      <p
        className="px-3 py-1.5 text-[10px] font-semibold uppercase
      tracking-widest text-zinc-400"
      >
        Files
      </p>
    </div>
  );
};

export default FileExplorer;
