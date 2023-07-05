export default {
    props: ["note"],
    template: `
        <article class="note-preview" @click="clickHandler">
          <h1>{{ note.type }}</h1>
          <h1>{{ note.info.txt }}</h1>
          <h1>{{ note.createdAt }}</h1>
        </article>
      `,
        methods: {
          clickHandler() {
            this.$router.push("/notes/editNote/" + this.note.id);
          },
        },
  };
  