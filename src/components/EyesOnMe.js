import React, { useState, useMemo } from "react";
import "./EyesOnMe.css";
import MakePupil from "./MakePupil";

function EyesOnMe(props) {
  const [MousePosition, setMousePosition] = useState({ left: props.width / 2, top: props.height / 2 });
  const [Focus, setFocus] = useState(1);

  const close = (x1, y1, x2, y2) => {
    if (Math.abs(x1 - x2) < 140 && Math.abs(y1 - y2) < 80) return true;
    return false;
  };

  const makeEyeArray = () => {
    let arr = [];
    let error = 0;
    for (let i = 0; i < 8; i++) {
      let x = Math.floor(Math.random() * (props.width - 200) + 100);
      let y = Math.floor(Math.random() * (props.height - 150) + 75);
      let check = true;
      arr.forEach((xydata) => {
        if (close(x, y, xydata.x, xydata.y)) check = false;
      });
      if (check) {
        arr.push({ x: x, y: y });
        error = 0;
      } else {
        i--;
        error++;
        if (error > 100) break;
      }
    }
    return arr;
  };
  const EyesArray = useMemo(makeEyeArray, [props.width, props.height]);

  const onMouseMove = (event) => {
    setMousePosition({ left: event.pageX, top: event.pageY });
  };

  const onClick = () => {
    setFocus(Focus * -1);
  };

  const eyeSize = props.width < 500 ? 14 : 26;
  const pupilSize = props.width < 500 ? 4 : 8;

  return (
    <div style={{ position: "relative", width: props.width, height: props.height }} onMouseMove={onMouseMove} onClick={onClick}>
      {EyesArray.map((position, index) => (
        <div key={index}>
          <div className="eye" style={{ left: position.x - (eyeSize / 3) * 2, top: position.y, height: eyeSize, width: eyeSize }}>
            <MakePupil mx={MousePosition.left} my={MousePosition.top} px={position.x - 30} py={position.y} focus={Focus} size={pupilSize} eyesize={eyeSize} />
          </div>
          <div className="eye" style={{ left: position.x + (eyeSize / 3) * 2, top: position.y, height: eyeSize, width: eyeSize }}>
            <MakePupil mx={MousePosition.left} my={MousePosition.top} px={position.x + 30} py={position.y} focus={Focus} size={pupilSize} eyesize={eyeSize} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default EyesOnMe;
