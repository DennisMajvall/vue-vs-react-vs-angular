import { Component } from "@angular/core";
import { ToDo } from "./to-do";

@Component({
	selector: "ToDo", // default:'app-to-do',
	templateUrl: "./to-do.component.html",
	styleUrls: ["./to-do.component.css"]
})
export class ToDoComponent {
	constructor() { }

	toDos: ToDo[] = [
		new ToDo("clean the house"),
		new ToDo("buy milk")
	];

	input: string = "";

	hasBeenEdited: boolean = false;


	deleteItem(i: number) {
		this.toDos.splice(i, 1);
	}

	addItem() {
		if (this.input == "") {
			return alert("Please enter a todo!");
		}
		this.toDos.push(new ToDo(this.input));
		this.input = '';
		this.hasBeenEdited = false;
	}

	onKeyUp() {
		this.hasBeenEdited = true;
	}
}
