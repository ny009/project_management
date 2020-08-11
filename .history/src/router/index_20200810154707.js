import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')







// Views - Components
const Project = () => import('@/views/project/Project')
const Myproject = () => import('@/views/project/Myproject')
const Allproject = () => import('@/views/project/Allproject')
const Createproject = () => import('@/views/mentor/Createproject')
const Projectdetail = () => import('@/views/project/Projectdetail')

// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')
const Createannouncement = () => import('@/views/notifications/Createannouncement')

//View Team
const Allteam = () => import('@/views/team/Allteam')
const Myteam = () => import('@/views/team/Myteam')
const Createteam = () => import('@/views/team/Createteam')
const Allschedule = () => import('@/views/team/Allschedule')
const Alltask = () => import('@/views/team/Alltask')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')



Vue.use(Router)

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/pages/login',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'project',
          redirect: '/project/myproject',
          name: 'Project',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'myproject',
              name: 'Myproject',
              component: Myproject
            },
            {
              path: 'allproject',
              name: 'Allproject',
              component: Allproject
            },
            {
              path: 'createproject',
              name: 'Createproject',
              component: Createproject
            },
          ]
        },
        {
          path: 'team',
          redirect: '/team/Allteam',
          name: 'Team',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'allteam',
              name: 'Allteam',
              component: Allteam
            },
            {
              path: 'myteam',
              name: 'Myteam',
              component: Myteam
            },
            {
              path: 'createteam',
              name: 'Createteam',
              component: Createteam
            },
            {
              path: 'allschedule',
              name: 'Allschedule',
              component: Allschedule
            },
            {
              path: 'alltask',
              name: 'Alltask',
              component: Alltask
            }
          ]
        },
        {
          path: 'notifications',
          redirect: '/notifications/alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'createannouncement',
              name: 'Createannouncement',
              component: Createannouncement
            },
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

