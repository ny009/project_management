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
  name: 'project'
}
</script>
