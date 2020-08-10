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
                autocomplete="teamname"
                v-model="teamdetail.name"
              />
              <CInput
                description="Please team type."
                label="Team type"
                horizontal
                autocomplete="teamname"
                v-model="teamdetail.type"
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
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data () {
    return {
        teamdetail:{
          user_id:localStorage.uid,
          name:'',
          detail:'',
          type:'',
          project_id:''
        }
    }
  },
  methods: {
    createtime: function() {
      var that = this;
      axios.post("http://34.87.247.9:5000/team/create",{
        user_id : that.teamdetail.user_id,
        name : that.teamdetail.name,
        detail : that.teamdetail.detail,
        type : that.teamdetail.type,
        project_id : that.teamdetail.project_id
      },{emulateJSON:true})
      .then(function(response){
        alert('success');
      },function(error){
        alert('fail');
      }
      
      )
    }
  },
  created(){
    var that = this;
    const project_id = this.$route.query.project_id;
    that.teamdetail.project_id = project_id;
  }
}
</script>
