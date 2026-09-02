import { useState } from "react";

const PromptInput = ({
  onSubmit,
  loading = false,
  placeholder = "Describe the website you want to build...",
  large = false,
  autoFocus = false,
  variant = "default",
}) => {
  const [value, setValue] = useState("");

  const textareaRef = useRef(null)

  if(variant === "glass") {
    return (
        <form className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-xl ring-1
        ring-white/25 focus-within:ring-2 focus-within:ring-white/30 overflow-hidden mt-6
        transition">

        <textarea ref={textareaRef} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={} />

        </form>
    )
  }

  return <div></div>;
};

export default PromptInput;
