import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
// import { Todo } from "../../models/todo";

import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    // this.todos = this.todoService.getTodos();
    this.todoService.getTodos().subscribe(todos => (this.todos = todos));
  }

  deleteTodo(todo: Todo) {
    // console.log(`Delete Todo`);
    // Remove the Todo from UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove the Todo from Server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo));
  }
}
