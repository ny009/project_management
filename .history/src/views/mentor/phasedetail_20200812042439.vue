<template>
  <div>
    <CRow v-for="a in allphasedetail">
      <CCol>
        <CCard>
          <CCardHeader>
            <h4>
              <strong>Project Name: </strong>{{a.name}}
              <strong>Term: </strong>{{a.term}}
              <strong>Course: </strong>{{a.course}}
            </h4>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <template v-for="p in a.phase_info">
              <CTab :title="p.name">
                <strong>Start Time: </strong>{{p.start_time}}<br>
                <strong>End Time: </strong>{{p.end_time}}<br>
                <strong>The Number Of Team: </strong>{{p.all_team_num}}<br>
                <strong>Finished Team: </strong>{{p.submit_team_num}}<br>
                <strong>Submit Progress: </strong>
                <CProgress
                  :value="p.submit_rate"
                  :color="color(p.submit_rate)"
                  animated
                  show-value
                  style="height:20px;"
                />
                <template>
              </CTab>
              </template>
            </CTabs>
          </CCardBody>
          <CCardFooter>
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
      allphasedetail:[]
    }
  },
  methods: {

  },
  created(){
    var that = this;
    axios.get("http://127.0.0.1:5000/mentor/detail?user_id="+localStorage.uid).then(response=>{
      var res = response.data;
      that.allphasedetail = res;
      console.log(res);
    });
  }
}
</script>
