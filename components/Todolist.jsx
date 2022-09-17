import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const handleMouseover = () => {
    setIsMouseOver(true);
  };
  const handleMouseout = () => {
    setIsMouseOver(false);
  };
  return (
    <div
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={handleMouseover}
      onMouseOut={handleMouseout}>
      <span
        style={
          props.Completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "" }
        }
        className="me-auto">
        {props.title}
      </span>

      {isMouseOver && (
        <>
          <button className="btn btn-success" onClick={() => props.onMark()}>
            <IconCheck />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onMoveUp()}>
            <IconArrowUp />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.onMoveDown()}>
            <IconArrowDown />
          </button>
          <button className="btn btn-danger" onClick={() => props.onDelete()}>
            <IconTrash />
          </button>
        </>
      )}
    </div>
  );
}
