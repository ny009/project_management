<template>
  <CSidebar 
    fixed 
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/">
      <CIcon 
        class="c-sidebar-brand-full" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 556 134"
      />
      <CIcon 
        class="c-sidebar-brand-minimized" 
        name="logo" 
        size="custom-size" 
        :height="35" 
        viewBox="0 0 110 134"
      />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav"/>
    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'

export default {
  name: 'TheSidebar',
  data(){
    return {
      routes: [
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
        name: 'All project',
        to: '/project/Allproject',
        icon: 'cil-puzzle',
      },      
      {
        _name: 'CSidebarNavItem',
        name: 'My project',
        to: '/project/Myproject',
        icon: 'cil-puzzle',
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['My Time']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'My Schedule',
        to: '/team/allschedule',
        icon: 'cil-puzzle',
      },      
      {
        _name: 'CSidebarNavItem',
        name: 'My Task',
        to: '/team/alltask',
        icon: 'cil-puzzle',
      }
    ]
  }
]
    }
  },
  computed: {
    show () {
      return this.$store.state.sidebarShow 
    },
    minimize () {
      return this.$store.state.sidebarMinimize 
    }
  },
  methods:{
    getLevel(){
      const level = '1';
      if(level === '1'){
        this.routes.foreach(function(value){
          if(value.name == "Notifications"){
            value.hidden = true;
          }
        })
      }
    }
  },
  created(){
    this.getLevel();
  }
}
</script>
