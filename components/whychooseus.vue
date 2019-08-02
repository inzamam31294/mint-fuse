<template>
  <v-layout wrap class="index-6 primary">
    <v-container class="index-6-cont" text-xs-center fluid>
      <v-flex xs12>
        <v-card class="index-6-heading" color="rgba(255, 255, 255, 0)" flat>
          <v-card-title class="index-6-headertext">
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
              class="why-choose-us accent--text text-uppercase"
              data-aos-duration="2000"
              data-aos-easing="ease"
              data-aos="fade-right"
            >
              why<span style="font-weight: bold;"> choose us</span>
            </h1>
          </v-card-title>
          <v-card-text
            data-aos-delay="100"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos="fade-up"
            class="index-6-uheader"
            >We understand the client, assess their needs and gather team set to
            reach target goals. Your goals can be as varied as building software
            for a retail store to designing a logo for your new brand. We reach
            these goals with our team of expert programmers, coders, UI/UX
            designers, web developers, application developers, digital media
            strategists, social media marketers, and SEO & SEM fanatics that
            employ their best skills and expertise to deliver a successful
            project. We provide unparalleled support to our clients who grow
            their business and get to enjoy the praise.
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<style scoped>
.index-6 {
  background-image: url('https://files.slack.com/files-pri/T3UCG9LPL-FLT0KT7QD/why_choose_us.png');
  background-size: contain;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.index-6-cont {
  padding: 0;
}
.index-6-headertext {
  display: inline-flex;
}
.why-choose-us {
  font-size: 20px;
  letter-spacing: 1px;
  font-family: 'Raleway';
  font-weight: normal;
}
.arrow-class {
  height: 50px;
  width: 40px;
}
.index-6-uheader {
  padding-top: 0;
  font-size: 12px;
  font-family: 'Raleway';
}
@media (min-width: 700px) {
  .why-choose-us {
    font-size: 50px;
    letter-spacing: 3px;
  }
  .index-6-uheader {
    font-size: 25px;
    width: 690px;
    margin: auto;
    line-break: normal;
  }
  .arrow-class {
    height: 80px;
    width: 80px;
  }
  .index-6-cont {
    padding: 0;
    padding-top: 200px;
    padding-bottom: 200px;
  }
}
@media (min-width: 1000px) {
  .why-choose-us {
    font-size: 75px;
    letter-spacing: 4px;
  }
  .index-6-uheader {
    width: 890px;
  }
}
</style>
