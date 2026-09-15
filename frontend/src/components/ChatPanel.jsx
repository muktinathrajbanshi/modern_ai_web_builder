import { useEffect, useRef } from "react";

const ChatPanel = ({ messages, onSend, loading }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, [messages, loading]);

  return <div></div>;
};

export default ChatPanel;
