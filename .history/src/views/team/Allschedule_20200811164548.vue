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
    axios.get("http://127.0.0.1:5000/student/detail?user_id="+localStorage.uid).then(response=>{
      var res = response.data;
      console.log(res);
    })
  }
}
</script>