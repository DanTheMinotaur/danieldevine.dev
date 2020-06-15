<template>
  <article id="contact" class="panel">
    <header>
      <h2>Contact Me</h2>
    </header>
    <form @submit.prevent="postMessage" >
      <div id="form-submit-notify"></div>
      <div>
        <div class="row">
          <div class="col-6 col-12-medium">
            <input type="text" name="name" placeholder="Name" v-model="name"  required/>
          </div>
          <div class="col-6 col-12-medium">
            <input type="text" name="email" placeholder="Email" v-model="email" required/>
          </div>
          <div class="col-12">
            <textarea name="message" placeholder="Message" rows="6" v-model="message"  required></textarea>
          </div>
          <div class="col-12" >
            <input value="Send Message" type="submit" v-on:click="postMessage">
          </div>
        </div>
      </div>
    </form>
  </article>
</template>

<script>

const axios = require('axios')

export default {  
  name: "Contact",
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
            })
            .finally(() => {
                const notification = window.createNotification(notificationConfig)
                notification(message)
            })
          }
      }
  }
}
</script>