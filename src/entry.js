import Vue from 'vue';

import VueResource from 'vue-resource';

import VueRouter from 'vue-router';

import routerMap from './routers';

import $ from './assets/js/jquery-2.2.0.min';

import effects from './assets/js/effects';

Vue.use(VueResource);

Vue.use(VueRouter);

let router = new VueRouter();

routerMap(router);

router.beforeEach(function(transition) {
	// login check
    transition.to.requireAuth && (localStorage.userId ? transition.next() : transition.redirect({path: '/'}));

    transition.next();
});

router.start({}, '#app');

