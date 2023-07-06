export default {
    props: ["note"],
    template: `
    
        <article class="note-preview" >
          <h2>{{ note.type }}</h2>
          <p>{{ note.info.txt }}</p>
          <p>{{ note.createdAt }}</p>
        </article>
      `,

  };
  