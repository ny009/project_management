<template>
  <CRow>
      <CCol sm="6" lg="3">
      <a href="/#/team/myteam" >
        <CWidgetProgress
          header="Student Peer, Mentor and Professional Network"
          text="End Date: 2020-09-10"
          footer="Last update: 2020-06-01"
          color="gradient-success"
          inverse :value="25"
        />
        </a>
      </CCol>
            <CCol sm="6" lg="3">
            <a href="/#/team/myteam" >
        <CWidgetProgress
          header="Common Remote Learning and Teaching Services Foundry"
          text="End Date: 2020-10-11"
          footer="Last update: 2020-07-01"
          color="gradient-info"
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
