<template>
  <div>
    <CRow>
    <CCol>
        <CCard>
            <CCardHeader>
            <strong> Project </strong>
            </CCardHeader>
            <CCardBody>
                <a href="/#/project/Createproject"><CButton color="primary" size="sm">New Project</CButton></a>
            </CCardBody>
        </CCard>
        </CCol>
    </CRow>
    <CRow  v-for="p in project_info">
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <h4>Course: COMP9323</h4>
            <h6>{{p.title}}</h6>
          </CCardHeader>
          <CCardBody>
            {{p.outline}}
          </CCardBody>
          <CCardFooter>
            <strong>Start Date:</strong> {{p.start_date}}
            <br>
            <strong>End Date:</strong> {{p.end_date}}
            <div style="float:right">
            <a href="/#/team/allteam" >
                <CButton color="primary" size="sm">Enroll</CButton>
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
      show: true,
      isCollapsed: true,
      loremIpsum: 'Project-based learning (e.g., programming projects, design projects, capstone projects) is common in education. This includes promoting students’ interaction with “real-life” projects and professional communities through support tools (e.g., questions and answers platforms such as Stack Overflow programming community, open source projects involving professionals and volunteers). In general, students rely on instructors, peers and mentors for feedbacks on their learning projects. While there is plethora of tools (e.g., task management and collaboration platforms like Trello, Asana, Jira and other) to support learners with task management, these tools are not designed with student projects in mind. Especially in a situation where remote work is a reality and brings its own challenges, it is important to provide appropriate support for project-based learning given that project members are used to frequent face to face meetings to handle project matters. ',
      projectname:'Project-based Learning Dojo ',
      project_info: ""
    }
  },
  created() {
      var that = this;
      axios.get("https://project-dojo.herokuapp.com/api/v2/project").then(response => {
      var res = response.data;
      console.log(res);
      that.project_info = res;
    });
  },
}
</script>
