export const saveGametoStorage = ({ board, turn }) => {
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};
export const deleteGameToStorage = () => {
  localStorage.removeItem("board");
  localStorage.removeItem("turn");
};
