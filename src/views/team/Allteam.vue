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
            <div class="card-header-actions">
              <a 
                :href="getGoodsHref()" 
                class="card-header-action" 
              >
                <CButton size="sm" color="primary" variant="outline">Create A New Team</CButton>
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
      <template #status="{item}">
        <td>
          <CBadge :color="getBadge(item.status)">
            {{item.status}}
          </CBadge>
        </td>
      </template>
      
      <td slot="join" slot-scope="{item}">
        <CButton size="sm" :color="getBadge(item.status)" :disable="item.join" @click="JoinTeam(item.team_id,item.type)">{{item.join}}</CButton>
      </td>
      <template #show_details="{item, index}">
        <td class="py-2">
          <CButton
            color="primary"
            variant="outline"
            square
            size="sm"
            @click="toggleDetails(item, index)"
          >
            {{Boolean(item._toggled) ? 'Hide' : 'Show'}}
          </CButton>
        </td>
      </template>
      <template #details="{item}">
        <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
          <p  v-for="member in item.member_info">
            <CCardBody>
              <strong>student name:</strong> {{member.name}}
              <strong>student email:</strong> {{member.email}}
            </CCardBody>
          </p>
        </CCollapse>
      </template>
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
      details: [],
      tableItems: [],
      isAble :true,
      collapseDuration: 0,
      tableFields: [{ key: 'name', label: 'Team Name'}, 
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
      
      ]
    }
  },
  created(){
      var that = this;
      const id = this.$route.query.project_id;
      //alert(id);
      axios.get("http://127.0.0.1:5000/team/all?project_id="+id).then(response => {
        var res = response.data;
        console.log(res);
        that.tableItems = res;
        for(var i = 0;i < response.data.length;i++){
          that.tableItems[i]['team_id'] = that.tableItems[i]['id'];
          that.tableItems[i]['id'] = i;
          if(that.tableItems[i]['type'] == "public" ){
            that.tableItems[i]['status'] = "public";
            that.tableItems[i]['join'] = "Join";
          } else{
            that.tableItems[i]['status'] = "private";
            that.tableItems[i]['join'] = "";
          }

        }
      })
    },
  methods:{
    JoinTeam:function(team_id,type){
      //alert(team_id);
      if(type == "private"){
        alert("This is a private team, please contact team members if you want to join.");
        return 0;
      }
      var that = this;
      axios.post('http://127.0.0.1:5000/team/join',{
        user_id: localStorage.uid,
        team_id: team_id
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('enroll success');
          that.$router.push('../project/Myproject');
        }else{
          alert(response.data.status);
          //self.$router.push('../team/Allteam?project_id='+project_id);
        }
          
      },function(error){
        alert('fail');
      })
    },
    getBadge (status) {
      switch (status) {
        case 'public': return 'success'
        case 'private': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    toggleDetails (item) {
      this.$set(this.tableItems[item.id], '_toggled', !item._toggled)
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    },
    getGoodsHref:function(val){
      return '/#/team/createteam?project_id='+this.$route.query.project_id;
	  },
    
  }
}
</script>