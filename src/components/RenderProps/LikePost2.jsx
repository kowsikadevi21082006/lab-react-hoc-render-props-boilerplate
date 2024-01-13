import React from "react";
import "../component.css"

function LikePost2(props) {
  const { count, handleCount } = props;

  return (
    <div>
      <button id="post" onClick={handleCount}>Like Post {count}</button>
    </div>
  );
}

export default LikePost2;