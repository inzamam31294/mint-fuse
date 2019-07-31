import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import colors from 'vuetify/es5/util/colors'
import 'vuetify/src/stylus/app.styl'
import '@mdi/font/css/materialdesignicons.css'
import '@mdi/font/css/materialdesignicons.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Animation from 'animate.css'
import VueAnimate from 'vue-animate-scroll'
// import { store } from '~/store'

Vue.use(Vuetify, {
  iconfont: 'md' || 'mdi' || 'fa' || 'fa4',
  theme: {
    primary: '#ffffff',
    accent: '#404a60',
    secondary: '#66cc99',
    tertiary: '#CCCCCC'
  }
})

Vue.use(Animation)
Vue.use(VueAnimate)

// eslint-disable-next-line no-new
new Vue({
  // el: '#app',
  created() {}
})

// Vue.use(Vuetify, {
//   theme: {
//     primary: '#fffff',
//     accent: '#404a60',
//     secondary: '#66cc99'
//     info: colors.teal.lighten1,
//     warning: colors.amber.base,
//     error: colors.deepOrange.accent4,
//     success: colors.green.accent3
//   }
// })
