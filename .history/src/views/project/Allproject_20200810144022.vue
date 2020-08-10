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
      show: true,
      isCollapsed: true,
      loremIpsum: 'Project-based learning (e.g., programming projects, design projects, capstone projects) is common in education. This includes promoting students’ interaction with “real-life” projects and professional communities through support tools (e.g., questions and answers platforms such as Stack Overflow programming community, open source projects involving professionals and volunteers). In general, students rely on instructors, peers and mentors for feedbacks on their learning projects. While there is plethora of tools (e.g., task management and collaboration platforms like Trello, Asana, Jira and other) to support learners with task management, these tools are not designed with student projects in mind. Especially in a situation where remote work is a reality and brings its own challenges, it is important to provide appropriate support for project-based learning given that project members are used to frequent face to face meetings to handle project matters. ',
      projectname:'Project-based Learning Dojo ',
      project_info: ""
    }
  },
  methods:{
    enrollproject:function(project_id){
      alert(project_id);
      /*
      axios.post('http://',{
        user_id:aa,
        project_id:aa
      },{emulateJSON:true})
      .then(function(response){
          alert('fail');
      },function(error){
        alert('fail');
      }
      
      )*/
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
