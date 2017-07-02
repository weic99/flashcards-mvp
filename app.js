var App = function() {
  this.cards = new CardHolder();
  this.cards.seedExampleData();
};

App.prototype.addToCards = function(card) {
  if(card.front) {
    this.cards.add(card);
  }
};

App.prototype.loadCard = function() {
  this.card = new Card(this.cards.getRandom());
  this.container.innerHTML = '';
  this.container.appendChild(this.card.render());
};

App.prototype.loadForm = function() {
  this.form = new Form(this.addToCards.bind(this));
  this.container.innerHTML = '';
  this.container.appendChild(this.form.render());
};

App.prototype.createButton = function(label, action) {
  var button = document.createElement('button');
  button.innerHTML = label;
  button.addEventListener('click', action);
  return button;
};

App.prototype.render = function() {
  this.el = document.createElement('div');

  var cardButton = this.createButton('Show Card', this.loadCard.bind(this));
  var formButton = this.createButton('Add Form', this.loadForm.bind(this));
  this.el.appendChild(cardButton);
  this.el.appendChild(formButton);

  this.container = document.createElement('div');
  this.el.appendChild(this.container);

  this.loadCard();
  return this.el;
};

var app = new App();
document.getElementById('app').appendChild(app.render());
