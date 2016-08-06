import Vue from 'vue';

import VueResource from 'vue-resource';

import VueRouter from 'vue-router';

import routerMap from './routers';

Vue.use(VueResource);

Vue.use(VueRouter);

let router = new VueRouter();

routerMap(router);

router.beforeEach(function(transition) {
    if (transition.to.requireAuth) {
        localStorage.userId ? transition.next() : transition.redirect({path: '/'});
    }
    
    transition.next();
});

router.start({}, '#app');

