import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    insertTodo(newTodo){
      if(newTodo.length <20 | newTodo.length >100){
        console.log('errcor');
      }else{
        this.get('model.todoList').pushObject({action: this.newTodo,
                                               isReady: false
                                              });
      }
    },
    changeIsReady(action){
      this.get('model.todoList').forEach((todo)=>{
        if(todo.action == action & todo.isReady == true){
          todo.isReady = false;
        }else if (todo.action == action & todo.isReady == false) {
          todo.isReady = true;
        }
      });
    }
  }
});
