class Rectangle {
    constructor(width, height,color) {
        this.width = width;
        this.height = height;
        this.color = color; //[this.width, this.height, this.color] =
        //[width, height, color];
    }
    calcArea() {
        return this.width * this.height;
    }
}