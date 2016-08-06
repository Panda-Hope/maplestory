export default function(router) {
        router.map({
                '/': {
                    component: function(resolve) {
                        require(['./components/Home/index.vue'], resolve);
                    },
                    requireAuth: false
                },
                // 404 路由 
                '*': {
                    component: function(resolve) {
                        require(['./components/Common/404.vue'], resolve);
                    }
                }
        });
};


