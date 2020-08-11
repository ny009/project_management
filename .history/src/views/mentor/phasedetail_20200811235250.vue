<template>
  <div>
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            <strong>Create A Project</strong>
          </CCardHeader>
          <CCardBody>
            <CForm :model = "project">
              <CInput
                description="Please name your project."
                label="Project Title"
                horizontal
                autocomplete="projectname"
                v-model="project.title"
              />
              <CInput
                label="Start Date"
                type="date"
                horizontal
                v-model="project.start_date"
              />
              <CInput
                label="End Date"
                type="date"
                v-model="project.end_date"
                horizontal
              />
              <CTextarea
                label="Outline"
                placeholder="Project outline"
                v-model="project.outline"
                horizontal
                rows="9"
              />
              <CInput
                description="Please enter your ID."
                label="Mentor ID"
                v-model="project.mentor"
                horizontal
                autocomplete="projectname"
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary" @click="submitproject()"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
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
