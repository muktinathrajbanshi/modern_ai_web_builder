import { useState } from "react";
import { CloudUploadIcon } from "lucide-react";

const PromptInput = ({
  onSubmit,
  loading = false,
  placeholder = "Describe the website you want to build...",
  large = false,
  autoFocus = false,
  variant = "default",
}) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const trimmed = value.trim();

    if (!trimmed || loading) return;
    onsubmit(trimmed);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  if (variant === "glass") {
    return (
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-xl ring-1
        ring-white/25 focus-within:ring-2 focus-within:ring-white/30 overflow-hidden mt-6
        transition"
      >
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={loading}
          rows={3}
          className="w-full p-4 pb-2 resize-none placeholder:text-white/60 outline-none bg-transparent text-white text-base"
        />

        <div className="flex items-center justify-between pb-3 px-3 gap-2">
          <label
            htmlFor="file"
            className="border border-white/20 text-white/80 hover:text-white
          hover:border-white/30 p-1.5 rounded-md cursor-pointer flex items-center justify-center"
          >
            <input type="file" id="file" hidden />
            <CloudUploadIcon size={18} />
          </label>
        </div>
      </form>
    );
  }

  return <div></div>;
};

export default PromptInput;
