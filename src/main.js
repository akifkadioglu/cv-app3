import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import { functions } from '../functions';
import { routeName } from './router/routeName';
import VueLazyLoad from 'vue3-lazyload'


let app = createApp(App)
app.config.globalProperties.functions = functions
app.config.globalProperties.routeName = routeName

app
    .use(router)
    .use(VueLazyLoad)
    .use(mdiVue, {
        icons: mdijs
    })
    .mount('#app')
