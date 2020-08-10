<template>
  <CRow>
      <CCol sm="6" lg="3">
      <a href="/#/team/myteam" >
        <CWidgetProgress
          header="project management system"
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
export default {
  name: 'project',
  created() {
      var that = this;
      axios.get("http://127.0.0.1:5000/project/all"+localStorage.uid).then(response => {
      var res = response.data;
      console.log(res);
      that.project_info = res;
    });
  },
}
</script>
