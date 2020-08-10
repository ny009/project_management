<template>
  <div>
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
                <CButton :color="getBadge(p.status)" size="sm" @click="enrollproject(p.id)">{{p.status}}</CButton>
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
      project_info: ""
    }
  },
  created() {
      var that = this;
      axios.get("http://127.0.0.1:5000/project/all?user_id="+localStorage.uid).then(response => {
      var res = response.data;
      console.log(res);
      that.project_info = res;
    });
  },
  methods:{
    enrollproject:function(project_id){
      //alert(project_id);
      var self = this;
      axios.post('http://127.0.0.1:5000/project/enroll',{
        user_id: localStorage.uid,
        project_id: project_id
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('enroll success! You can join a team now.');
          self.$router.push('../team/Allteam?project_id='+project_id);
        }else{
          alert("You have already enrolled!\n If you want to join a team.\n Please go to My project.");
          //self.$router.push('../team/Allteam?project_id='+project_id);
        }
          
      },function(error){
        alert('fail');
        })
    },
    getBadge (status) {
      switch (status) {
        case 'Enroll': return 'success'
        case 'Already Enrolled': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
  },
  
  
}
</script>
