class Ship {
    // Create new ship with default settings
    constructor(size, hits = 0, isSunk = false) {
        this.size = size;
        this.hits = hits;
        this.isSunk = isSunk;
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
}

export default Ship;