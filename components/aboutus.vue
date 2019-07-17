<template>
  <v-layout wrap class="index-2">
    <v-container class="index-2-cont primary" justify-center fluid>
      <v-flex xs12>
        <v-card class="index-2-heading" flat>
          <v-card-title
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos="fade-right"
            class="index-2-headertext"
          >
            <h1 class="about-us accent--text">
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
  padding-top: 200px;
  padding-bottom: 200px;
}
.index-2-headertext {
  justify-content: center;
}
.about-us {
  text-transform: uppercase;
  font-size: 75px;
  font-family: 'Raleway';
  font-weight: normal;
}
.index-2-uheader {
  text-align: center;
  padding-top: 0;
  font-size: 25px;
  font-family: 'Raleway';
}
</style>
