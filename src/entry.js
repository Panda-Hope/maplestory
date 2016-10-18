import Vue from 'vue';

import VueResource from 'vue-resource';

import VueRouter from 'vue-router';

import routerMap from './routers';

import effects from './assets/js/effects';

import Users from './assets/js/interactive/userLogin';


Vue.use(VueResource);
Vue.http.options.emulateJSON = true;  //for support form submit in php

Vue.use(VueRouter);
let router = new VueRouter();
routerMap(router);

router.beforeEach(function(transition) {
	// login check
    transition.to.requireAuth && (!Users.getUserMsg().user && transition.redirect({path: '/'}));

    transition.next();
});

router.start({}, '#app');

