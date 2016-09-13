/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

// Vue.component('example', require('./components/Example.vue'));
// Vue.component('login', require('./components/Login.vue'));

var App = Vue.extend({
    created() {
        console.log('App Ready');
    }
});

window.VueRouter = require('vue-router');

Vue.config.debug = true; 
Vue.http.options.root = '/api';

var router = new VueRouter({
    history: true,
    root: '/api'
});

router.beforeEach(function (transition) {
    // console.log(transition);

    return true;
});

router.map({
    '/': {
        component: require('./components/Example.vue')
    },
    '/login': {
        component: require('./components/Login.vue')
        // adminOnly: true
    }
});

router.start(App, '#app');
