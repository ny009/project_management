<template>
  <CRow>
      <CCol sm="6" lg="3" v-for="(p,index) in project_info">
      <a :href="getGoodsHref(index )" >
        <CWidgetProgress
          :header="p.name"
          :text="p.info" 
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
      for(var i = 0;i < response.data.length;i++){
        if(that.project_info[i].status == 'No team'){
          that.project_info[i]['info'] = "Not yet joined the team";
        } else{
          that.project_info[i]['info'] = "Manage Project";
        }
      }
    });
  },
  methods:{
    getGoodsHref:function(val){
      if(this.project_info[val].status == "No team"){
        return '/#/team/allteam?project_id='+this.project_info[val].id;
      } else{
        return '/#/team/myteam?team_id='+this.project_info[val].status.team_id;
      }
	  }
  }
}
</script>
