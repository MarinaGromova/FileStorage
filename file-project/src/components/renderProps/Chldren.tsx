import { ReactElement } from "react";

interface ParentProps {
  children: () => ReactElement;
}

const Parent = ({ children }: ParentProps) => {
  return children();
};

export const Children = () => {
  return (
    <>
      <h4>Children как функция</h4>
      <Parent children={() => <div>какойто текст</div>} />

      <h4>Children как html подобная вложенность</h4>
      <Parent>{() => <div>какойто текст html подобная вложенност</div>}</Parent>
    </>
  );
};
