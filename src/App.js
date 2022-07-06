import "./styles.css";
import ColorfulMessage from "./components/ColorfulMessage";

export default function App() {
  const onClickButton = () => alert();

  return (
    <div className="App">
      <ColorfulMessage color="red" message="Hello CodeSandbox" />
      <ColorfulMessage
        color="black"
        message="Start editing to see some magic happen!"
      />
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
}
