<template>

  <CCard>
    <CCardHeader>
      <slot name="header">
        <CIcon name="cil-grid"/><strong>Schedule</strong>
      </slot>
    </CCardHeader>
    <CCardBody>
      <CDataTable
        class="mb-0 table-outline"
        hover
        :items="scheduleitem"
        :fields="scheduletable"
        head-color="light"
        no-sorting
      >
      </CDataTable>
    </CCardBody>
  </CCard>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'ListGroups',
  data () {
    return {
      scheduleitem: [],
      taskitem:[],
      scheduletable:[
        { key: 'team', label: 'Team Name'}, 
        { key: 'name', label: 'Schedule Name'}, 
        { key: 'detail', label: 'Detail'}, 
        { key: 'start_time', label: 'Start Time'}, 
        { key: 'end_time', label: 'End Time'}, 
        { key: 'status', label: 'Status'}, 

      ],
      tasktable:[
        { key: 'team', label: 'Team Name'}, 
        { key: 'name', label: 'Task Name'}, 
        { key: 'detail', label: 'Detail'}, 
        { key: 'start_time', label: 'Start Time'}, 
        { key: 'end_time', label: 'End Time'}, 
        { key: 'type', label: 'Type'}, 
      ],

    }
  },
  created(){
    var that = this;
    axios.get("http://127.0.0.1:5000/student/detail?user_id="+localStorage.uid).then(response=>{
      var res = response.data;
      console.log(res);
      that.scheduleitem = res.schedule;
      that.taskitem = res.task;
    })
  }
}
</script>