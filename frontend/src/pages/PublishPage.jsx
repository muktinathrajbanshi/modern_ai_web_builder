import { useState } from "react";
import { useParams } from "react-router-dom";

const PublishPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  return <div>Publish Page</div>;
};

export default PublishPage;
