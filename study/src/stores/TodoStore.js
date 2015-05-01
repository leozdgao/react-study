var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var _data = [
  { text: 'Learn js parttern', fulfilled: false },
  { text: 'Make Todo-App', fulfilled: true }
];

var TodoStore = objectAssign({}, EventEmitter.prototype, {
  getAllTask: function () {
    return _data;
  },
  addTask: function (text) {
    _data.push({ text: text, fulfilled: false });
    // trigger event
    TodoStore.emit('change');
    return _data.length - 1;
  },
  fulfillTask: function (id) {
    _data[id] && (_data[id].fulfilled = true);
  },
  unfulfillTask: function (id) {
    _data[id] && (_data[id].fulfilled = false);
  },
  toggleTask: function (id) {
    _data[id] && (_data[id].fulfilled = !_data[id].fulfilled);
  }
});

module.exports = TodoStore;