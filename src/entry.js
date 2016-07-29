import Vue from 'vue';

import VueResource from 'vue-resource';

import VueRouter from 'vue-router';

import routerMap from './routers';

Vue.use(VueResource);

Vue.use(VueRouter);

let router = new VueRouter();

routerMap(router);

router.start({}, '#app');

