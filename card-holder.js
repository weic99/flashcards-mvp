var CardHolder = function() {
  this.storage = [];
};

CardHolder.prototype.add = function(card) {
  this.storage.push(card);
};

CardHolder.prototype.seedExampleData = function() {
  this.add({front: "Bruce Wayne", back: "Batman"});
  this.add({front: "Clark Kent",  back: "Superman"});
  this.add({front: "Diana Prince",  back: "Wonder Woman"});
};

CardHolder.prototype.getRandom = function() {
  var i = Math.floor(Math.random() * this.storage.length)
  return this.storage[i];
};
