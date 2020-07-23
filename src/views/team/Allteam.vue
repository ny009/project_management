<template>
  <CCard>
    <CCardHeader>
      <slot name="header">
        <CIcon name="cil-grid"/> {{caption}}
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
            </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>
export default {
  name: 'ListGroups',
  data () {
    return {
      tableItems: [
        {
          team_name: 'Team1',
          project: 'Project-based Learning Dojo',
          num_team: '5',
          description: 'Work hard'
        },
        {
          team_name: 'Team2',
          project: 'Project-based Learning Dojo',
          num_team: '5',
          description: 'Work hard'
        },
        {
          team_name: 'Team3',
          project: 'Project-based Learning Dojo',
          num_team: '5',
          description: 'Work hard'
        },
        {
          team_name: 'Team4',
          project: 'Project-based Learning Dojo',
          num_team: '5',
          description: 'Work hard'
        }
      ],
      tableFields: [{ key: 'team_name', label: 'Team Name'}, 
      { key: 'project', label: 'Project'},
      { key: 'num_team', label: 'Number of team members'},
      { key: 'description',label: 'Team description'}]
    }
  }
}
</script>