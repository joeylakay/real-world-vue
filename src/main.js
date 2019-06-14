import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import App from './App.vue'
import router from './router'
import store from './store/store'
import BaseIcon from '@/components/BaseIcon' // shouldn't need this now due to requireComp below
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import DateFilter from './filters/date'

Vue.filter('date', DateFilter)

Vue.use(Vuelidate) // use this library in every component in app

Vue.component('BaseIcon', BaseIcon)

Vue.config.productionTip = false

/* 
The following block of code will globally 
register anycomponent which lives in the 
components dir, is prepended with 'Base' and 
appended with .vue
*/

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
