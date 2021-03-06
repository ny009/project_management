import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')







// Views - Components

const Myproject = () => import('@/views/project/Myproject')
const Allproject = () => import('@/views/project/Allproject')


// Views - Notifications
const Alerts = () => import('@/views/notifications/Alerts')


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

//Views - mentor
const Allannouncement = () => import('@/views/mentor/Allannouncement')
const Allmyproject = () => import('@/views/mentor/Allmyproject')
const Phasedetail = () => import('@/views/mentor/Phasedetail')
const Mentorprojectdetail = () => import('@/views/mentor/Projectdetail')


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
          ]
        },
        {
          path: 'mentor',
          redirect: '/mentor/allmyproject',
          name: 'Mentor',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'allmyproject',
              name: 'Allmyproject',
              component: Allmyproject
            },
            {
              path: 'allannouncement',
              name: 'Allannouncement',
              component: Allannouncement
            },
            {
              path: 'phasedetail',
              name: 'Phasedetail',
              component: Phasedetail
            },
            {
              path: 'projectdetail',
              name: 'Projectdetail',
              component: Mentorprojectdetail
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

