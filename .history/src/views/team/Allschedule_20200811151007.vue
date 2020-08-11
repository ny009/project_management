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
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
            >
                        <td slot="join" slot-scope="{item}">
                <CButton size="sm" color="primary">{{item.join}}</CButton>
            </td>
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
      tableItems: [],
      tableFields: [{ key: 'name', label: 'Team Name'}, 
      { key: 'detail', label: 'Project'},
      { key: 'start_time', label: 'Number of team members'},
      { key: 'end_time',label: 'Team description'},
      { key: 'type',label: 'Action'}
      
      ]
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
      that.team_name = res.name;
      that.team_detail = res.detail;
      that.schedule = res.schedule
    })
  }
}
</script>