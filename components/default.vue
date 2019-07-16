<template>
  <v-app>
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
    <v-toolbar
      flat
      fixed
      app
      scroll-threshold="200"
      scroll-off-screen
      height="180"
      class="main-toolbar accent"
    >
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
            height="110"
            width="290"
          />
        </a>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in items"
          :key="item.icon"
          class="btn-toolbar"
          :to="item.to"
          flat
          >{{ item.title }}</v-btn
        >
        <!-- <v-container>
          <a class="btn-toolbar" to="#" dark flat>home</a>
          <a class="btn-toolbar" to="#" dark flat>what we do</a>
          <a class="btn-toolbar" to="#" dark flat>services</a>
          <a class="btn-toolbar" to="#" dark flat>about us</a>
          <a class="btn-toolbar" to="#" dark flat>contact</a>
          <v-btn
            class="toolbar-nav"
            icon
            dark
            large
            @click.stop="rightDrawer = !rightDrawer"
          >
            <v-icon x-large>menu</v-icon>
          </v-btn>
        </v-container> -->
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator" dark></v-toolbar-side-icon>
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
      </v-menu>
    </v-toolbar>
    <!-- <v-content>
      <v-container fluid px-5>
        <nuxt />
      </v-container>
    </v-content> -->
    <!-- <v-content>
      <div px-5>
        <nuxt />
      </div>
    </v-content> -->
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
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
    <!-- <v-footer :fixed="fixed" dark color="#404a60">
      <span>&copy; 2019</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'home',
          to: '/'
        },
        {
          icon: 'apps',
          title: 'what we do',
          to: '#'
        },
        {
          icon: 'home',
          title: 'services',
          to: '#'
        },
        {
          icon: 'info',
          title: 'about us',
          to: '#'
        },
        {
          icon: 'home',
          title: 'contact',
          to: '#'
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
/* .default {
  background-color: primary;
} */
/* .main-toolbar {
  padding-top: 20px;
} */
.main-title-toolbar {
  margin-left: 32px;
}
.btn-toolbar {
  font-family: 'Raleway', sans-serif;
  font-size: 25px;
  font-weight: 600;
  text-decoration: none;
  color: whitesmoke;
  margin: 25px;
}
/* .toolbar-nav {
  margin-right: 40px;
  margin-bottom: 15px;
  margin-left: 15px;
} */
</style>
