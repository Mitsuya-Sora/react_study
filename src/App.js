import "./styles.css";
import ColorfulMessage from "./components/ColorfulMessage";
import { useState } from "react";

export default function App() {
  const [num, countUp] = useState(0);
  const [isShow, switchIsShow] = useState(false);

  const onClickButton = () => countUp(num + 1);

  if (num > 0 && num % 3 === 0) {
    isShow || switchIsShow(true);
  } else {
    isShow && switchIsShow(false);
  }

  return (
    <div className="App">
      <ColorfulMessage color="red" message="Hello CodeSandbox" />
      <ColorfulMessage
        color="black"
        message="Start editing to see some magic happen!"
      />
      <button onClick={onClickButton}>カウントアップボタン</button>
      <p>{num}</p>
      {isShow && <p>(**)</p>}
    </div>
  );
}
