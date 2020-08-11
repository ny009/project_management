<template>
  <div>
    <CRow>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Create A Project </strong>
          <div class="card-header-actions">
            <CButton @click="collapse = !collapse" color="primary" class="mb-2" size="sm">
              Open
            </CButton>
          </div>
        </CCardHeader>
        <CCardBody>

          <CCollapse :show="collapse" :duration="400">
            <CCard body-wrapper>
              <CForm>
                <CInput placeholder="Title" label="Title" horizontal/>
                <CInput placeholder="Detail" label="Detail" horizontal/>
                <CInput placeholder="Term" label="Term" horizontal/>
                <CInput placeholder="Course" label="Course" horizontal/>
                <CInput type="date"  label="Start_time" horizontal/>
                <CInput type="date"  label="End_time" horizontal/>
                <CButton type="submit" size="sm" color="primary" @click=""><CIcon name="cil-check-circle"/> Submit</CButton>
              </CForm>
            </CCard>
          </CCollapse>
        </CCardBody>
      </CCard>
    </CCol>
    </CRow>
    <CRow  v-for="p in project_info">
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <h3>{{p.name}}</h3>
            <h6>{{p.term}},{{p.course}}</h6>
          </CCardHeader>
          <CCardBody>
            {{p.detail}}
          </CCardBody>
          <CCardFooter>
            <strong>Start Date:</strong> {{p.start_time}}
            <br>
            <strong>End Date:</strong> {{p.end_time}}
            <div style="float:right">
            <a href="/#/team/allteam" >
                <CButton color="primary" size="sm">Check</CButton>
            </a>
            </div>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
        
 
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Cards',
  data: function () {
    return {
      collapse: false,
      project_info:[]
    }
  },
  created() {
      var that = this;
      axios.get("http://127.0.0.1:5000/project/all").then(response => {
      var res = response.data;
      console.log(res);
      that.project_info = res;
    });
  },
}
</script>
