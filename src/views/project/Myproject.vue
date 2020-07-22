<template>
  <CRow>
      <CCol sm="6" lg="3">
      <a href="/" >
        <CWidgetProgress
          header="COMP9323"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-success"
          inverse :value="25"
        />
        </a>
      </CCol>
            <CCol sm="6" lg="3">
            <a href="/" >
        <CWidgetProgress
          header="COMP9323"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-info"
          inverse :value="25"
        />
        </a>
      </CCol>
      
            <CCol sm="6" lg="3">
        <a href="/" >    
        <CWidgetProgress
          header="COMP9323"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-danger"
          inverse :value="25"
        />
        </a>
      </CCol>
            <CCol sm="6" lg="3">
            <a href="/" >
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
