export default {
    props: ["note"],
    template: `
        <article>
          <h1>{{ note.noteType }}</h1>
          <h1>{{ note.info.txt }}</h1>
          <h1>{{ note.createdAt }}</h1>
        </article>
      `,
  };
  