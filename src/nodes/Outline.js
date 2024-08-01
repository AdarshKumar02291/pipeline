// textNode.js
import { InputNode } from "./components/inputNode";
import { TextNode } from "./components/textNode";
import { OutputNode } from "./components/outputNode";
import { LLMNode } from "./components/llmNode";
import { NewNode } from "./components/newNode";

export const Outline = ({ id, data }) => {

  return (
    <div style={{ width: 200, height: 80, border: "1px solid black" }}>
      {data.nodeType === "llm" && <LLMNode id={id} data={data} />}
      {data.nodeType === "customInput" && <InputNode id={id} data={data} />}
      {data.nodeType === "text" && <TextNode id={id} data={data} />}
      {data.nodeType === "customOutput" && <OutputNode id={id} data={data} />}
      {data.nodeType === "Read" && <NewNode id={id} data={data} />}
      
    </div>
  );
};
