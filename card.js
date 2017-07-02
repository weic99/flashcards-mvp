var Card = function(card) {
  this.front = card.front;
  this.back = card.back;
};

Card.prototype.render = function() {
  this.el = document.createElement('div');
  this.el.classList.add('flip-container');
  this.el.insertAdjacentHTML('beforeend', '<div class="flipper">' +
                                            '<div class="front">'+
                                               this.front +
                                            '</div>'+
                                            '<div class="back">'+
                                               this.back +
                                            '</div>' +
                                          '</div>'
                            );
  return this.el;
};