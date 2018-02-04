const Welcome = () => import('~/pages/welcome')
const Login = () => import('~/pages/auth/login')
const Register = () => import('~/pages/auth/register')
const PasswordEmail = () => import('~/pages/auth/password/email')
const PasswordReset = () => import('~/pages/auth/password/reset')

const Home = () => import('~/pages/home')
const Settings = () => import('~/pages/settings/index')
const SettingsProfile = () => import('~/pages/settings/profile')
const SettingsPassword = () => import('~/pages/settings/password')

const Items = () => import('~/pages/items/index')
const ItemsCreate = () => import('~/pages/items/create')
const ItemsEdit = () => import('~/pages/items/edit')
const ItemsShow = () => import('~/pages/items/show')

export default [
  { path: '/', name: 'welcome', component: Welcome },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/home', name: 'home', component: Home },
  { path: '/settings', component: Settings, children: [
    { path: '', redirect: { name: 'settings.profile' }},
    { path: 'profile', name: 'settings.profile', component: SettingsProfile },
    { path: 'password', name: 'settings.password', component: SettingsPassword }
  ] },

  { path: '/items', component: Items, children: [
    { path: 'create', name: 'items.create', component: ItemsCreate },
    { path: 'edit', name: 'items.edit', component: ItemsEdit },
    { path: 'show', name: 'items.show', component: ItemsShow }
  ] },

  { path: '*', component: require('~/pages/errors/404') }
]
