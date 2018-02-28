function taskList() {
    this._taskList = [];
  }

  taskList.prototype.getTaskList = function () {
    return this._taskList;
  };

 taskList.prototype.clearTaskList = function () {
    this._taskList = [];
  };
 
  function Task(id, description) {
    this._id = id;
    this._description = description;
    this._isDone = false;
  }
  
  Task.prototype.getId = function() {
    return this._id;
  };
  
  Task.prototype.getDescription = function() {
    return this._description;
  };
  
  Task.prototype.setDescription = function(description) {
    this._description = description;
  };
  
  Task.prototype.getIsDone = function() {
    return this._isDone;
  };
  
