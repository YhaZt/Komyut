import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 

function isAuthenticated() {
  const auth = getAuth();
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(!!user);
    });
  });
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/home-index.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Account/login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Account/register.vue')
    },
    {
      path: '/map',
      name: 'Map',
      component: () => import('../views/Passenger/map.vue')
    },
    {
      // meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth) {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
