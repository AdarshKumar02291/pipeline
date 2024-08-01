// llmNode.js

import { Handle, Position } from "reactflow";

export const NewNode = ({ id, data }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: `${100 / 3}%` }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: `${200 / 3}%` }}
      />
      <div>
        <span>New Node</span>
      </div>
      <div>
        <span>This is New Node.</span>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-response`} />
    </>
  );
};
