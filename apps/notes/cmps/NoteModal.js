export default {
  props: ["note"],
  template: `
      <div>
        <div v-if="isModalOpen" @click.self="toggleModal" class="modal">
          <div class="modal-content">
            <span class="close" @click="toggleModal">X</span>
            <input type=text >
            <p>dasd dasd asd</p>
          </div>
        </div>
        <button @click="toggleModal">Open modal</button>
      </div>
    `,
  data() {
    return {
      isModalOpen: false,
      txt: "s",
    };
  },
  created() {
    this.isModalOpen = true;
    // this.txt = note.info.txt;
  },

  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
    watch: {
      isModalOpen(newValue, oldValue) {
        this.txt = note.info.txt
        console.log(this.txt);
        console.log(oldValue);
        console.log(isModalOpen);
      },
      deep: true,
      input(a) {
        console.log(a);
        console.log(this.txt);
      },
      deep: true,
    },
    //   closeModal() {
    //     this.isModalOpen = false;
    //   }
  },
  name: "NoteModal",
};
