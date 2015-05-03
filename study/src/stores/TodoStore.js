var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var _data = [
  { text: 'Learn js parttern', fulfilled: false },
  { text: 'Make Todo-App', fulfilled: true }
];

var TodoStore = objectAssign({}, EventEmitter.prototype, {
  getAllTask: function () {
    // other fetch data logic
    return _data.map(function (data, i) { data._id = i; return data; });
  },
  getTaskState: function (id) {
    return _data[id] && _data[id].fulfilled;
  },
  addTask: function (text) {
    // other PUT operation
    _data.push({ text: text, fulfilled: false });
    
    // trigger event
    TodoStore.emit('list_change');
    
    return _data.length - 1; // take index as id
  },
  fulfillTask: function (id) {
    this._changeTaskState(id, true);
  },
  unfulfillTask: function (id) {
    this._changeTaskState(id, false);
  },
  toggleTask: function (id) {
    this._changeTaskState(id);
  },
  _changeTaskState: function (id, state) {
    if (_data[id]) {
      // force convert to boolean
      _data[id].fulfilled = 
        (typeof state !== 'undefined' ? 
          !!state : !_data[id].fulfilled);
      // trigger event
      TodoStore.emit('list_change'); 
    }
  }
});

module.exports = TodoStore;