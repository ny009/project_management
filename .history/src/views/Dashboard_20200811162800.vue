<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Recent Notification</h4>
            <div class="small text-muted">20200719</div>
          </CCol>
          <CCol sm="7" class="d-none d-md-block">
            <a href="/#/notifications/createannouncement">
            <CButton color="primary" class="float-right">
              New Notification
            </CButton>
            </a>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CRow class="text-center">
            <CAlert show color="success">
              <h4 class="alert-heading">Guest Lecture</h4>
              <p align="left">
              Dear All,<br>
This week we are privileged to have Dr. Halvard Skogsrud from Google to talk about Go Programming Language.<br>
Time: Thursday the 16th of July @6:00PM<br>
Platform: Microsoft Teams<br>
Talk Summary: The Go programming language was created at Google and revealed to the public in October 2009. Its design choices are considered controversial by many, but it has become a popular choice for open source projects. It is neither object-oriented nor functional, but contains elements of both, as well as an approach to concurrency that sets it apart from most other languages. This talk will give a whirlwind tour of Go, including its design principles and features.<br>
BIO: Halvard Skogsrud is a Solutions Architect at Google working on Google Cloud. He has more than ten years experience as a software engineer and consultant, and he has a PhD from The University of New South Wales, Australia.
              </p>
            </CAlert>
        </CRow>
      </CCardFooter>
    </CCard>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            Course &amp; Project
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="info">
                      <small class="text-muted">Processing</small><br>
                      <strong class="h4">1</strong>
                    </CCallout>
                  </CCol>
                </CRow>

              </CCol>
            </CRow>
           <CDataTable
              class="mb-0 table-outline"
              hover
              :items="team_info"
              :fields="team_info_table"
              head-color="light"
              no-sorting
            >
              <td slot="process" slot-scope="{item}">
                <CProgress
                  class="progress-xs"
                  :value=item.team_info.finished_phase_num
                  :color="color((team_info.finished_phase_num/team_info.all_phase_num)*100)"
                  show-value
                  style="height:20px;"
                />
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Dashboard',
  data () {
    return {
      team_info: [],
      team_info_table: [
        { key: 'name' },
        { key: 'num_member' },
        { key: 'project_name', _classes: 'text-center' },
        { key: 'course', label: 'course', _classes: 'text-center' },
        { key: 'all_phase_num' },
        { key: 'finished_phase_num' },
      ]
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  },
  created(){
    var that = this;
    axios.get("http://127.0.0.1:5000/team/my?user_id="+localStorage.uid).then(response=>{
      var res = response.data;
      console.log(res);
      that.team_info = res;
    })
  }
}
</script>


