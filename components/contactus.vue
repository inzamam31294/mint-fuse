<template>
  <v-layout wrap class="index-9 accent">
    <v-container
      class="index-9-cont"
      justify-center
      align-center
      text-xs-center
      grid-list-xl
      fluid
    >
      <v-flex xs12>
        <v-card color="rgba(255, 255, 255, 0)" class="index-9-heading" flat>
          <v-card-title class="index-9-headertext">
            <div
              data-aos-delay="300"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              <v-img
                src="https://files.slack.com/files-pri/T3UCG9LPL-FL6S5MBK4/final_details-07.png"
                contain
                class="arrow-class"
              />
            </div>
            <h1
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="contact-us primary--text text-uppercase"
            >
              contact<span style="font-weight: bold;"> us</span>
            </h1>
          </v-card-title>
          <v-card-text class="text-u-header pt-0 primary--text">
            Drop us a line and We'll get back to you as soon as we can
          </v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            color="rgba(255, 255, 255, 0)"
            @submit.prevent="submit"
          >
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex pb-0 pt-5 lg4>
                  <v-text-field
                    id="name"
                    v-model="name"
                    :rules="nameRules"
                    name
                    maxlength="20"
                    class="accent--text"
                    label="Your Name"
                    type="text"
                    solo
                    flat
                    required
                  >
                  </v-text-field>
                </v-flex>
                <v-flex pb-0 pt-5 lg4>
                  <v-text-field
                    id="email"
                    v-model="email"
                    :rules="emailRules"
                    class="accent--text"
                    label="Your Email"
                    type="text"
                    solo
                    flat
                    required
                  >
                  </v-text-field>
                </v-flex>
                <v-flex pb-0 pt-5 lg4>
                  <v-text-field
                    id="subject"
                    v-model="subject"
                    :rules="subjectRules"
                    subject
                    maxlength="20"
                    class="accent--text"
                    label="Your Subject"
                    type="text"
                    solo
                    flat
                    required
                  >
                  </v-text-field>
                </v-flex>
                <v-flex pb-0 xs12>
                  <v-textarea
                    id="message"
                    v-model="message"
                    solo
                    class="accent--text"
                    rows="10"
                    type="text"
                    label="Enter Your Message"
                    auto-grow
                    flat
                  ></v-textarea>
                </v-flex>
                <v-flex pt-0 xs12>
                  <div>
                    <v-btn
                      depressed
                      color="secondary"
                      type="submit"
                      dark
                      large
                      block
                      @click="submit"
                    >
                      <v-icon size="40px">mdi-email-outline</v-icon>
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <v-container grid-list-xl text-xs-center justify-center pt-5>
            <v-layout justify-space-around row wrap>
              <v-flex xs12 sm4 lg3>
                <v-card
                  class="index-9-card"
                  color="rgba(255, 255, 255, 0)"
                  flat
                  tile
                >
                  <v-img
                    src="https://files.slack.com/files-pri/T3UCG9LPL-FLSS91WER/final_details-21.png"
                    contain
                    class="icon-image"
                  />
                  <v-card-title
                    class="card-title-style text-uppercase primary--text font-weight-medium"
                    >address</v-card-title
                  >
                  <v-card-text class="card-text-style primary--text">
                    <p
                      style="font-size:13px; text-align:left; margin-bottom: 10px;"
                    >
                      108 Sector G 1st Floor, DHA Phase 1
                      <strong style="font-size:17px; ">Lahore</strong>
                    </p>
                    <p
                      style="font-size:13px; text-align:left; margin-bottom: 10px;"
                    >
                      Suite 407 Burlington Tower, Business Bay
                      <strong style="font-size:17px;">Dubai</strong>
                    </p>
                    <p
                      style="font-size:13px; text-align:left; margin-bottom: 10px;"
                    >
                      Suite 434 The Linen Hall 162-168 Regent Street,
                      <strong style="font-size:17px;">London</strong>
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4 lg3>
                <v-card
                  class="index-9-card"
                  color="rgba(255, 255, 255, 0)"
                  flat
                  tile
                >
                  <v-img
                    src="https://files.slack.com/files-pri/T3UCG9LPL-FLLFS3ERF/final_details-22.png"
                    contain
                    class="icon-image"
                  />
                  <v-card-title
                    class="card-title-style text-uppercase primary--text font-weight-medium"
                    >phone</v-card-title
                  >
                  <v-card-text class="card-text-style primary--text">
                    <p style="margin-bottom: 27px;">+92 321 9988588</p>
                    <p style="margin-bottom: 27px;">+971 (0) 528449050</p>
                    <p style="margin-bottom: 27px;">+44 (0) 7584092952</p>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4 lg3>
                <v-card
                  class="index-9-card"
                  color="rgba(255, 255, 255, 0)"
                  flat
                  tile
                >
                  <v-img
                    src="https://files.slack.com/files-pri/T3UCG9LPL-FLUMJGDPZ/final_details-23.png"
                    contain
                    class="icon-image"
                  />
                  <v-card-title
                    class="card-title-style text-uppercase primary--text font-weight-medium"
                    >contact</v-card-title
                  >
                  <v-card-text class="card-text-style primary--text"
                    ><p>hello@mintfuse.io</p>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4 lg3>
                <v-card
                  class="index-9-card"
                  color="rgba(255, 255, 255, 0)"
                  flat
                  tile
                >
                  <v-img
                    src="https://files.slack.com/files-pri/T3UCG9LPL-FLSRNB796/final_details-24.png"
                    contain
                    class="icon-image"
                  />
                  <v-card-title
                    class="card-title-style text-uppercase primary--text font-weight-medium"
                    >working hours</v-card-title
                  >
                  <v-card-text class="card-text-style primary--text"
                    ><p style="margin-bottom: 27px;">Mon-fri : 9:00 – 18:00</p>
                    <p style="margin-bottom: 27px;">Sat-sun : Closed</p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
