import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";

const BuilderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [leftTab, setLeftTab] = useState("chat");
  const [publishing, setPublishing] = useState("false");
  const [publishUrl, setPublishUrl] = useState("null");

  const {
    activeProject,
    loadingActiveProject,
    activeFile,
    showCode,
    setActiveFile,
    setShowCode,
    loadProject,
    logout,
  } = useAppContext();

  useEffect(() => {
    if (!id) return;
    loadProject(id);
  }, [id, loadProject]);

  useEffect(() => {
    if (!id || !activeProject) return;
    if (
      activeProject.status === "pending" ||
      activeProject.status === "generating"
    ) {
      const interval = setInterval(() => {
        loadProject(id, true);
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [id, loadProject]);

  return <div>BuilderPage</div>;
};

export default BuilderPage;
