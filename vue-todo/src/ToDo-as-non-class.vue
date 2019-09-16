<script>
export default {
  name: "to-do",

  components: { ToDoItem },

  data() {
    return {
      list: [
        {
          id: 1,
          text: "clean the house"
        },
        {
          id: 2,
          text: "buy milk"
        }
      ],
      todo: "",
      idCounter: 2,
      hasBeenEdited: false
    };
  },

  methods: {
    createNewToDoItem() {
      if (!this.todo) {
        return alert("Please enter a todo!");
      }

      this.hasBeenEdited = false;
      this.idCounter++;
      this.list.push({ id: this.idCounter, text: this.todo });
      this.todo = "";
    },

    onDeleteItem(todo) {
      this.list = this.list.filter(item => item !== todo);
    }
  }
};
</script>