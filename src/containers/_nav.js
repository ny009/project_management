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
        to: '/mycourse',
        icon: 'cil-puzzle'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Project']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'My Project',
        route: '/project',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'project1',
            to: '/project/project'
          },
          {
            name: 'project1',
            to: '/project/project'
          },
          {
            name: 'project1',
            to: '/project/project'
          },
        ],
      }
    ]
  }
]