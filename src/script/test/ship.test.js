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

describe('get ship type', () => {
    test("get carrier boat", () => {
        const carrier = new Ship(5, "carrier");
        expect(carrier.type).toEqual(['C', 5]);
    });
    test("get battleship boat", () => {
        const battleship = new Ship(4, "battleship");
        expect(battleship.type).toEqual(['B', 4]);
    });
    test("get destroyer boat", () => {
        const destroyer = new Ship(3, "destroyer");
        expect(destroyer.type).toEqual(['D', 3]);
    });
    test("get submarine boat", () => {
        const submarine = new Ship(3, "submarine");
        expect(submarine.type).toEqual(['S', 3]);
    });
    test("get patrol boat", () => {
        const patrol = new Ship(2, "patrol");
        expect(patrol.type).toEqual(['P', 2]);
    });
    test("get null if boat type parameter is empty", () => {
        const patrol = new Ship(2, "");
        expect(patrol.type).toEqual(null);
    });
});
