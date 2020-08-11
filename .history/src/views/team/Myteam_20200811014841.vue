<template>
  <div>
    <CRow>
    <CCol md="9">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> My Team </strong>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CTab title="Team" active>
                <br>
                <p>
                <strong>Team Name: </strong>Group 5<br>
                <strong>Team Members: </strong>5<br>
                <strong>Team Goal: </strong>This project focuses on providing features that are specific to students-mentor meetings, student meetings, project activity review and planning  (not limited to) : (i) managing regular project member meetings including explicit meeting agenda and moderation, (ii) management of project goals, milestones and progress, (iii) providing meeting summary notes including to do tasks and integration with calendar and task management services, (iii) managing regular reviews and feedbacks by mentors, partners and peers  forming a project community, (iv) providing regular encouragement of group members for progress, contributions and positive attitude, (v) showcasing student progress through video presentations, (vi) organizing scheduled consultations. <br>
                </p>
                <CButton color="primary">EDIT</CButton>
              </CTab>
              <CTab title="Team Project" active>
                <br>
                <p>
                <strong>Project Name: </strong>Project-based Learning Dojo<br>
                <strong>Project Start date: </strong>2020-05-01<br>
                <strong>Project End date: </strong>2020-08-01<br>
                <strong>Project Description: </strong>This project focuses on providing features that are specific to students-mentor meetings, student meetings, project activity review and planning  (not limited to) : (i) managing regular project member meetings including explicit meeting agenda and moderation, (ii) management of project goals, milestones and progress, (iii) providing meeting summary notes including to do tasks and integration with calendar and task management services, (iii) managing regular reviews and feedbacks by mentors, partners and peers  forming a project community, (iv) providing regular encouragement of group members for progress, contributions and positive attitude, (v) showcasing student progress through video presentations, (vi) organizing scheduled consultations. <br>
                </p>
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
           <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Milestone Progress </strong>
      </CCardHeader>
      <CCardBody>
      <div class="row mb-1">
      <div class="col-sm-2">
      <strong> Phase 1 Report: </strong>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="100"
          color="success"
          class="mb-2"
        />
        <strong> Due Date: </strong>2020-07-01 <strong>Status: </strong>finished <strong>Mark: </strong>80
        </div>
        </div>
        <hr>
      <div class="row mb-1">
      <div class="col-sm-2">
      <strong> Phase 2 presentation: </strong>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="50"
          color="info"
          class="mb-2"
        />
        <strong> Due Date: </strong>2020-07-30 <strong>Status: </strong>processing <strong>Mark: </strong>not yet marked
        </div>
        </div>
        <hr>
      <div class="row mb-1">
      <div class="col-sm-2">
      <strong> Peer Review: </strong>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="0"
          color="warning"
          class="mb-2"
        />
        <strong> Due Date: </strong>2020-08-03 <strong>Status: </strong>processing <strong>Mark: </strong>not yet marked
        </div>
        </div>
        <hr>
      <div class="row mb-1">
      <div class="col-sm-2">
      <strong>Phase 3: </strong>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="0"
          color="danger"
          class="mb-2"
        />
        <strong> Due Date: </strong>2020-08-20 <strong>Status: </strong>not yet started <strong>Mark: </strong>not yet marked
        </div>
        </div>
      </CCardBody>
    </CCard>
    <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Task list </strong>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CTab title="Phase 1" active>
                <br>
                <p>
                <strong>Task 1 </strong>Project Scoping.<br><br>
                </strong>Provide a brief description of the project summary, as you understand and in your own words. You are of course welcome to add any other extra information and details in order to formulate and support your response. <br>
                <CButton size="sm" color="success" class="float-right">finished</CButton><br><hr>
                <strong>Task 2 </strong>Requirements; Features Analysis.<br><br>
                </strong>Identify requirements, i.e. features of the project. Requirements analysis provides an important part of the software engineering process, and serves to formalise “what needs to be done ... input for design; schedule or costing ... but also an artefact for discussion...”. <br>
                <CButton size="sm" color="success" class="float-right">finished</CButton><br><hr>
                </p>
              </CTab>
              <CTab title="Phase 2" active>
                <br>
                <p>
                <strong>Task 1 </strong>System Design.<br><br>
                </strong> The first this phase will require you to design the main elements of the application, or service; this includes both back-end and/or front-end components. This part of the phase, thus serves to address “how” your project will be implemented. <br>
                <CButton size="sm" color="success" class="float-right">finished</CButton><br><hr>
                <strong>Task 2 </strong>Presentation.<br><br>
                </strong>Presentation shall be within time (15 for presentation + 5 minutes for questions). Each group is expected to provide a presentation of your project:<br>
                          • To summarise the main objective of the project<br>
                          • To summarise the significance and innovation of the project<br>
                          • To summarise and illustrate the main features of the implemented system<br>
                          • To summarise the system architecture (system components, their interactions,used technologies)<br>
                          • To summarise your experience undertaking your project: what you feel you have learnt during the course of your project?  What suggestions could you propose for improving this?<br>
                          • Expect to answer questions related to your project in general by your peers, mentors.<br>
                <br>                    
                <CButton size="sm" color="warning" class="float-right">not finished</CButton><br><hr>
                </p>
              </CTab>
                <CTab title="Peer Review" active>
                <br>
                <p>
                <strong>Task 1 </strong>Peer-Review of another Group Project.<br><CButton size="sm" color="warning" class="float-right">not finished</CButton><br><hr>
                </p>
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
                <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Team Work </strong>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CTab title="Plan Team Schedule" active>
              <br>
            <CForm :model = "schedule">
              <CInput
                description="Name."
                label="name"
                horizontal
                autocomplete="name"
                v-model="schedule.name"
              />
              <CInput
                label="Detail"
                description="Detail"
                horizontal
                v-model="schedule.detail"
              />
              <CInput
                label="Start Time"
                description="2020-7-2 12:00:00"
                horizontal
                v-model="schedule.start_time"
              />
              <CInput
                label="End Time"
                description="2020-7-2 12:00:00"
                horizontal
                v-model="schedule.end_time"
              />
              <CInput
                label="Type"
                description="meeting or consultation"
                horizontal
                v-model="schedule.type"
              />
            <CButton type="submit" size="sm" color="primary" @click="submitschedule()"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CForm>
              </CTab>
              <CTab title="Add Task" active>
              <br>
          <CForm :model="task">
              <CInput
                description="Task Name"
                label="Task Name"
                horizontal
                autocomplete="Name"
                v-model="task.type"
              />
              <CInput
                description="Task detail"
                label="Task detail"
                horizontal
                autocomplete="detail"
                v-model="task.detail"
              />
              <CInput
                label="Start Date"
                horizontal
                v-model="task.start_time"
              />
              <CInput
                label="End Date"
                horizontal
                v-model="task.end_time"
              />

              <CInput
                label="status"
                description="status"
                v-model="task.status"
                horizontal
              />
              <CInput
                label="Phase ID"
                description="Phase ID"
                v-model="task.phase_id"
                horizontal
              />
            <CButton type="submit" size="sm" color="primary" @click="schedule"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CForm>
              </CTab>
            </CTabs>
            </CCardBody>
            </CCard>
    </CCol>
      <CCol md="3">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Phase Due </strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem
                href="#"
                class="flex-column align-items-start"
                v-for="p in phase"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{p.name}}</h5>
                  
                </div>
                <small>2 days from now</small><br>
                <small>Post by: Morty Al-Banna</small><br>
                <small>Type: team</small><br>
                <small>Date: Thursday, 30th of July 2020 6-9PM</small>
                
                
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
                <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Schedule </strong>
          </CCardHeader>
          <CCardBody>
                <CListGroup>
                 <CListGroupItem
                href="#"
                class="flex-column align-items-start"
                v-for="s in schedule"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{s.name}} </h5>
                  
                </div>
                <small>{{s.detail}}</small><br>
                <small>Start Time: {{s.start_time}}</small><br>
                <small>End Time: {{s.start_time}}</small><br>
                <small>Type: {{s.type}}</small>
              </CListGroupItem>
                </CListGroup>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Team Members </strong>
          </CCardHeader>
          <CCardBody>
           <CDataTable
              class="mb-0 table-outline"
              hover
              :items="members"
              :fields="membertable"
              head-color="light"
              no-sorting
            >

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
  name: 'ListGroups',
  data () {
    return {
      team_name = '',
      team_detail = '',
      members: [],
      membertable: [
        { key: 'name', label: 'Name', _classes: 'text-center' },
        { key: 'email' }
      ],
      task:{
        name:'',
        detail:'',
        start_time:'',
        end_time:'',
        team_id:'',
        status:'',
        phase_id:''
      },
      schedule:{
        name:'',
        detail:'',
        start_time:'',
        end_time:'',
        team_id:'',
        type:''
      },
      team_tag = [],
      project_detail = {},
      phase = [],
      schedule = []
    }
  },
  methods:{
    submittask:function(){
      var self = this;
      axios.post("http://127.0.0.1:5000/task/add",{
        name:self.task.name,
        detail:self.task.detail,
        start_time:self.task.start_time,
        end_time:self.task.end_time,
        team_id:self.task.team_id,
        status:self.task.status,
        phase_id:self.task.phase_id
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('add task successfully');
        }else{
          alert('fail add task');
        }
      },function(error){

      })
    },
    submitschedule:function(){
      var self = this;
      axios.post("http://127.0.0.1:5000/schedule/add",{
        name:self.schedule.name,
        detail:self.schedule.detail,
        start_time:self.schedule.start_time,
        end_time:self.schedule.end_time,
        team_id:self.schedule.team_id,
        type:self.schedule.type
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('add schedule successfully');
        }else{
          alert('fail add schedule');
        }
      },function(error){

      })
    }
  },
  created(){
    var that = this;
    const team_id = this.$route.query.team_id;
    that.schedule.team_id = team_id;
    that.task.team_id = team_id;
    alert(team_id)
    axios.get("http://127.0.0.1:5000/team/detail?team_id="+team_id).then(response=>{
      var res = response.data;
      console.log(res);
      that.members = res.member;
      that.team_tag = res.tag;
      that.project_detail = res.project;
      that.phase = res.phase;
      that.team_tag = res.name;
      that.team_tag = res.tag;
      that.schedule = res.schedule
    })
  }
}
</script>
