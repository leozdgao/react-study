var TodoConstants = require('../constants/TodoConstants');
var TodoStore = require('../stores/TodoStore');
var Dispatcher = require('flux').Dispatcher;
var TodoDispatcher = new Dispatcher();

TodoDispatcher.register(function (payload) {
  switch (payload.actionType) {
    case TodoConstants.TODO_ADD_TASK: {
      TodoStore.addTask(payload.text);
      break;
    }
    case TodoConstants.TODO_FULFILL: {
      TodoStore.fulfillTask(payload.id);
      break;
    }
    case TodoConstants.TODO_UNFULFILL: {
      TodoStore.unfulfillTask(payload.id);
      break;
    }
    case TodoConstants.TODO_TOGGLE_FULFILL: {
  	  TodoStore.toggleTask(payload.id);
      break;
    }
    default: break; // do nothing
  }
});

module.exports = TodoDispatcher;