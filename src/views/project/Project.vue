<template>
  <CRow>
      <CCol sm="6" lg="3">
        <CWidgetProgress
          header="COMP9323"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-success"
          inverse :value="25"
        />
      </CCol>
            <CCol sm="6" lg="3">
        <CWidgetProgress
          header="COMP9323"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-info"
          inverse :value="25"
        />
      </CCol>
            <CCol sm="6" lg="3">
        <CWidgetProgress
          header="COMP9323"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-danger"
          inverse :value="25"
        />
      </CCol>
            <CCol sm="6" lg="3">
        <CWidgetProgress
          header="COMP9323"
          text="Software as a Service Project"
          footer="Last update: 20200719"
          color="gradient-success"
          inverse :value="25"
        />
      </CCol>
  </CRow>
  
</template>

<script>
export default {
  name: 'project'
}
</script>
