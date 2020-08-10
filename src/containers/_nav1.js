export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['mentor']
      },
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
        _children: ['project']
      },    
      {
        _name: 'CSidebarNavItem',
        name: 'My Project',
        to: '/project/Myproject',
        icon: 'cil-puzzle',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['team']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Team',
        to: '/team/allschedule',
        icon: 'cil-puzzle',
      },  
      {
        _name: 'CSidebarNavTitle',
        _children: ['assignment']
      },    
      {
        _name: 'CSidebarNavItem',
        name: 'Assignment',
        to: '/team/alltask',
        icon: 'cil-puzzle',
      }
    ]
  }
]