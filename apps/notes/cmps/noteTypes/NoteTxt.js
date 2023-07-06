export default {
  props: ["note"],
  template: `
      <div>
    <input v-model="note.info.txt" type="text" placeholder="Write a note" />
    <input v-model="note.style.backgroundColor" type="color" />
  </div>
  `,
  create(){
    console.log(note);
  }
};
