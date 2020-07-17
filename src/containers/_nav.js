export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Notifications',
        to: '/notifications/alerts',
        icon: 'cil-bell',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Course']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'My Course',
        to: '/theme/typography',
        icon: 'cil-puzzle'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Project']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'My Project',
        route: '/base',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'project1',
            to: '/base/breadcrumbs'
          },
          {
            name: 'project1',
            to: '/base/breadcrumbs'
          },
          {
            name: 'project1',
            to: '/base/breadcrumbs'
          },
        ],
      }
    ]
  }
]