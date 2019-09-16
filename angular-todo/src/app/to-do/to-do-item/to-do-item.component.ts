import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ToDo } from "../to-do";

@Component({
	selector: "ToDoItem", //default: app-to-do-item
	templateUrl: "./to-do-item.component.html",
	styleUrls: ["./to-do-item.component.css"]
})
export class ToDoItemComponent implements OnInit {
	constructor() { }

	@Input() toDo: ToDo = new ToDo("");

	@Output() deleted: EventEmitter<any> = new EventEmitter();

	ngOnInit() { }

	deleteItem() {
		this.deleted.emit();
	}
}
