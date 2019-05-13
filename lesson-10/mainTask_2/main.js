
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
    	div.innerHTML = '<p>Привет!</<p>';
    	document.body.insertBefore(div, document.body.firstChild);
    	// return div;
    }
}

let box = new Options;
box.newDiv() 

