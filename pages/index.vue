<template>
  <v-app id="app">
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Raleway:400,500,600"
    />
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue2-smooth-scroll"></script>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-container fluid accent pa-0>
      <v-toolbar height="auto" flat fixed class="main-toolbar accent">
        <!-- <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn> -->
        <v-toolbar-title class="main-title-toolbar">
          <a href="/">
            <v-img
              src="https://files.slack.com/files-pri/T3UCG9LPL-FKPS739B2/logo-01.png"
              contain
            />
          </a>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items class="toolbar-items hidden-md-and-down">
          <v-btn
            v-for="item in items"
            :key="item.icon"
            class="btn-toolbar white--text text-lowercase"
            :href="item.route"
            flat
            depressed
            >{{ item.title }}</v-btn
          >
        </v-toolbar-items>
        <v-menu class="hidden-lg-and-up">
          <v-toolbar-side-icon
            slot="activator"
            class="white--text text-lowercase"
          ></v-toolbar-side-icon>
          <v-list>
            <v-list-tile
              v-for="(item, i) in items"
              :key="i"
              :href="item.route"
              router
              exact
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title" />
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-content app>
        <Main />
        <AboutUs id="aboutus" />
        <OurServices id="ourservices" />
        <OurExpertise id="ourexpertise" />
        <WhatWeDo id="whatwedo" />
        <WhyChooseUs id="whychooseus" />
        <gpresense id="gpresense" />
        <customerreview id="customerreview" />
        <contactus id="contactus" />
        <Footer />
      </v-content>
      <!-- <v-navigation-drawer
      v-model="rightDrawer".index-7-cont {
    height: 500px;
  }
      :right="right"
      :clipped="clipped"
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    </v-container>
  </v-app>
</template>

<script>
import Main from '~/components/main.vue'
import AboutUs from '~/components/aboutus.vue'
import OurServices from '~/components/ourservices.vue'
import OurExpertise from '~/components/ourexpertise.vue'
import WhatWeDo from '~/components/whatwedo.vue'
import WhyChooseUs from '~/components/whychooseus.vue'
import gpresense from '~/components/Gpresense.vue'
import customerreview from '~/components/customerreview.vue'
import contactus from '~/components/contactus.vue'
import Footer from '~/components/footer.vue'
export default {
  components: {
    Main,
    AboutUs,
    OurServices,
    OurExpertise,
    WhatWeDo,
    WhyChooseUs,
    gpresense,
    customerreview,
    contactus,
    Footer
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'home',
          route: '/'
        },
        {
          icon: 'gavel',
          title: 'what we do',
          route: '#whatwedo'
        },
        {
          icon: 'chat',
          title: 'services',
          route: '#ourservices'
        },
        {
          icon: 'info',
          title: 'about us',
          route: '#aboutus'
        },
        {
          icon: 'mail',
          title: 'contact',
          route: '#contactus'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  methods: {
    menuItems() {
      return this.items
    }
  }
}
</script>

<style scoped>
/* .main-toolbar {
  background-color: rgba(255, 255, 255, 0);
} */
.main-title-toolbar {
  height: 80px;
  width: 180px;
  padding: 10px 0;
}
.toolbar-items {
  padding: 0 30px;
}
.btn-toolbar {
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding: 0 20px;
}
@media (min-width: 700px) {
  .main-title-toolbar {
    height: 180px;
    width: 350px;
    padding: 25px 30px;
  }
}
@media (min-width: 1000px) {
  .btn-toolbar {
    font-size: 20px;
    padding: 0 20px;
  }
  .main-title-toolbar {
    padding: 35px 30px;
  }
}
@media (min-width: 1300px) {
  .btn-toolbar {
    font-size: 25px;
    padding: 0 30px;
  }
  .main-title-toolbar {
    padding: 35px 30px;
  }
}
</style>
