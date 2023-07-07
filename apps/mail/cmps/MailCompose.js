export default {
  name: 'EmailCompose',

  template: `
     <div class="mail-compos-container"> 
        <form @submit.prevent="onSendMail" class="compose-mail">
            <h1>New Message</h1>
            <label for="to"></label>
            <input v-model="sendTo" type="email" id="to" placeholder="to" required/>
            <label for="subject"></label>
            <input v-model="subject" type="text" id="subject" placeholder="Subject" required/>
            <textarea v-model="body" cols="40" rows="5" placeholder="write here"></textarea>
            <button class="btn-submit " type="submit">Send</button>
        </form>
    </div>
  `,

  methods: {
    onCloseCompose() {
      console.log('close')
    },
  },
}
