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
    };

    setColor(newColor) {
        this.shapeColor = newColor;    
    };

    setTextColor(newColor){
        this.textColor = newColor;

    }

    setText(newText) {
        this.text = newText;
    }

    render() {
        
        
    };
};

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'triangle', shapeColor);
    };

    render() {
        return `<polygon points="150, 18, 244, 182 56, 182" fill="${this.shapeColor}"/> <text x="150" y="125" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
    };
};

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'square', shapeColor);
    };

    render() {
        return `<polygon points="100, 100 200,100 200,200 100,200" fill="${this.shapeColor}"/> <text x="150" y="125" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
    };
};

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, 'circle', shapeColor);
    };

    render() {
        return `<circle cx="150" cy="150" r="50" fill="${this.shapeColor}"/> <text x="150" y="125" fill="${this.textColor}" text-anchor="middle">${this.text}</text>`;
    };
};

module.exports = {Shape, Triangle, Square, Circle};