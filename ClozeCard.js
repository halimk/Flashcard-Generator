function ClozeCard(text, cloze) {
    this.text = text.split(cloze);
    this.cloze = cloze;

};


function ClozeCardPrototype() {

    this.clozeRemoved = function () {
        return `${this.text[0]} ... ${this.text[1]}`;  
    };											
};

ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard; 

