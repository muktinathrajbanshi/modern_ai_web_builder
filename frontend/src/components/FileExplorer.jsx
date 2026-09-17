import { Children, useMemo } from "react";

function buildTree(paths) {
  const root = [];
  for (const filepath of paths.sort()) {
    const parts = filepath.split("/").filter(Boolean);
    let current = root;

    for (let i = 0; i < parts.length; i++) {
      const name = parts[i];
      const isLast = i === parts.length - 1;
      const fullPath = "/" + parts.slice(0, i + 1).join("/");
      let existing = current.find((n) => n.name === name);
      if (!existing) {
        existing = {
          name,
          path: fullPath,
          isDir: !isLast,
          children: [],
        };
        current.push(existing);
      }
      current = existing.children;
    }
  }
  return root;
}

function TreeItem({ node, activeFile, onFileSelect, depth = 0 }) {
  const isActive = node.path === activeFile;

  if (node.isDir) {
    return (
      <div>
        <div
          className="flex items-center gap-2 py-1 px-2 text-xs text-zinc-400 select-none"
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
        >
          <FolderOpenIcon size={34} className="text-zinc-800 opacity-60" />
          <span>{node.name}</span>
        </div>
        {node.children.map((child) => (
          <TreeItem
            key={child.path}
            node={child}
            activeFile={activeFile}
            onFileSelect={onFileSelect}
            depth={depth + 1}
          />
        ))}
      </div>
    );
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
      {tree.map((node) => (
        <p>tree item</p>
      ))}
    </div>
  );
};

export default FileExplorer;
