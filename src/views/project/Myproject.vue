<template>
  <CRow>
      <CCol sm="6" lg="3" v-for="(p,index) in project_info">
      <a :href="getGoodsHref(index )" >
        <CWidgetProgress
          :header="p.name"
          :text="p.status" 
          :footer="p.end_time"
          color="gradient-success"
          inverse :value="70"
        />
        </a>
      </CCol>
  </CRow>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'project',
  data: function () {
    return {
      project_info: []
    }
  },
  created() {
      var that = this;
      axios.get("http://127.0.0.1:5000/project/my?user_id="+localStorage.uid).then(response => {
      var res = response.data;
      console.log(res);
      that.project_info = res;
    });
  },
  methods:{
    getGoodsHref:function(val){
      if(this.project_info[val].status == "No team"){
        return '/#/team/allteam?project_id='+this.project_info[val].id;
      } else{
        return '/#/team/myteam?project_id='+this.project_info[val].id;
      }
	    
	}
  }
}
</script>
