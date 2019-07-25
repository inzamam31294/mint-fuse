<template>
  <v-layout wrap class="index-9">
    <v-container
      class="index-9-cont accent"
      justify-center
      align-center
      text-xs-center
      grid-list-xl
      fluid
    >
      <v-flex xs12>
        <v-card class="index-9-heading accent" flat>
          <v-card-title class="index-9-headertext">
            <div
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
              data-aos-delay="500"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
              class="contact-us primary--text"
            >
              contact<span style="font-weight: bold;"> us</span>
            </h1>
          </v-card-title>
          <v-card-text class="text-u-header pt-0 primary--text">
            Drop us a line and We'll get back to you as soon as we can
          </v-card-text>
          <v-form>
            <v-container grid-list-xl>
              <v-layout row wrap>
                <v-flex pb-0 pt-5 lg4>
                  <v-text-field
                    v-model="name"
                    :rules="[rules.required, rules.name]"
                    name
                    maxlength="20"
                    class="accent--text"
                    label="Your Name"
                    solo
                  >
                  </v-text-field>
                </v-flex>
                <v-flex pb-0 pt-5 lg4>
                  <v-text-field
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    class="accent--text"
                    label="Your Email"
                    solo
                  >
                  </v-text-field>
                </v-flex>
                <v-flex pb-0 pt-5 lg4>
                  <v-text-field
                    v-model="subject"
                    :rules="[rules.required, rules.subject]"
                    subject
                    maxlength="20"
                    class="accent--text"
                    label="Your Subject"
                    solo
                  >
                  </v-text-field>
                </v-flex>
                <v-flex pb-0 xs12>
                  <v-textarea
                    solo
                    class="accent--text"
                    name="input-7-4"
                    rows="10"
                    label="Enter Your Message"
                    auto-grow
                  ></v-textarea>
                </v-flex>
                <v-flex pt-0 xs12>
                  <div>
                    <v-btn depressed color="secondary" dark large block>
                      <v-icon size="40px">mdi-email-outline</v-icon>
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      rules: {
        required: value => !!value || 'Required.',
        name: value => value.length >= 4 || 'Min 4 characters',
        subject: value => value.length >= 4 || 'Min 4 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  }
}
</script>

<style scoped>
.index-9-cont {
  padding-top: 100px;
  /* padding-bottom: 100px; */
}
.index-9-cont2 {
  padding: 0;
}
.index-9-headertext {
  display: inline-flex;
}
.contact-us {
  text-transform: uppercase;
  font-size: 25px;
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
.index-9-card {
  height: 200px;
}
.index-9-c1-title1,
.index-9-c2-title2,
.index-9-c3-title3,
.index-9-c1-title4,
.index-9-c2-title5,
.index-9-c3-title6,
.index-9-c1-title7,
.index-9-c2-title8 {
  text-transform: uppercase;
  font-family: 'Raleway';
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  color: whitesmoke;
  letter-spacing: 1px;
  flex-wrap: nowrap;
  padding: 0;
}
.icon-class {
  height: 30px;
  width: 30px;
}
.index-9-c1-text,
.index-9-c2-text,
.index-9-c3-text {
  padding-top: 0;
  padding-bottom: 0;
  font-family: 'Raleway';
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 1px;
  color: whitesmoke;
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
  .index-9-cont {
    padding: 0;
    padding-top: 200px;
    padding-bottom: 200px;
  }
  .text-u-header {
    font-size: 20px;
  }
  .index-9-c1-title1,
  .index-9-c2-title2,
  .index-9-c3-title3,
  .index-9-c1-title4,
  .index-9-c2-title5,
  .index-9-c3-title6,
  .index-9-c1-title7,
  .index-9-c2-title8 {
    font-size: 24px;
  }
  .icon-class {
    height: 50px;
    width: 50px;
  }
  .index-9-c1-text,
  .index-9-c2-text,
  .index-9-c3-text {
    font-size: 19px;
  }
  .index-9-card {
    height: 230px;
  }
}
@media (min-width: 1000px) {
  .contact-us {
    font-size: 75px;
    letter-spacing: 4px;
  }
  .icon-class {
    height: 60px;
    width: 60px;
  }
  .text-u-header {
    font-size: 25px;
  }
  .index-9-card {
    width: 350px;
    height: 250px;
  }
  .index-9-c1-title1,
  .index-9-c2-title2,
  .index-9-c3-title3,
  .index-9-c1-title4,
  .index-9-c2-title5,
  .index-9-c3-title6,
  .index-9-c1-title7,
  .index-9-c2-title8 {
    margin-right: 0;
    margin-left: 0;
  }
}
@media (min-width: 1100px) {
  .index-9-cont {
    padding-bottom: 200px;
  }
  .index-9-card {
    height: 220px;
  }
  .index-9-c1-title1 {
    margin-right: 135px;
    margin-left: -50px;
  }
  .index-9-c2-title2 {
    margin-right: 110px;
    margin-left: -52px;
  }
  .index-9-c3-title3 {
    margin-right: 100px;
    margin-left: -55px;
  }
  .index-9-c1-title4 {
    margin-right: 75px;
    margin-left: -52px;
  }
  .index-9-c2-title5 {
    margin-right: 80px;
    margin-left: -50px;
  }
  .index-9-c3-title6 {
    margin-right: 70px;
    margin-left: -52px;
  }
  .index-9-c1-title7 {
    margin-right: 130px;
    margin-left: -50px;
  }
  .index-9-c2-title8 {
    margin-right: 130px;
    margin-left: -52px;
  }
}
</style>
