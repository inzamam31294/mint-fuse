<template>
  <v-layout wrap class="index-2">
    <v-container class="index-2-cont primary" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-2-heading" flat>
          <v-card-title class="index-2-headertext">
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
              class="about-us accent--text"
              data-aos-delay="500"
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
            >We do graphic designing, web & application development, SEO,<br />
            SEM, pay-per-click ads, social media marketing and other services
            focused<br />
            around optimizing your website and digital presence to multiply
            growth of<br />
            your company in the International market.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<style scoped>
.index-2-cont {
  padding: 0;
  padding-top: 100px;
  padding-bottom: 100px;
}
.index-2-headertext {
  display: inline-flex;
}
.about-us {
  text-transform: uppercase;
  font-size: 25px;
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
  .index-2-cont {
    padding: 0;
    padding-top: 300px;
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
