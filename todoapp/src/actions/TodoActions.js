var TodoConstants = require('../constants/TodoConstants');
var TodoDispatcher = require('../dispatcher/TodoDispatcher');

var TodoActions = {
  add: function (text) {
    TodoDispatcher.dispatch({
      actionType: TodoConstants.TODO_ADD_TASK,
      text: text
    });
  },
  toggle: function (id) {
    TodoDispatcher.dispatch({
      actionType: TodoConstants.TODO_TOGGLE_FULFILL,
      id: id
    });
  }
};

module.exports = TodoActions;