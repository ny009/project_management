
<template>
  <CRow>
    <CCol col="12" >
            <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Post Announcement
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CInput placeholder="Title" label="Title" horizontal v-model="notification.name" />
            <CTextarea placeholder="Detail" label="Detail" horizontal v-model="notification.detail" />
            <CSelect
                label="Project"
                description="choose project"
                horizontal
                :options="options"
                @change="changeProject($event)"
              />
            <CButton type="submit" size="sm" color="primary" @click="createnotification()"><CIcon name="cil-check-circle"/> Submit</CButton>
          </CForm>
        </CCardBody>
      </CCard>

    </CCol>
    <template v-for="n in notification">
    <CCol col="12">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> {{n.author}} <small>{{n.time}}</small>
        </CCardHeader>
        <CCardBody>
            <CAlert show color="success">
              <h4 class="alert-heading">{{n.name}}</h4>
              <p><strong>Project Name: </strong>{{n.project_name}}</p>
              <p><strong>Notification Detail:</strong></p>
              <p>{{n.detail}}</p>
            </CAlert>
        </CCardBody>
      </CCard>
    </CCol>
    </template>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Alerts',
  data () {
    return {
      options:[],
      notification:[],
      project:[],
      notification:{
        name:'',
        detail:"",
        project_id:"",
        user_id:"",
      }
    }
  },
  methods: {
    changeProject(event) {
      this.notification.project_id = event.target.value; 
      console.log("choose ",this.notification.project_id)
    },
    createnotification:function () {
      var self = this;
      axios.post("http://127.0.0.1:5000/notification/create",{
        name:self.notification.name,
        detail:self.notification.detail,
        project_id:self.notification.project_id,
        user_id:localStorage.uid
        
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('SUCCESS');
          location.reload();
        }else{
          alert('FAIL');
        }
      },function(error){
          alert('FAIL');
      })
      
    }
  },
  created(){
    var that = this;
    this.notification.user_id = localStorage.uid;
    axios.get("http://127.0.0.1:5000/notification/mentor?user_id="+localStorage.uid).then(response=>{
      var res = response.data;
      console.log(res);
      that.notification = res;
      //alert(res.length)
    })
    axios.get("http://127.0.0.1:5000/project/mentor?user_id="+localStorage.uid).then(response=>{
      var res = response.data;
      console.log("project");
      console.log(res);
      that.project = res;
      for(var i = 0; i < res.length; i++){
        //console.log(that.project[i].name);
        that.options.push({
          value:res[i].id,
          label:res[i].name
        })
      }
      //alert(res.length)
    })
  }
}
</script>
