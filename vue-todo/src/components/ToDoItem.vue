<template>
  <div class="ToDoItem">
    <p class="ToDoItem-Text">{{todo.text}}</p>
    <div class="ToDoItem-Delete" @click="onDeleteItem(todo)">-</div>
  </div>
</template>

<script>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component()
export default class ToDoItem extends Vue {
  @Prop() todo;
  @Prop() onDeleteItem;
}
</script>

<style src="./ToDoItem.css"></style>