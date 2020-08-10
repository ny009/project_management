export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'test',
        to: '/dashboard',
        icon: 'cil-speedometer',
      },
      {
        _name: 'CSidebarNavItem',
        name: 'test',
        hidden: true,
        to: '/notifications/alerts',
        icon: 'cil-bell',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['test']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'test',
        to: '/project/Allproject',
        icon: 'cil-puzzle',
      },      
      {
        _name: 'CSidebarNavItem',
        name: 'test',
        to: '/project/Myproject',
        icon: 'cil-puzzle',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['test']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'test',
        to: '/team/allschedule',
        icon: 'cil-puzzle',
      },      
      {
        _name: 'CSidebarNavItem',
        name: 'test',
        to: '/team/alltask',
        icon: 'cil-puzzle',
      }
    ]
  }
]