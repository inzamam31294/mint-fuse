<template>
  <v-layout wrap class="index-2 primary">
    <v-container class="index-2-cont" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-2-heading" color="rgba(255, 255, 255, 0)" flat>
          <v-card-title class="index-2-headertext pt-5">
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
              class="about-us accent--text"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              about<span style="font-weight: bold;"> us</span>
            </h1>
          </v-card-title>
          <v-card-text
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos="fade-up"
            class="index-2-uheader"
            >Our work is bound to be as creative and fresh to the eye as is mint
            to a mojito<br />
            glass. We create smart code, beautiful designs, and fusion of what
            adds<br />
            a minty touch to your needs. We cultivate an engaging culture in our
            daily tech<br />
            routine to leave you with an unparalleled experience.<br />Our work
            is bound to be as creative and fresh to the eye as is mint to a
            mojito<br />
            glass. We create smart code, beautiful designs, and fusion of what
            adds a<br />
            minty touch to your needs. We cultivate an engaging culture in our
            daily tech<br />
            routine to leave you with an unparalleled experience.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<style scoped>
.index-2 {
  padding-top: 100px;
  padding-bottom: 100px;
  background-image: url('https://files.slack.com/files-pri/T3UCG9LPL-FLUR99ABH/about_us.png');
  background-size: contain;
  background-position: center;
}
.index-2-cont {
  padding: 0;
}
.index-2-heading {
  align-items: center;
}
.index-2-headertext {
  display: inline-flex;
}
.about-us {
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'Raleway';
  font-weight: normal;
}
.arrow-class {
  height: 50px;
  width: 50px;
}
.index-2-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 12px;
  font-family: 'Raleway';
}
@media (min-width: 700px) {
  .about-us {
    font-size: 50px;
    letter-spacing: 4px;
  }
  .index-2-uheader {
    font-size: 20px;
  }
  .arrow-class {
    height: 80px;
    width: 80px;
  }
  .index-2 {
    padding-top: 200px;
    padding-bottom: 200px;
  }
}
@media (min-width: 1000px) {
  .about-us {
    font-size: 75px;
    letter-spacing: 4px;
  }
  .index-2-uheader {
    font-size: 25px;
  }
}
</style>
