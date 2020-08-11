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
        name: 'Notifications',
        to: '/mentor/allannouncement',
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
        to: '/mentor/allmyproject',
        icon: 'cil-puzzle',
      },
    ]
  }
]