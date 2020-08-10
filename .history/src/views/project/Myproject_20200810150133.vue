<template>
  <CRow>
      <CCol sm="6" lg="3" v-for="p in project_info">
      <a href="/#/team/myteam" >
        <CWidgetProgress
          header="{project management system}"+{{p.name}}
          text="COMP9323"
          footer="End Date: 2020-09-10"
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
  created() {
      var that = this;
      axios.get("http://127.0.0.1:5000/project/all?id="+localStorage.uid).then(response => {
      var res = response.data;
      console.log(res);
      that.project_info = res;
    });
  },
}
</script>
