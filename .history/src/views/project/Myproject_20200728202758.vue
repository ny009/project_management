<template>
  <CRow>
      <CCol sm="6" lg="3">
      <a href="/#/team/myteam" >
        <CWidgetProgress
          header="Student Peer, Mentor and Professional Network"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-success"
          inverse :value="25"
        />
        </a>
      </CCol>
            <CCol sm="6" lg="3">
            <a href="/#/team/myteam" >
        <CWidgetProgress
          header="Common Remote Learning and Teaching Services Foundry"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-info"
          inverse :value="25"
        />
        </a>
      </CCol>
      
            <CCol sm="6" lg="3">
        <a href="/#/team/myteam" >    
        <CWidgetProgress
          header=" Student Wellbeing and Rights Online Service "
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-danger"
          inverse :value="25"
        />
        </a>
      </CCol>
            <CCol sm="6" lg="3">
            <a href="/#/team/myteam" >
        <CWidgetProgress
          header="COMP9323"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-success"
          inverse :value="25"
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
