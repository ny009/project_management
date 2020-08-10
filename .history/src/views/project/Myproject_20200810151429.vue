<template>
  <CRow>
      <CCol sm="6" lg="3" v-for="p in project_info">
      <a href="/#/team/myteam" >
        <CWidgetProgress
          :header="p.name"
          :text="p.course"
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
      project_info: ""
    }
  },
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
