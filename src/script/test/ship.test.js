import Ship from "../ship";

let myShip;

beforeEach(() => {
  myShip = new Ship(4);
});

test("ship has been hit", () => {
  myShip.hit();
  expect(myShip.hits).toBe(1);
});

test("ship has been sunk (not sunk yet)", () => {
  myShip.hit();
  myShip.hit();
  expect(myShip.hits).toBe(2);
  expect(myShip.isSunk).toBe(false);
});

test("ship has been sunk (sunk)", () => {
  myShip.hit();
  myShip.hit();
  myShip.hit();
  myShip.hit();
  expect(myShip.hits).toBe(4);
  expect(myShip.isSunk).toBeTruthy();
});