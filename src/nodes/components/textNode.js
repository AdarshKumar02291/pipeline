// textNode.js

import { useState } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <>
      <div>
        <span>Text</span>
      </div>
      <div className="w-fit">
        <label>
          Text:
          <input type="text" value={currText} onChange={handleTextChange}  className="w-fit"/>
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-output`} />
    </>
  );
};
