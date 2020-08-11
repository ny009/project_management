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
                <div>
                <strong>Project Name: </strong>{{project_detail.name}}<br>
                <strong>Course: </strong>{{project_detail.course}}<br>
                <strong>Term: </strong>{{project_detail.term}}<br>
                <strong>Project Start Date: </strong>{{project_detail.start_time}}<br>
                <strong>Project End Date: </strong>{{project_detail.end_time}}<br>
                <strong>Project Description: </strong>{{project_detail.detail}}<br>
                </div>
              </CCard>
            </CCollapse>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol col="12" md="4">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> Assign student </strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput placeholder="Student Email" label="Email" horizontal/>
              <CInput placeholder="Team ID" label="ID" horizontal/>
              <CButton type="submit" size="sm" color="primary" @click=""><CIcon name="cil-check-circle"/> Submit</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol col="12" md="8">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> Create Phase </strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput placeholder="Phase Name" label="Phase Name" horizontal/>
              <CInput type="date" label="Start Time" horizontal/>
              <CInput type="date" label="End Time" horizontal/>
              <CInput placeholder="Phase detail" label="Phase detail" horizontal/>
              <CButton type="submit" size="sm" color="primary" @click=""><CIcon name="cil-check-circle"/> Submit</CButton>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol col="12" md="4">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> No Team Student </strong>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              class="mb-0 table-outline"
              hover
              :items="noteamlist"
              :fields="noteamtable"
              head-color="light"
              no-sorting
            >
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol col="12" md="12">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/>
            <strong> All Team </strong>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              class="mb-0 table-outline"
              hover
              :items="teaminfo"
              :fields="teamtable"
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
  name: 'Forms',
  data () {
    return {
      project_id:'',
      collapse:true,
      project_detail:{
        name:'',
        course:'',
        term:'',
        start_time:'',
        end_time:'',
        detail:'',
      },
      teaminfo:{},
      teamtable: [{ key: 'name', label: 'Team Name'}, 
      { key: 'detail', label: 'Detail', _style:'min-width:200px'},
      { key: 'num_member', label: 'Number of team members'},
      { key: 'tag',label: 'Team'},
      { key: 'status', _style:'min-width:100px;' },
      
      { key: 'join',label: 'Action'},
      { 
        key: 'show_details', 
        label: '', 
        _style: 'width:1%', 
        sorter: false, 
        filter: false
      }
      
      ],
      noteamlist:{},
      noteamtable:[
        { key: 'name', label: 'Student Name'},
        { key: 'email', label: 'Student Email'},
      ]
    }
  },
  methods: {

  },
  created(){
    const id = this.$route.query.project_id;
    var that = this;
    that.project_id = id;
    axios.get("http://127.0.0.1:5000/team/noteam?project_id="+id).then(response=>{
      var res = response.data;
      that.noteamlist = res;
      console.log(res);
    })
  }
}
</script>
