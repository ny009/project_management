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
        _children: ['Project']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'My project',
        to: '/project/Myproject',
        icon: 'cil-puzzle',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'All project',
        to: '/project/Allproject',
        icon: 'cil-puzzle',
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'project',
        route: '/project',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'create project',
            to: '/project/Createproject'
          },
        ],
      }
    ]
  }
]