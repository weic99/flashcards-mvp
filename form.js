var Form = function() {

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

  this.el.appendChild(this.frontInput);
  this.el.appendChild(this.backInput);
  this.el.appendChild(this.submitButton);

  return this.el;
};
