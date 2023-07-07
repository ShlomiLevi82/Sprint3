export default {
  props: ["info"],
  template: `
        <div class="note-img">
      <h2>{{info.txt}}</h2>
      <img :src="img" alt="note-img" />
    </div>
    `,
  data() {
    return {
      img: this.info.url,
    };
  },
};
