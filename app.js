var App = function() {
  this.cards = new CardHolder();
  this.cards.seedExampleData();
};

App.prototype.addToCards = function(card) {
  if(card.front) {
    this.cards.add(card)
  }
};

App.prototype.loadCard = function() {

};

App.prototype.loadForm = function() {

};


App.prototype.render = function() {
  this.el = document.createElement('div');

  this.container = document.createElement('div');
  this.el.appendChild(this.container)

  this.loadCard();
  return this.el;
};
