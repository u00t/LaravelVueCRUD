const Home = () => import('~/pages/home').then(m => m.default || m)
const Welcome = () => import('~/pages/welcome').then(m => m.default || m)

const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const PasswordRequest = () => import('~/pages/auth/password/email').then(m => m.default || m)

const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

const Items = () => import('~/pages/items/index').then(m => m.default || m)
const ItemsList = () => import('~/pages/items/list').then(m => m.default || m)
const ItemsCreate = () => import('~/pages/items/create').then(m => m.default || m)
const ItemsShow = () => import('~/pages/items/show').then(m => m.default || m)
const ItemsEdit = () => import('~/pages/items/edit').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Welcome },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordRequest },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/home', name: 'home', redirect: { name: 'items.list' } },
  { path: '/settings', component: Settings, children: [
    { path: '', redirect: { name: 'settings.profile' }},
    { path: 'profile', name: 'settings.profile', component: SettingsProfile },
    { path: 'password', name: 'settings.password', component: SettingsPassword }
  ] },

  { path: '/items', component: Items, children: [
    { path: '', name: 'items.list', component: ItemsList},
    { path: 'create', name: 'items.create', component: ItemsCreate },
    { path: 'show/:itemId', name: 'items.show', component: ItemsShow },
    { path: 'edit/:itemId', name: 'items.edit', component: ItemsEdit }
  ] },

  { path: '*', component: require('~/pages/errors/404.vue') },
]
