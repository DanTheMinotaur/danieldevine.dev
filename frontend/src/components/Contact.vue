<template>
<section id="contact">
    <!-- Social -->
        <div class="social column">
            <h3>About Me</h3>
            <p>Mus sed interdum nunc dictum rutrum scelerisque erat a parturient condimentum potenti dapibus vestibulum condimentum per tristique porta. Torquent a ut consectetur a vel ullamcorper a commodo a mattis ipsum class quam sed eros vestibulum quisque a eu nulla scelerisque a elementum vestibulum.</p>
            <p>Aliquet dolor ultricies sem rhoncus dolor ullamcorper pharetra dis condimentum ullamcorper rutrum vehicula id nisi vel aptent orci litora hendrerit penatibus erat ad sit. In a semper velit eleifend a viverra adipiscing a phasellus urna praesent parturient integer ultrices montes parturient suscipit posuere quis aenean. Parturient euismod ultricies commodo arcu elementum suspendisse id dictumst at ut vestibulum conubia quisque a himenaeos dictum proin dis purus integer mollis parturient eros scelerisque dis libero parturient magnis.</p>
            <h3>Follow Me</h3>
            <ul class="icons">
                <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
            </ul>
        </div>

    <!-- Form -->
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

</section>
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
          axios.post(process.env.VUE_APP_STRAPI_API_URL + '/contact-forms', {
              name: this.name,
              email: this.email,
              message: this.message
          }).then(() => {
              this.name = ""
              this.email = ""
              this.message = ""
              notificationConfig.theme = 'success'
          }).catch(error => {
              console.log(error)
              notificationConfig.theme = 'error'
          }).finally(() => {
              const notification = window.createNotification(notificationConfig)
              notification({
                  title: 'Title',
                  message: 'Notification Message'
              })
          })
      }
  }
}
</script>  

<style scoped>
form-submit-notify {
    position: absolute;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    background: #fde073;
    text-align: center;
    line-height: 2.5;
    overflow: hidden; 
    -webkit-box-shadow: 0 0 5px black;
    -moz-box-shadow:    0 0 5px black;
    box-shadow:         0 0 5px black;
    @-webkit-keyframes slideDown {
    0%, 100% { -webkit-transform: translateY(-50px); }
    10%, 90% { -webkit-transform: translateY(0px); }
    }
    @-moz-keyframes slideDown {
        0%, 100% { -moz-transform: translateY(-50px); }
        10%, 90% { -moz-transform: translateY(0px); }
    }
}
</style>