<template>
  <div>
    <CRow>
      <CCol col="12" md="8">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> Project Detail </strong>
            <div class="card-header-actions">
              <CButton @click="collapse = !collapse" color="primary" class="mb-2" size="sm">
                Open
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CCollapse :show="collapse" :duration="400">
              <CCard body-wrapper>
                <div>
                <strong>Project Name: </strong>{{project_detail.name}}<br>
                <strong>Course: </strong>{{project_detail.course}}<br>
                <strong>Term: </strong>{{project_detail.term}}<br>
                <strong>Project Start Date: </strong>{{project_detail.start_time}}<br>
                <strong>Project End Date: </strong>{{project_detail.end_time}}<br>
                <strong>Project Description: </strong>{{project_detail.detail}}<br>
                </div>
              </CCard>
            </CCollapse>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol col="12" md="4">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> Assign student </strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput placeholder="Student Email" label="Email" horizontal/>
              <CInput placeholder="Team ID" label="ID" horizontal/>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Forms',
  data () {
    return {
      collapse:false,
      project_detail:{
        name:'',
        course:'',
        term:'',
        start_time:'',
        end_time:'',
        detail:'',
      }
    }
  },
  methods: {

  }
}
</script>
