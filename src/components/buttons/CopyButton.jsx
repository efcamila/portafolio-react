import { LuCopy } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import "./button.css";
import "./input.css";

export default function CopyButton() {
  const [text, setText] = useState("efcamilaweb@gmail.com");
  const [copied, setCopied] = useState(false);

  const handleClickCopied = () => {
    setCopied(true);

    navigator.clipboard.writeText(text);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const onChangeText = (e) => setText(e.target.value);

  return (
    <>
      <div className="col-8 md-col">
        <input
          className="p-card input input-copy card-dark"
          type="text"
          value={text}
          onChange={onChangeText}
          disabled
        />
      </div>
      <div className="col">
        <button className="p-card btn btn-basic space-evenly" onClick={handleClickCopied}>
          {copied ? <><FaCheck /><p className="md-hidden">Copiado</p></> : <><LuCopy /><p className="md-hidden">Copiar</p></>}
        </button>
      </div>
    </>
  );
}
