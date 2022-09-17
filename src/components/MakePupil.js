import React from "react";

function MakePupil(props) {
  const x = props.mx - props.px;
  const y = props.my - props.py;

  const angle = Math.atan2(y, x);
  const diff = Math.sqrt(x * x + y * y);
  const radius = Math.min(props.eyesize / 5, diff);

  const cappedX = props.eyesize / 2 + radius * Math.cos(angle) * props.focus;
  const cappedY = props.eyesize / 2 + radius * Math.sin(angle) * props.focus;
  return (
    <div
      className="pupil"
      style={{
        transition: "top 0.1s, left 0.1s",
        position: "absolute",
        left: cappedX,
        top: cappedY,
        height: props.size,
        width: props.size,
      }}
    ></div>
  );
}

export default MakePupil;
