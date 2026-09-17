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
