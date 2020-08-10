<template>

  <CCard>
    <CCardHeader>
      <slot name="header">
        <CIcon name="cil-grid"/> <strong>Team</strong>
      </slot>
    </CCardHeader>
    <CCardBody>
      <div>
        <CCard>
          <CCardHeader>
            My team
            <div class="card-header-actions">
              <a 
                href="/#/team/myteam" 
                class="card-header-action" 
              >
                <CButton size="sm" color="primary">View My Team</CButton>
              </a>
              <a 
                href="/#/team/createteam" 
                class="card-header-action" 
              >
                <CButton size="sm" color="primary">Create A New Team</CButton>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
      </div>
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
      tableItems: [
        {
          team_name: 'Team1',
          project: 'Project-based Learning Dojo',
          num_team: '5',
          description: 'Work hard',
          join:'join'
        },
        {
          team_name: 'Team2',
          project: 'Project-based Learning Dojo',
          num_team: '5',
          description: 'Work hard',
          join:'join'
        },
        {
          team_name: 'Team3',
          project: 'Project-based Learning Dojo',
          num_team: '5',
          description: 'Work hard',
          join:'join'
        },
        {
          team_name: 'Team4',
          project: 'Project-based Learning Dojo',
          num_team: '5',
          description: 'Work hard',
          join:'join'
        }
      ],
      tableFields: [{ key: 'team_name', label: 'Team Name'}, 
      { key: 'project', label: 'Project'},
      { key: 'num_team', label: 'Number of team members'},
      { key: 'description',label: 'Team description'},
      { key: 'join',label: 'Action'}
      
      ]
    }
  },
  created(){
    var that = this;
    const id = this.$route.query.project_id;
    //alert(id);
    axios.get("http://34.89.247.9:5000/team/all?id="+id).then(response => {
      var res = response.data;
      console.log(res);
    })
  }
}
</script>