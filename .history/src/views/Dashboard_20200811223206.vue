<template>
  <div>
    <template>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Recent Notification</h4>

          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CRow class="text-center">
          <CCol md="12">
            <CAlert show color="success">
              <h4 class="alert-heading">{{notification.name}}</h4>
              <p align="left">
              {{notification.detail}}
              </p>            
              <div class="" align="left">
              <strong>Post Time: </strong>{{notification.time}}<br>
              <strong>Author: </strong>{{notification.author}}<br>
              <strong>Project: </strong>{{notification.project_name}}<br>
            </div>
            </CAlert>
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
    </template>
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
                      <strong class="h4">{{project_num}}</strong>
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
              <td slot="Process" slot-scope="{item}">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{item.progress_rate}}%</strong>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.progress_rate"
                  :color="color(item.progress_rate)"
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
      notification:{},
      project_num:0,
      team_info: [],
      team_info_table: [
        { key: 'name' },
        { key: 'num_member' , label: 'Member Number'},
        { key: 'project_name', label: 'Project Name', _classes: 'text-center' },
        { key: 'course', label: 'Course', _classes: 'text-center' },
        { key: 'all_phase_num', label: 'All Phase' },
        { key: 'finished_phase_num', label: 'Finished Phase' },
        { key: 'Process', label: 'Process' },
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
      if(res.status === "FAIL! No team joined"){
        console.log(11111111);
        self.$router.push('../project/Allproject');
      }
      that.team_info = res;
      //alert(res.length)
      that.project_num = res.length;
      
    });
    axios.get("http://127.0.0.1:5000/notification/student?user_id="+localStorage.uid).then(response=>{
      var res = response.data;
      console.log(res);
      var tem_notification = res.pop();
      that.notification = tem_notification;
      //alert(res.length)
      console.log(that.notification);
    });
  }
}
</script>


