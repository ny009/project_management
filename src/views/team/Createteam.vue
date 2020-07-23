<template>
  <div>
    <CRow>
      <CCol >
        <CCard>
          <CCardHeader>
            <strong>Create A Team</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                description="Please name your team."
                label="Team name"
                horizontal
                autocomplete="teamname"
              />
              <CTextarea
                label="Description"
                placeholder="Please briefly describe your team"
                horizontal
                rows="9"
              />
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: [
        'Option 1', 'Option 2', 'Option 3',
        { 
          value: 'some value', 
          label: 'Selected option'
        }
      ],
      selectedOption: 'some value',

      formCollapsed: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes',
                      'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios',
                    'Radios - custom', 'Inline Radios - custom']
    }
  },
  methods: {
    validator (val) {
      return val ? val.length >= 4 : false
    }
  }
}
</script>
