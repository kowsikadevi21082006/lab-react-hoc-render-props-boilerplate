import React from "react";
import "../component.css"

function LikeImage2(props) {
  const { count, handleCount } = props;

  return (
    <div>
      <button id="image" onClick={handleCount}>Like Image {count}</button>
    </div>
  );
}

export default LikeImage2;