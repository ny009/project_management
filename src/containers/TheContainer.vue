<template>
  <div class="c-app">
    <template v-if="seen">
    <TheSidebar/>
    </template>
    <template v-else>
      <TheSidebar1/>
    </template>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter/>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
import TheSidebar1 from './TheSidebar1'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

export default {
  name: 'TheContainer',
  components: {
    TheSidebar,
    TheSidebar1,
    TheHeader,
    TheFooter
  },
  data(){
    return {
      seen : true
    }
  },
  methods:{
    change(){
      if(localStorage.role === 'mentor'){
        this.seen = false;
      }else{
        this.seen = true;
      }
      
    }
  },
  created(){
    this.change();
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
