<template>
    <div class="column">
        <h3 class="title has-text-centered">Get in Touch</h3>
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
                <li><input value="Send Message" class="button is-success" type="button" v-on:click="postMessage()"></li>
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
            axios.post(process.env.VUE_APP_API_URL + '/contact-forms', {
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

<style lang="scss" scoped>
form {
  margin: 0 0 2em 0;

  .field {
    margin-bottom: 1.5em;

    &.half {
      display: inline-block;
      width: 48%;

      &.first {
        margin-right: 2.5%;
      }
    }
  }
}

@media screen and (max-width: 980px) {
  form .field.half {
    display: block;
    width: 100%;

    &.first {
      margin-right: 0;
    }
  }
}

label {
  display: block;
  font-size: 0.9em;
  font-weight: 700;
  margin: 0 0 1em 0;
}

input {
  &[type="text"], &[type="password"], &[type="email"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    border-radius: 4px;
    border: solid 1px rgba(25, 181, 254, 0.25);
    color: inherit;
    display: block;
    outline: 0;
    padding: 0 1em;
    text-decoration: none;
    width: 100%;
  }
}

select, textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  border-radius: 4px;
  border: solid 1px rgba(25, 181, 254, 0.25);
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 1em;
  text-decoration: none;
  width: 100%;
}

input {
  &[type="text"]:invalid, &[type="password"]:invalid, &[type="email"]:invalid {
    box-shadow: none;
  }
}

select:invalid, textarea:invalid {
  box-shadow: none;
}

input {
  &[type="text"] {
    &:active, &:focus {
      border: solid 1px #19B5FE;
    }
  }

  &[type="password"] {
    &:active, &:focus {
      border: solid 1px #19B5FE;
    }
  }

  &[type="email"] {
    &:active, &:focus {
      border: solid 1px #19B5FE;
    }
  }
}

select {
  &:active, &:focus {
    border: solid 1px #19B5FE;
  }
}

textarea {
  &:active, &:focus {
    border: solid 1px #19B5FE;
  }
}

.select-wrapper {
  text-decoration: none;
  display: block;
  position: relative;

  &:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
    content: '\f078';
    display: block;
    height: 2.75em;
    line-height: 2.75em;
    pointer-events: none;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 2.75em;
  }

  select::-ms-expand {
    display: none;
  }
}

input {
  &[type="text"], &[type="password"], &[type="email"] {
    height: 2.75em;
  }
}

select {
  height: 2.75em;
}

textarea {
  padding: 0.75em 1em;
}

input {
  &[type="checkbox"], &[type="radio"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
    display: block;
    float: left;
    margin-right: -2em;
    opacity: 0;
    width: 1em;
    z-index: -1;
  }

  &[type="checkbox"] + label, &[type="radio"] + label {
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    font-weight: 300;
    padding-left: 2.4em;
    padding-right: 0.75em;
    position: relative;
  }

  &[type="checkbox"] + label:before, &[type="radio"] + label:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }

  &[type="checkbox"] + label:before, &[type="radio"] + label:before {
    border-radius: 4px;
    border: solid 1px;
    content: '';
    display: inline-block;
    height: 1.65em;
    left: 0;
    line-height: 1.58125em;
    position: absolute;
    text-align: center;
    top: 0;
    width: 1.65em;
  }

  &[type="checkbox"]:checked + label:before, &[type="radio"]:checked + label:before {
    content: '\f00c';
  }

  &[type="checkbox"] + label:before {
    border-radius: 4px;
  }

  &[type="radio"] + label:before {
    border-radius: 100%;
  }
}

::-webkit-input-placeholder, :-moz-placeholder, ::-moz-placeholder, :-ms-input-placeholder, .formerize-placeholder {

  color: rgba(10, 11, 12, 0.25);
}
</style>