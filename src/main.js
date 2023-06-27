import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import { functions } from './functions';
import { routeName } from './router/routeName';
import { fetchFire } from './firebase/functions'
import { TroisJSVuePlugin } from 'troisjs';
import { router } from './router'

import { SnackbarService } from "vue3-snackbar";
import "vue3-snackbar/styles";

let app = createApp(App)
app.config.globalProperties.functions = functions
app.config.globalProperties.fetchFire = fetchFire
app.config.globalProperties.routeName = routeName

app
    .use(SnackbarService)
    .use(TroisJSVuePlugin)
    .use(router)
    .use(mdiVue, {
        icons: mdijs
    })
    .mount('#app')
