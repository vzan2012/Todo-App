import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo:EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      "is-complete": this.todo.completed
    };

    return classes;
  }

  // onToggle()
  onToggle(todo) {
    // console.log(`Toggle: ${todo}`);

    // Toggle on UI
    todo.completed = !todo.completed;

    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  // click()
  onDelete(todo) {
    // console.log(`Delete: ${todo}`);
    this.deleteTodo.emit(todo);
  }
}
