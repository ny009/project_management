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
                <CButton color="primary" size="sm" @click="enrollproject(p.id)">Enroll</CButton>
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
          alert('enroll success');
          self.$router.push('../team/Allteam?project_id='+project_id);
        }else{
          alert(response.data.status);
          self.$router.push('../team/Allteam?project_id='+project_id);
        }
          
      },function(error){
        alert('fail');
      }
      
      )
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
