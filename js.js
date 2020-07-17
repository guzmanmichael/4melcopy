const app = new Vue({
  el: "#app",
  data: {
    title: "Tareas",
    todo: [],
    newToDo: "",
  },
  methods: {
    addToDo() {
      this.todo.push({
        name: this.newToDo,
        state: false,
      });
      this.newToDo = "";
      localStorage.setItem("temporalData", JSON.stringify(this.todo));
    },

    chageState(index) {
      this.todo[index].state = !this.todo[index].state;
      console.log(this.todo[index].state);
      localStorage.setItem("temporalData", JSON.stringify(this.todo));
    },

    deleteToDo(index) {
      this.todo.splice(index, 1);
      localStorage.setItem("temporalData", JSON.stringify(this.todo));
    },
  },

  created: function () {
    let ls_db = JSON.parse(localStorage.getItem("temporalData"));
    if (ls_db === null) {
      this.todo = [];
    } else {
      this.todo = ls_db;
    }
  },
});
