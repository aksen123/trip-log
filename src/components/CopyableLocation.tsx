import { useState } from "react";

export function CopyableLocation({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copyLocation = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <>
      <button className="location-copy" type="button" onClick={copyLocation}>
        <span aria-hidden="true">⌖</span>
        <span>{label}</span>
        <span className="copy-icon" aria-hidden="true">⧉</span>
      </button>
      {copied && <div className="copy-toast" role="status">주소가 복사되었습니다</div>}
    </>
  );
}
