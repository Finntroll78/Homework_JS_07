
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    
    newDiv() {
    	let div = document.createElement('div');
    	div.style.cssText = `height: ${this.height}px;
    	width: ${this.width}px; 
    	background-color: ${this.bg};
    	font-size: ${this.fontSize}px;
    	text-align: ${this.textAlign};
    	`;
    	div.innerHTML = '<p>Привет!</<p>';
    	document.body.insertBefore(div, document.body.firstChild);
    }
}

let box = new Options(100,100,'red',20,'center');
box.newDiv();

let box2 = new Options(200,200,'red',20,'center');
box2.newDiv();

