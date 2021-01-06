import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from "src/app/models/Todo";
// import { Todo } from "../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  title: string;
  max_id = 200;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  onSubmit(e) {
    const todo = {
      id: ++this.max_id,
      title: this.title,
      completed: false,
    };
    // console.log(
    //   '🚀 ~ file: todos.component.ts ~ line 32 ~ TodosComponent ~ onSubmit ~ todo',
    //   todo
    // );

    this.todoService.addTodo(todo).subscribe((td) => {
      this.todos.push(todo);
      // this.todos.push(td);
      console.log(
        '🚀 ~ file: todos.component.ts ~ line 39 ~ TodosComponent ~ onSubmit ~ td',
        td
      );
    });
    e.target.reset();
  }

  deleteTodo(todo: Todo) {
    // Remove From UI
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    // Remove from server
    this.todoService.deleteTodo(todo).subscribe((x: any) => {
      console.log(x);
    });
  }

  // Set Dynamic Classes
  setClasses(todo) {
    const classes = {
      'is-complete': todo.completed,
    };

    return classes;
  }

  // Set Dynamic Classes
  toggleStrike(e) {
    e.target.classList.toggle('is-complete');
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe((td) => console.log(td));
  }

  onDelete(todo) {
    this.deleteTodo(todo);
    // this.deleteTodo.emit(todo);
  }
}
