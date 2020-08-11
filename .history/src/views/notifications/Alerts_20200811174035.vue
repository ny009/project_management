<template>
  <CRow>
    <template v-for="n in notification">
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> {{n.author}} <small>{{n.time}}</small>
        </CCardHeader>
        <CCardBody>
            <CAlert show color="success">
              <h4 class="alert-heading">{{n.name}}</h4>
              <p><strong>Project Name: </strong>{{n.project_name}}</p>
              <p><strong>Notification Detail:</strong></p>
              <p>{{n.detail}}</p>
            </CAlert>
        </CCardBody>
      </CCard>
    </CCol>
    </template>
  </CRow>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Alerts',
  data () {
    return {
      notification:[]
    }
  },
  methods: {
  },
  created(){
    var that = this;
    axios.get("http://127.0.0.1:5000/notification/student?user_id="+localStorage.uid).then(response=>{
      var res = response.data;
      console.log(res);
      that.notification = res;
      //alert(res.length)
    })
  }
}
</script>
