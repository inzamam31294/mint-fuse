// import Vue from 'vue'
// import Vuex from 'vuex'
// import * as firebase from 'firebase'

// Vue.use(Vuex)
// export const store = new Vuex.Store({
//   actions: {
//     submitForm({ commit }, payload) {
//       const data = {
//         name: payload.name,
//         email: payload.email,
//         subject: payload.subject,
//         message: payload.message
//       }
//       firebase
//         .database()
//         .ref('message')
//         .push(data)
//         .then(d => {
//           // eslint-disable-next-line no-console
//           console.log(d)
//           commit('submitForm', data)
//         })
//         .catch(error => {
//           // eslint-disable-next-line no-console
//           console.log(error)
//         })
//     }
//   }
// })
