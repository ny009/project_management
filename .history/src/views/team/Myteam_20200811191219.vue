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
                <div>
                <strong>Team Name: </strong>{{team_name}}<br>
                <strong>Team detail: </strong>{{team_detail}}<br>
                 <strong>Team Tag:</strong>
                <template v-for="tag in team_tag">
                 {{tag}}
                </template>

                </div>
                
              </CTab>
              <CTab title="Team Project" active>
                <br>
                <div>
                <strong>Project Name: </strong>{{project_detail.name}}<br>
                <strong>Course: </strong>{{project_detail.course}}<br>
                <strong>Term: </strong>{{project_detail.term}}<br>
                <strong>Project Start Date: </strong>{{project_detail.start_time}}<br>
                <strong>Project Start Date: </strong>{{project_detail.start_time}}<br>
                <strong>Project End Date: </strong>{{project_detail.end_time}}<br>
                <strong>Project Description: </strong>{{project_detail.detail}}<br>
                </div>
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
      <div class="row mb-1" v-for="p in phase">
      <div class="col-sm-2">
      <strong>{{p.name}}</strong>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value=(p.finished_task_num/p.all_task_num)*100
          color="success"
          class="mb-2"
        />
        <strong> Due Date: </strong>{{p.end_time}} <strong>Status: </strong>{{p.status}} <strong>Phase ID: </strong>{{p.id}}
        </div>
        <hr>
        </div>
        
      </CCardBody>
    </CCard>
    <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Task list </strong>
          </CCardHeader>
          <CCardBody>
            <CTabs >
              <template v-for="p in phase">
              <CTab :title="p.name" active>
                <br>
                <div v-for="t in p.task">
                <strong>{{t.name}} </strong><br><br>
                {{t.detail}}<br>
                <strong>Start Time: </strong>{{t.start_time}}<br>
                <strong>End Time: </strong>{{t.end_time}}<br>
                <strong>Status: </strong>{{t.status}}<br>
                <CButton size="sm" :color="getBadge(t.operation)" class="float-right" @click="finishtask(t.id,t.operation)">{{t.operation}}</CButton><br>
                
                <hr>
                </div>
              </CTab>
              </template>
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
                v-model="task.name"
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
                description="2020-7-2 12:00:00"
                v-model="task.start_time"
              />
              <CInput
                label="End Date"
                horizontal
                description="2020-7-2 12:00:00"
                v-model="task.end_time"
              />
              
              <CSelect
                label="Phase"
                description="Phase"
                horizontal
                :options="options"
                @change="changeType($event)"
              />
            <CButton type="submit" size="sm" color="primary" @click="submittask()"><CIcon name="cil-check-circle"/> Submit</CButton>
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
            <CIcon name="cil-justify-center"/><strong>Add Tag </strong>
          </CCardHeader>
          <CCardBody>
                <div>
                  <CForm :model = "newtag">
                    <CInput v-model="newtag.tag" label="Tag"/>
                    <CButton color="primary" size="sm" @click="addtag()">ADD</CButton>
                  </CForm>
                </div>
          </CCardBody>
        </CCard>
          <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong>Invite Team Members </strong>
          </CCardHeader>
          <CCardBody>
            <CForm :model = "inviteemail">
              <CInput label="Email" v-model="inviteemail.email"/>
               <CButton size="sm" color="primary" @click="invite()">INVITE</CButton>
            </CForm>
          </CCardBody>
        </CCard>
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
                <small>Start Time:</small><br>
                <small>{{p.start_time}}</small><br>
                <small>End Time:</small><br>
                <small>{{p.end_time}}</small><br>
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
                <small>Start Time:<br> {{s.start_time}}</small><br>
                <small>End Time:<br> {{s.start_time}}</small><br>
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
      inviteemail:{
        team_id:'',
        email:''
      },
      options:[],
      team_name : '',
      newtag:{
        tag:''
      },
      team_detail : '',
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
        status:'not finished',
        phase_id:'',
        phase:'',
        operation:''    
      },
      schedule:{
        name:'',
        detail:'',
        start_time:'',
        end_time:'',
        team_id:'',
        type:''
      },
      team_tag : [],
      project_detail : {},
      phase : [],
      schedule : []
    }
  },
  methods:{
    getBadge (status) {
      switch (status) {
        case 'Mark complete': return 'success'
        case 'Completed': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    changeType(event) {
      this.task.phase_id = event.target.value; 
      this.task.phase = event.target.value; 
      console.log("the task is belong to ",this.task.phase)
    },
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
          location.reload();
        }else{
          alert('fail add task');
        }
      },function(error){
          alert('fail add task');
      })
    },
    submitschedule:function(){
      var self = this;
      axios.post("http://127.0.0.1:5000/schedule/add",{
        name:self.schedule.name,
        detail:self.schedule.detail,
        start_time:self.schedule.start_time,
        end_time:self.schedule.end_time,
        team_id:self.task.team_id,
        type:self.schedule.type
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('add schedule successfully');
          location.reload();
        }else{
          alert('fail add schedule');
        }
      },function(error){
          alert('fail add schedule');
      })
    },
    finishtask:function(id,operation){
      if(operation == "Completed"){
        alert("This task already completed!");
        return 0;
      }
      var self = this;
      axios.post("http://127.0.0.1:5000/task/finish",{
        task_id:id
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('Set successfully');
          location.reload();
        }else{
          alert('Fail Set');
        }
      },function(error){
          alert('fail Set');
      })
    },
    addtag:function(){
      var self = this;
      axios.post("http://127.0.0.1:5000/team/tag",{
        team_id:self.task.team_id,
        tag:self.newtag.tag
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('add successfully');
          location.reload();
        }else{
          alert('Fail add');
        }
      },function(error){
          alert('fail add');
      })
    },
    invite:function(){
      var self = this;
      axios.post("http://127.0.0.1:5000/team/invite",{
        team_id:self.task.team_id,
        email:self.inviteemail.email
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('invite successfully');
          location.reload();
        }else{
          alert(response.data.status);
        }
      },function(error){
          alert('fail add');
      })
    }
  },
  created(){
    var that = this;
    const team_id = this.$route.query.team_id;
    that.schedule.team_id = team_id;
    that.task.team_id = team_id;
    that.inviteemail.team_id = team_id;
    //alert(team_id)
    axios.get("http://127.0.0.1:5000/team/detail?team_id="+team_id).then(response=>{
      var res = response.data;
      console.log(res);
      that.members = res.member;
      that.team_tag = res.tag;
      that.project_detail = res.project;
      that.phase = res.phase;
      for(var i = 0; i < res.phase_all_num; i++){
        console.log(i);
        that.options.push({
          value:res.phase[i].id,
          label:res.phase[i].name
        })
      }
      that.team_name = res.name;
      that.team_detail = res.detail;
      that.schedule = res.schedule
    })
  }
}
</script>
