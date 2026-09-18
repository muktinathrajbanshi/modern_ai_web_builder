import { useMemo, useState } from "react";
import { SandpackProvider } from "@codesandbox/sandpack-react"

const PreviewPanel = ({ project, activeFile, showCode }) => {
  const [showErrorOverlay, setShowErrorOverlay] = useState(true);
  // Keep local state of files that updates as user types
  const [liveFiles, setLiveFiles] = useState(project.files);
  const [prevProjectKey, setPrevProjectKey] = useState(
    `${project._id}-${project.version}`,
  );

  const currentKey = `${project._id}-${project.version}`;
  if(prevProjectKey !== currentKey){
    setPrevProjectKey(currentKey);
    setLiveFiles(project.files)
  }

  // Convert liveFiles to Sandpack format
  const sandpackFiles = useMemo(() => {
    const spFiles = {};
    for (const [path, content] of Object.entries(liveFiles)) {
        const fileCode = typeof content === "string" ? content : content?.content || "";
        spFiles[path] = {
            code: fileCode,
            active: path === activeFile,
        }
    }
    return spFiles;
  }, [liveFiles, activeFile])

// Detect dependencies from import statements using liveFiles
const dependencies = useMemo(() => {

}, [liveFiles])

  return (
    <div className="h-full w-full">
        <SandpackProvider key={project._id} template="react" 
        files={spFiles} customSetup={} options={} theme={}>

        </SandpackProvider>
    </div>
  )
};

export default PreviewPanel;
