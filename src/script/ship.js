class Ship {
    // Create new ship with default settings
    constructor(size, type, hits = 0, isSunk = false) {
        this.size = size;
        this.hits = hits;
        this.isSunk = isSunk;
        this.type = this.getType(type);
    }

    // Increase the count of hits by 1
    hit() {
        this.hits += 1;
        this.sunk();
    }

    // Check if ship is Sunk in case of num hits >= size of ship
    sunk() {
        if (this.hits >= this.size) {
            this.isSunk = true;
        }
        return this.isSunk;
    }

    getType(type) {
        let boat = null;
        switch(type) {
            case "carrier":
                boat = ['C', 5];
                break;
            case "battleship":
                boat = ['B', 4];
                break;
            case "destroyer":
                boat = ['D', 3];
                break;    
            case "submarine":
                boat = ['S', 3];
                break;
            case "patrol":
                boat = ['P', 2];
                break;
            default:
                break;
        }

        return boat;
    }
}

export default Ship;
