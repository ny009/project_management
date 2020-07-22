<template>
  <div>
    <CRow>
        <CCard>
          <CCardHeader>

            <strong>Project name</strong>
            <div class="card-header-actions">
              <a 
                href="/" 
                target="_blank"
              >
                <CButton color="primary" size="sm">Enroll</CButton>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
    </CRow>
        <CRow>
        <CCard>
          <CCardHeader>

            <strong>Project name</strong>
            <div class="card-header-actions">
              <a 
                href="/" 
                target="_blank"
              >
                <CButton color="primary" size="sm">Enroll</CButton>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
    </CRow>    <CRow>
        <CCard>
          <CCardHeader>

            <strong>Project name</strong>
            <div class="card-header-actions">
              <a 
                href="/" 
                target="_blank"
              >
                <CButton color="primary" size="sm">Enroll</CButton>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
    </CRow>    <CRow>
        <CCard>
          <CCardHeader>

            <strong>Project name</strong>
            <div class="card-header-actions">
              <a 
                href="/" 
                target="_blank"
              >
                <CButton color="primary" size="sm">Enroll</CButton>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
    </CRow>    <CRow>
        <CCard>
          <CCardHeader>

            <strong>Project name</strong>
            <div class="card-header-actions">
              <a 
                href="/" 
                target="_blank"
              >
                <CButton color="primary" size="sm">Enroll</CButton>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            {{loremIpsum}}
          </CCardBody>
        </CCard>
    </CRow>
 
  </div>
</template>

<script>

export default {
  name: 'Cards',
  data: function () {
    return {
      show: true,
      isCollapsed: true,
      loremIpsum: 'project detail project detail project detail project detail project detail project detail project detail project detail project detail project detail project detail project detail project detail project detail project detail project detail project detail '
    }
  }
}
</script>
