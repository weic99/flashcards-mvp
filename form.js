var Form = function(submitCallback) {
  this.state = {};
  this.submitCallback = submitCallback
};

Form.prototype.handleClick = function(e) {
  e.preventDefault();
  e.stopPropagation();
  this.frontInput.value = '';
  this.backInput.value = '';
  this.submitCallback(this.state);
};

Form.prototype.readInputs = function(card, e) {
  this.state[card] = e.target.value;
};

Form.prototype.render = function() {
  this.el = document.createElement('form');
  this.el.classList.add('card-form');

  this.frontInput = document.createElement('input');
  this.frontInput.setAttribute('placeholder', 'Front');

  this.backInput = document.createElement('input');
  this.backInput.setAttribute('placeholder', 'Back');

  this.submitButton = document.createElement('button');
  this.submitButton.innerHTML = "Add Card";

  this.frontInput.addEventListener('keyup', this.readInputs.bind(this, 'front'));
  this.backInput.addEventListener('keyup', this.readInputs.bind(this, 'back'));
  this.submitButton.addEventListener('click', this.handleClick.bind(this));

  this.el.appendChild(this.frontInput);
  this.el.appendChild(this.backInput);
  this.el.appendChild(this.submitButton);

  return this.el;
};
