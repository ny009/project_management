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
