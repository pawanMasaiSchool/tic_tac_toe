import Square from "../Square/Square";
import styling from "./Grid.module.css";

export default function Grid({ onClickFn, gridArr, handleDisable }) {
  return (
    <div className={styling.Grid}>
      {gridArr[0].map((item, ind) => (
        <Square
          row={0}
          col={ind}
          id={ind}
          key={ind + 1}
          title={item}
          onClickFn={onClickFn}
          handleDisable={handleDisable}
        />
      ))}
      {gridArr[1].map((item, ind) => (
        <Square
          row={1}
          col={ind}
          id={ind + 3}
          key={ind + 3}
          title={item}
          onClickFn={onClickFn}
          handleDisable={handleDisable}
        />
      ))}
      {gridArr[2].map((item, ind) => (
        <Square
          row={2}
          col={ind}
          id={ind + 6}
          key={ind + 6}
          title={item}
          onClickFn={onClickFn}
          handleDisable={handleDisable}
        />
      ))}
    </div>
  );
}
