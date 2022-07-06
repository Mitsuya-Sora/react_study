import "./styles.css";
import ColorfulMessage from "./components/ColorfulMessage";
import { useEffect, useState } from "react";

export default function App() {
  const [num, countUp] = useState(0);
  const [isShow, switchIsShow] = useState(false);

  const countUpBtn = () => countUp(num + 1);
  const switchFace = () => switchIsShow(!isShow);

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      isShow || switchIsShow(true);
    } else {
      isShow && switchIsShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <div className="App">
      <ColorfulMessage color="red" message="Hello CodeSandbox" />
      <ColorfulMessage
        color="black"
        message="Start editing to see some magic happen!"
      />
      <button onClick={switchFace}>顔表示切り替え</button>
      <button onClick={countUpBtn}>カウントアップボタン</button>
      <p>{num}</p>
      {isShow && <p>(**)</p>}
    </div>
  );
}
