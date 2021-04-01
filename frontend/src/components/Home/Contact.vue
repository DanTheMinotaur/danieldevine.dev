<template>
  <article id="contact" class="panel">
    <header :class="{ hide: messageSent }">
      <h2>Contact Me</h2>
    </header>
    <form @submit.prevent="postMessage" :class="{ hide: messageSent }">
      <div id="form-submit-notify"></div>
      <div>
        <div class="row">
          <div class="col-6 col-12-medium">
            <input type="text" name="name" placeholder="Name" v-model="name"  required/>
          </div>
          <div class="col-6 col-12-medium">
            <input type="email" name="email" placeholder="Email" v-model="email" required/>
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
    <header class="display" :class="{ hide: !messageSent }">
      <h2>Message Revieved!</h2>
    </header>
  </article>
</template>

<script>

const axios = require('axios')
const config = require('../../config/env')

export default {  
  name: 'Contact',
  title: 'Contact',
  data() {
      return {
          message: null,
          name: null,
          email: null,
          messageSent: false
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
            axios.post(config.VUE_APP_API_URL + '/contact-forms', {
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
                this.messageSent = true
            }).catch(error => {
                console.error(error)
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

<style scoped>
  .hide {
    display: none;
  }

  h2 {
    text-align: center;
  }

  .display {
    text-align: center;
  }
</style>