export default {
    props: ["note"],
    template: `
    
        <article class="note-preview" @click="clickHandler">
          <h2>{{ note.type }}</h2>
          <p>{{ note.info.txt }}</p>
          <p>{{ note.createdAt }}</p>
        </article>
      `,
        methods: {
          clickHandler() {
            this.$router.push("/notes/editNote/" + this.note.id);
          },
        },
  };
  