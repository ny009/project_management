<template>
  <CRow>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Morty Al-Banna <small>20200719</small>
        </CCardHeader>
        <CCardBody>
            <CAlert show color="success">
              <h4 class="alert-heading">Guest Lecture</h4>
              <p align="left">
              Dear All,<br>
This week we are privileged to have Dr. Halvard Skogsrud from Google to talk about Go Programming Language.<br>
Time: Thursday the 16th of July @6:00PM<br>
Platform: Microsoft Teams<br>
Talk Summary: The Go programming language was created at Google and revealed to the public in October 2009. Its design choices are considered controversial by many, but it has become a popular choice for open source projects. It is neither object-oriented nor functional, but contains elements of both, as well as an approach to concurrency that sets it apart from most other languages. This talk will give a whirlwind tour of Go, including its design principles and features.<br>
BIO: Halvard Skogsrud is a Solutions Architect at Google working on Google Cloud. He has more than ten years experience as a software engineer and consultant, and he has a PhD from The University of New South Wales, Australia.
              </p>
            </CAlert>
        </CCardBody>
      </CCard>
    </CCol>
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
      notification = res;
      //alert(res.length)
    })
  }
}
</script>
