import Gameboard from "../gameboard";

let myGameBoard;

beforeEach(() => {
  myGameBoard = Gameboard();
});

test("places a ship on y", () => {
    expect(myGameBoard.place(0, 2, "y")).toBe("placed");
});