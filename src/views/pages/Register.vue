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
              
                <CSelect
                  placeholder="role"
                  type="role"
                  autocomplete="role"
                  prepend="R"
                  :options="registerForm.options"
                  @change="changeRole($event)"
                />

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
        role:'',
        options:[ { value: 'student', label: 'student' }, { value: 'mentor', label: 'mentor' } ]
      }
    }
  },
  methods:{
    onSubmit:function(){
      var self = this;
      axios.post("http://127.0.0.1:5000/register",{
        "email":this.registerForm.email,
        "password":this.registerForm.password,
        "role":this.registerForm.role,
        "name":this.registerForm.username

      },{emulateJSON:true})
      .then(function(response){
        //localStorage.setItem('uid', response.data.id);
        if(response.data.status === "SUCCESS"){
          console.log('success');
          alert('success');
          self.$router.push('./login');
        }else{
          alert(response.data.status);
        }
      },function(error){
        alert('fail');
        console.log(error);
      })
    },
    changeRole(event) {
             this.registerForm.role = event.target.value; 
             console.log("the role is",this.registerForm.role)
    },
  }
}
</script>
