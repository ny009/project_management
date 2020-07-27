<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="7">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-6">
              <CForm :model = "registerForm">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <CInput
                  placeholder="Username"
                  autocomplete="username"
                  prepend="U"
                  v-model="registerForm.username"
                >
                  
                </CInput>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  prepend="E"
                  v-model="registerForm.email"
                />
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                  prepend="P"
                  v-model="registerForm.password"
                >
                  
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  prepend="P"
                >
                 
                </CInput>
                <CInput
                  placeholder="role"
                  type="role"
                  autocomplete="role"
                  prepend="R"
                  v-model="registerForm.role"
                >
                 
                </CInput>
                <CButton color="success" block @click="onSubmit()">Create Account</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data(){
    return{
      registerForm:{
        username:'',
        email:'',
        password:'',
        role:''
      }
    }
  },
  methods:{
    onSubmit:function(){
      axios.post("https://project-dojo.herokuapp.com/api/v2/register",{
        "email":this.registerForm.email,
        "password":this.registerForm.password,
        "role":this.registerForm.role,
        "name":this.registerForm.username

      },{emulateJSON:true})
      .then(function(response){
        alert('success');
        console.log(response.data);
        localStorage.setItem('uid', response.data.id);
        test = localStorage.getItem('uid');
        console.log(test);
        alert(test);
        alert(22);
      },function(error){
        alert('fail');
        console.log(error);
      })
    }
  }
}
</script>
