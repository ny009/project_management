<template>
  <div>
    <CRow>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Bootstrap Collapse </strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/collapse" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
          <CButton @click="collapse = !collapse" color="primary" class="mb-2">
            Toggle Collapse
          </CButton>
          <CCollapse :show="collapse" :duration="400">
            <CCard body-wrapper>
              <CCardText>Collapse contents Here</CCardText>
              <CButton  
                @click="innerCollapse = !innerCollapse" 
                size="sm" 
                color="secondary"
              >
                Toggle Inner Collapse
              </CButton>
              <CCollapse :show="innerCollapse" class="mt-2">
                <CCard body-wrapper>Hello!</CCard>
              </CCollapse>
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
    },
    m
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
