var Form = function(handleSubmit) {
  this.state = {};
  this.handleSubmit = handleSubmit;
};

Form.prototype.handleClick = function(event) {
  event.preventDefault();
  event.stopPropagation();
  this.frontInput.value = '';
  this.backInput.value = '';
  this.handleSubmit(this.state);
};

Form.prototype.readInput = function(side, event) {
  this.state[side] = event.target.value;
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

  this.frontInput.addEventListener('keyup', this.readInput.bind(this, 'front'));
  this.backInput.addEventListener('keyup', this.readInput.bind(this, 'back'));
  this.submitButton.addEventListener('click', this.handleClick.bind(this));
  
  this.el.appendChild(this.frontInput);
  this.el.appendChild(this.backInput);
  this.el.appendChild(this.submitButton);

  return this.el;
};
