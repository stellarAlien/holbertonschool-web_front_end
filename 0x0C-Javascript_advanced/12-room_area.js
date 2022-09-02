let roomDimensions = {
    width = 50,
    length = 100,
    getArea() {
        return this.length * this.width;
    }
} 
boundGetArea = roomDimensions.getArea.bind(roomDimensions);
console.log(boundGetArea());