import db from './FirebaseConfigs'
export default {
  components: {},
  data() {
    return {
      valid: true,
      name: '',
      email: '',
      subject: '',
      message: '',
      nameRules: [
        value => !!value || 'Name Is Required',
        value => (value && value.length > 3) || 'Min 4 characters',
        value => (value && value.length <= 20) || 'Max 20 characters'
      ],
      subjectRules: [
        value => !!value || 'Subject Is Required',
        value => (value && value.length > 3) || 'Min 4 characters',
        value => (value && value.length <= 20) || 'Max 20 characters'
      ],
      emailRules: [
        value => !!value || 'Email Is Required',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      ]
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        const timestamp = new Date()
        const formData = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
          timestamp
        }
        db.collection('contactForm')
          .add(formData)
          .then(() => {
            alert('Your Email Has Been Sent!')
          })
        this.$refs.form.reset()
      }
    }
  }
}
</script>

<style scoped>
.index-9 {
  background-image: url('https://files.slack.com/files-pri/T3UCG9LPL-FLFHGTFTL/contact_us.png');
  background-size: contain;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.index-9-cont {
  padding: 0;
}
.index-9-headertext {
  display: inline-flex;
}
.contact-us {
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'Raleway';
  font-weight: normal;
  padding: 0;
}
.arrow-class {
  height: 40px;
  width: 30px;
}
.text-u-header {
  font-size: 15px;
  font-family: 'Raleway';
  font-weight: 500;
}
.card-title-style {
  justify-content: center;
  font-family: 'Raleway';
  letter-spacing: 1px;
}
.icon-image {
  margin: 0 auto;
  height: 40%;
  width: 40%;
}
.card-text-style {
  /* text-align: left; */
  font-family: 'Raleway';
  font-size: 17px;
  line-height: 1.2rem;
}
@media (min-width: 700px) {
  .contact-us {
    font-size: 50px;
    letter-spacing: 4px;
  }
  .arrow-class {
    height: 80px;
    width: 80px;
  }
  .index-9 {
    padding-top: 200px;
    padding-bottom: 200px;
  }
  .text-u-header {
    font-size: 20px;
  }
  .index-9-card {
    justify-content: center;
  }
  .card-title-style {
    font-size: 15px;
  }
}
@media (min-width: 1000px) {
  .contact-us {
    font-size: 75px;
    letter-spacing: 4px;
  }
  .text-u-header {
    font-size: 25px;
  }
  .card-title-style {
    font-size: 18px;
  }
}
@media (min-width: 1100px) {
  .card-title-style {
    font-size: 20px;
  }
  .icon-image {
    height: 30%;
    width: 30%;
  }
}
</style>
