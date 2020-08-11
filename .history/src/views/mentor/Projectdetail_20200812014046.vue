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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Forms',
  data () {
    return {
      collapse:false,
      project:{
        title:'',
        outline:'',
        mentor:'',
        start_date:'',
        end_date:''
      }
    }
  },
  methods: {
    submitproject:function(){
      axios.post("https://project-dojo.herokuapp.com/api/v2/project",{
        title:this.project.title,
        outline:this.project.outline,
        mentor:this.project.mentor,
        start_date:this.project.start_date,
        end_date:this.project.end_date
      },{emulateJSON:true})
      .then(function(response){
        console.log(response.data.email);
        alert('success');
      },function(error){
        console.log(error);
      })
    }
  }
}
</script>
