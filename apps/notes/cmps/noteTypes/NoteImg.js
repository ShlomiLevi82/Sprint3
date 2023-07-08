export default {
  props: ["info", "isEditNote"],
  template: `
  <div class="note-img">
    <h2 class="todo-header" v-if="!isEditNote">{{ info.txt }}</h2>
    <input v-else type="text" v-model="info.txt" />
    <img :src="info.url" alt="" srcset="" />
  </div>
    `,
};
