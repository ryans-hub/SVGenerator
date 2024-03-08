// user is prompted for text
// user is prompted for text color
// user is prompted for shape
// user is prompted for shape color

class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    setColor(newColor) {
        this.shapeColor = newColor;    
    };

    render() {
        
        
    };
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(text, shape, textColor, shapeColor);
        
    }

    render() {
        return '<polygon points="150, 18, 244, 182 56, 182" fill="blue"/>';
    }
}

module.exports = {Shape, Triangle};