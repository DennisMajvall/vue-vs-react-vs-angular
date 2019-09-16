<template>
  <div class="ToDo">
    <img class="Logo" src="./assets/logo.png" alt="Vue logo" />
    <h1 class="ToDo-Header">Vue To Do</h1>
    <div class="ToDo-Container">
      <div class="ToDo-Content">
        <ToDoItem v-for="todo in list" :todo="todo" :onDeleteItem="onDeleteItem" :key="todo.id" />
      </div>
      <input
        type="text"
        v-model="todo"
        @keyup="hasBeenEdited = true"
        @keyup.enter="createNewToDoItem"
      />
      <div v-if="!this.todo && hasBeenEdited">Name is required.</div>
      <div class="ToDo-Add" @click="createNewToDoItem()">+</div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import ToDoItem from "./components/ToDoItem.vue";

@Component({ components: { ToDoItem } })
export default class ToDo extends Vue {
  list = [
    {
      id: 1,
      text: "clean the house"
    },
    {
      id: 2,
      text: "buy milk"
    }
  ];
  todo = "";
  hasBeenEdited = false;
  idCounter = 2;

  createNewToDoItem() {
    if (!this.todo) {
      return alert("Please enter a todo!");
    }

    this.hasBeenEdited = false;
    this.idCounter++;
    this.list.push({ id: this.idCounter, text: this.todo });
    this.todo = "";
  }

  onDeleteItem(todo) {
    this.list = this.list.filter(item => item !== todo);
  }
}
</script>

<style src="./ToDo.css"></style>
