export default {
  props: ["info", "isEditNote"],
  template: `
    <section class="note-todos">
      <h2  v-if="!isEditNote" class="todo-header">{{ info.txt }}</h2>
      <h2 v-if="isEditNote" class="todo-header">{{ info.txt }}</h2>
      <ul>
        <li  v-for="(todo, index) in info.todos" :key="index">
          <template v-if="!isEditNote">
            <input type="checkbox" :id="'checkbox-' + index" @click.stop="click(index)"  />
            {{ todo.txt }}
          </template>
          <template v-else class="todo-note">
            <input ref="textInput" v-model="todo.txt" :id="'input-' + index" type="text" />
            <span class="material-icons-outlined todos-buttons" v-if="index === (info.todos.length - 1)" @click.stop="addFields">
                add
            </span>
            <span class="material-icons-outlined todos-buttons" @click.stop="deleteRow(index)">
              clear
            </span>
          </template>
        </li>
      </ul>
    </section>
  `,
  methods: {
    addFields() {
      this.info.todos.push({ txt: "New Todo", isDone: false });
      this.$nextTick(() => {
        this.$refs.textInput[this.info.todos.length - 1].focus();
      });
    },
    deleteRow(index) {
      console.log(this.info.todos.length);
      if(this.info.todos.length === 1) return
      this.info.todos.splice(index, 1);
    },
    click(index) {
      this.info.todos[index].isDone = !this.info.todos[index].isDone;
    },
  },
};
