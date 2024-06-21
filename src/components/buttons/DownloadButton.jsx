import { useState } from "react";
import "./button.css";
import { IoMdDownload } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export default function DownloadButton( {srcFile} ) {

    const [download, setDownload] = useState(false)

    const handleClickDownload = () => {
        setDownload(true)

        setTimeout(() => {
            setDownload(false);
          }, 2000);
    }


  return (
    <div className="col-5">
      <a href={srcFile} download>
        <button className="p-card btn btn-basic gap-10" onClick={handleClickDownload}>
          Descarga mi CV 
          <IoMdDownload/>
        </button>
      </a>
    </div>
  );
}
