<template>
  <div>
    <CRow>
    <CCol col="12" md="12">
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
                <CInput placeholder="Title" label="Title" horizontal v-model="newproject.name"/>
                <CTextarea placeholder="Detail" label="Detail" horizontal v-model="newproject.detail"/>
                <CSelect placeholder="Term" label="Term" horizontal :options="options" @change="changeTerm($event)"/>
                <CInput placeholder="Course" label="Course" horizontal v-model="newproject.course"/>
                <CInput type="date"  label="Start_time" horizontal v-model="newproject.start_time"/>
                <CInput type="date"  label="End_time" horizontal v-model="newproject.end_time"/>
                <CButton type="submit" size="sm" color="primary" @click="createproject()"><CIcon name="cil-check-circle"/> Submit</CButton>
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
      options:[{value:"20T1", label:"20T1"}, {value:"20T2", label:"20T2"}, {value:"20T3", label:"20T3"}],
      project_info:[],
      newproject:{
        name:'',
        detail:'',
        term:'',
        course:'',
        start_time:'',
        end_time:'',
      }
    }
  },
  created() {
      var that = this;
      //alert(localStorage.uid);
      axios.get("http://127.0.0.1:5000/project/mentor?user_id="+localStorage.uid).then(response => {
        var res = response.data;
        console.log(res);
        that.project_info = res;
    });
  },
  methods:{
    changeTerm(event) {
      this.newproject.term = event.target.value; 
      console.log("choose ",this.newproject.term)
    },
    createproject:function () {
      var self = this;
      axios.post("http://127.0.0.1:5000/project/create",{
        name:self.newproject.name,
        detail:self.newproject.detail,
        term:self.newproject.term,
        course:self.newproject.course,
        mentor_id:localStorage.uid,
        start_time:self.newproject.start_time,
        end_time:self.newproject.end_time
        
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
    },
  }
}
</script>