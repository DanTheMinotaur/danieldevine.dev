<template>
    <div class="column">
        <h3>Get in Touch</h3>
        <form>
            <div id="form-submit-notify"></div>
            <div class="field half first">
                <label for="name">Name</label>
                <input name="name" type="text" placeholder="Name" v-model="name" required>
            </div>
            <div class="field half">
                <label for="email">Email</label>
                <input name="email" type="email" placeholder="Email" v-model="email" required>
            </div>
            <div class="field">
                <label for="message">Message</label>
                <textarea name="message" rows="6" placeholder="Message" v-model="message" required></textarea>
                {{message}}
            </div>
            <ul class="actions">
                <li><input value="Send Message" class="button" type="button" v-on:click="postMessage()"></li>
            </ul>
        </form>
    </div>
</template>

<script>
const axios = require('axios')

export default {  
  name: "ContactForm",
  data() {
      return {
          message: null,
          name: null,
          email: null
      }
  },
  methods: {
      postMessage() {
          const notificationConfig = {
              closeOnClick: true,
              displayCloseButton: false,
              positionClass: 'nfc-top-right',
          }

          if (this.name && this.email && this.message) {
            let message = {}
            axios.post(process.env.VUE_APP_STRAPI_API_URL + '/contact-forms', {
                name: this.name,
                email: this.email,
                message: this.message
            }).then(() => {
                this.name = ""
                this.email = ""
                this.message = ""
                notificationConfig.theme = 'success'
                message.title = 'Message Sent!'
                message.message = 'Your message was recieved succesfully'
            }).catch(error => {
                console.log(error)
                notificationConfig.theme = 'error'
                message.title = 'Error!'
                message.message = 'Could not send message :-('
            }).finally(() => {
                const notification = window.createNotification(notificationConfig)
                notification(message)
            })
          }
          
          
      }
  }
}
</script> 