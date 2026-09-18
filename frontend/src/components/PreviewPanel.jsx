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

  const sandpackFiles = useMemo(() => {
    const spFiles = {};
    for (const [path, content] of Object.entries(liveFiles)) {

    }
  }, [liveFiles, activeFile])

  return (
    <div className="h-full w-full">
        <SandpackProvider key={project._id} template="react" 
        files={} customSetup={} options={} theme={}>

        </SandpackProvider>
    </div>
  )
};

export default PreviewPanel;
