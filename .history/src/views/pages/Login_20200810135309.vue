<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm :model = "formInline">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <CInput
                    placeholder="email"
                    autocomplete="email"
                    v-model="formInline.email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                    v-model="formInline.password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton color="primary" class="px-4" @click="onSubmit()">Login</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Forgot password?</CButton>
                      <a href="./register"><CButton color="link" class="d-lg-none">Register now!</CButton></a>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <p>If you don't have an account, please click the button and register new!</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Login',
  data(){
    return{
      formInline:{
        email:'',
        password:'',
        role:''
      }
    }
  },
  methods:{
    onSubmit:function(){
      var self = this;
      axios.post("http://34.87.247.9:5000/login",{
        email:this.formInline.email,
        password:this.formInline.password,
      },{emulateJSON:true})
      .then(function(response){
        console.log(response.data);
        if(response.data.status === 'SUCCESS'){
          alert('success');
          localStorage.uid = response.data.id;
          localStorage.username = response.data.name;
          localStorage.role = response.data.role;
          localStorage.email = response.data.email;
          self.$router.push('../dashboard');
        }else{
          alert(response.data.status);
        }
      },function(error){
        alert('fail')
        console.log(error);
      })
    }
  }
}
</script>
