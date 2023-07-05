export default {
  props: ['mail'],
  template: `
    <article class="mail-preview">
        <span class="material-icons-outlined">
            star_outline
        </span>        
        <h4>{{mail.from}}</h4>
        <h4>{{mail.subject}}</h4>
        <p>{{mail.sentAt}}</p>
     </article>
    `,
}
