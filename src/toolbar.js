// toolbar.js

import { DraggableNode } from "./draggableNode";

const Nodes = [
  {
    type: "customInput",
    label: "Input",
  },
  {
    type: "llm",
    label: "LLM",
  },
  {
    type: "customOutput",
    label: "Output",
  },
  {
    type : "text" ,
    label : "Text"
  },
  {
    type:"Read" , 
    label : "Read"
  }
];

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {Nodes.map((i) => {
          return <DraggableNode type={i.type} label={i.label} />;
        })}
      </div>
    </div>
  );
};
