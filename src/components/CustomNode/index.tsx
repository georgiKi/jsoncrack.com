import React from "react";
import { Node, NodeProps } from "reaflow";
import { NodeData } from "src/types/models";
import { ObjectNode } from "./ObjectNode";
import { TextNode } from "./TextNode";

export interface CustomNodeProps {
  node: NodeData;
  x: number;
  y: number;
  hasCollapse?: boolean;
}

const rootProps = {
  rx: 50,
  ry: 50,
};

export const CustomNode = (nodeProps: NodeProps) => {
  const { text, data } = nodeProps.properties;

  return (
    <Node {...nodeProps} {...(data.isEmpty && rootProps)} label={<React.Fragment />}>
      {({ node, x, y }) => {
        if (Array.isArray(text)) {
          return <ObjectNode node={node as NodeData} x={x} y={y} />;
        }

        return <TextNode node={node as NodeData} hasCollapse={!!data.childrenCount} x={x} y={y} />;
      }}
    </Node>
  );
};
