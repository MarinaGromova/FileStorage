import "./App.css";
import { useResizeDetector } from "./components/ResizeDetector/useResizeDetector";

function App() {
  const width = useResizeDetector();
  return (
    <>
      {/* <h4>Меняем цвет иконки при ховере кнопки</h4>
      <Button
        renderIcon={(props, state) => (
          <HomeIcon {...props} color={state.isHovered ? "red" : "green"} />
        )}
      /> */}

      {/* //TODO */}
      {/* <h4>
        Меняем иконку при ховере кнопки на OutLinedButton, без ховера Button
      </h4> */}

      {/* <Children /> */}

      {/* <ResizeDetector>
        {(windowWidth) => {
          return windowWidth > 600 ? (
            <div>nnoksndkjdsnk</div>
          ) : (
            <div>!!!!!!!!!!!!!!!!</div>
          );
        }}
      </ResizeDetector> */}

      {width > 600 ? <div>nnoksndkjdsnk</div> : <div>!!!!!!!!!!!!!!!!</div>}
    </>
  );
}

export default App;
