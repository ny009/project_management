<template>
  <div>
    <CRow>
      <CCol >
        <CCard>
          <CCardHeader>
            <strong>Create A Team</strong>
          </CCardHeader>
          <CCardBody>
            <CForm :model = "teamdetail">
              <CInput
                description="Please name your team."
                label="Team name"
                horizontal
                autocomplete="teamdetail"
                v-model="teamdetail.name"
              />
              
              <CSelect
                description="If you don’t want unfamiliar people to join the team, please choose private."
                horizontal
                label="Team type"
                autocomplete="teamtype"
                :options="teamdetail.options"
                @change="changeType($event)"
              />
              <CTextarea
                label="Description"
                placeholder="Please briefly describe your team"
                horizontal
                rows="9"
                v-model="teamdetail.detail"
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary" @click="createteam()"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
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
        teamdetail:{
          user_id:localStorage.uid,
          name:'',
          detail:'',
          type:'',
          options:[ { value: 'pubilc', label: 'public' }, { value: 'private', label: 'private' } ],
          project_id:''
        }

    }
  },
  created(){
    var that = this;
    const project_id = this.$route.query.project_id;
    that.teamdetail.project_id = project_id;
  },
  methods: {
    changeType(event) {
      this.teamdetail.type = event.target.value; 
      console.log("the team type is",this.teamdetail.type)
    },
    createteam: function() {
      var that = this;
      axios.post("http://127.0.0.1:5000/team/create",{
        user_id : that.teamdetail.user_id,
        name : that.teamdetail.name,
        detail : that.teamdetail.detail,
        type : that.teamdetail.type,
        project_id : that.teamdetail.project_id
      },{emulateJSON:true})
      .then(function(response){
        if(response.data.status === 'SUCCESS'){
          alert('create success');
          that.$router.push('./Myteam');
        }else{
          alert('create fail');
        }
        
        
      },function(error){
        alert('fail');
      }
      
      )
    }
  },
  
  
}
</script>
