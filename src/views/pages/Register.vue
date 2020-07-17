<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="7">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-6">
              <CForm>
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <CInput
                  placeholder="Username"
                  autocomplete="username"
                  prepend="U"
                >
                  
                </CInput>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  prepend="E"
                />
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                  prepend="P"
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
                  placeholder="Role"
                  autocomplete="role"
                  prepend="R"
                  :options="['Mentor','Student']"
                  class="mb-4"
                >
                </CSelect>
                <CButton color="success" block>Create Account</CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>
