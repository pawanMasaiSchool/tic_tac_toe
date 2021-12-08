import styling from "./Square.module.css";

export default function Square({
  title,
  onClickFn,
  id,
  row,
  col,
  handleDisable
}) {
  // console.log(row, col);

  const handleBtnClick = (e) => {
    handleDisable(e);
    onClickFn(row, col);
  };

  return (
    <button
      title={title}
      id={id}
      className={styling.Square}
      onClick={handleBtnClick}
      rownum={row}
      colnum={col}
    >
      {title}
    </button>
  );
}
