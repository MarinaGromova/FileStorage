import "./App.module.scss";
import { useBackGroundResize } from "./components/Project/hooks/useBackGroundResize";
import { Layout } from "./components/Project/layout/Layout";

function App() {
  const colorObject = useBackGroundResize();

  return (
    <>
      <div style={colorObject}>
        <Layout />
      </div>
    </>
  );

  // <>
  {
    /* //TODO */
  }
  {
    /* <h4>
        Меняем иконку при ховере кнопки на OutLinedButton, без ховера Button
      </h4> */
  }

  // </>
}

export default App;
