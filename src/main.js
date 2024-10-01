
import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import 'flowbite';
import { auth } from './firebaseConfig';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'; 

const app = createApp(App)
app.config.globalProperties.$auth = auth;
toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "timeOut": "3000"
};
app.config.globalProperties.$toastr = toastr;

app.use(router)
app.mount('#app')
