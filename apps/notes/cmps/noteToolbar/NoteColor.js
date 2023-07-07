export default {
  props: ["note"],
  template: `
        <span class="material-icons-outlined" @click.stop="">
            color_lens
        </span>
        <pre>{{note.style.backgroundColor}}</pre>
    
    `,
};
