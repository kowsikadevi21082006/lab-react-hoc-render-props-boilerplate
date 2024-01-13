import React from "react";
import HOC from "./HOC";
import "../component.css"

function LikeImage(props) {
  const { count, handleCount } = props;

  return (
    <div>
      <button id="image" onClick={handleCount}>Like Image {count}</button>
    </div>
  );
}

export default HOC(LikeImage);