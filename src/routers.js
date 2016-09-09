export default function(router) {
        router.map({
                '/': {
                    component: function(resolve) {
                        require(['./components/Home/index.vue'], resolve);
                    },
                    requireAuth: false
                },
                '/register': {
                    component: function(resolve) {
                        require(['./components/Home/register.vue'], resolve);
                    },
                    requireAuth: false
                },
                '/search/:searchKey': {
                    component: function(resolve) {
                        require(['./components/Home/search.vue'], resolve);
                    },
                    requireAuth: false
                },
                '/user': {
                    component: function(resolve) {
                        require(['./components/user/index.vue'], resolve);
                    },
                    requireAuth: true
                },
                // 404 route
                '*': {
                    component: function(resolve) {
                        require(['./components/Common/404.vue'], resolve);
                    }
                }
        });
};


