import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray = []

  addTodo(value:any) {

    this.todoArray.push(value)
    console.log(this.todoArray[this.todoArray.length-1])

  }
/*delete item*/  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) { this.todoArray.splice(i, 1) }
    }
  }


  // submit Form 
   todoSubmit(value:any)
   { console.log(value)
    }



}

