<template>
  <div>
    <CRow>
      <CCol>
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
