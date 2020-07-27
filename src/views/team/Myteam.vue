<template>
  <div>
    <CRow>
    <CCol md="9">
            <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> My Team </strong>
          </CCardHeader>
          <CCardBody>
            <CTabs>
              <CTab title="Team" active>
                <p>
                <strong>Team Name: </strong>Group 5<br>
                <strong>Team Members: </strong>5<br>
                <strong>Team Goal: </strong>This project focuses on providing features that are specific to students-mentor meetings, student meetings, project activity review and planning  (not limited to) : (i) managing regular project member meetings including explicit meeting agenda and moderation, (ii) management of project goals, milestones and progress, (iii) providing meeting summary notes including to do tasks and integration with calendar and task management services, (iii) managing regular reviews and feedbacks by mentors, partners and peers  forming a project community, (iv) providing regular encouragement of group members for progress, contributions and positive attitude, (v) showcasing student progress through video presentations, (vi) organizing scheduled consultations. <br>
                </p>
                <CButton color="primary">EDIT</CButton>
              </CTab>
              <CTab title="Team Project" active>
                <p>
                <strong>Project Name: </strong>Project-based Learning Dojo<br>
                <strong>Project Start date: </strong>2020-05-01<br>
                <strong>Project End date: </strong>2020-08-01<br>
                <strong>Project Description: </strong>This project focuses on providing features that are specific to students-mentor meetings, student meetings, project activity review and planning  (not limited to) : (i) managing regular project member meetings including explicit meeting agenda and moderation, (ii) management of project goals, milestones and progress, (iii) providing meeting summary notes including to do tasks and integration with calendar and task management services, (iii) managing regular reviews and feedbacks by mentors, partners and peers  forming a project community, (iv) providing regular encouragement of group members for progress, contributions and positive attitude, (v) showcasing student progress through video presentations, (vi) organizing scheduled consultations. <br>
                </p>
              </CTab>
            </CTabs>
          </CCardBody>
        </CCard>
    </CCol>
      <CCol md="3">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Recent Due </strong>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Phase 1 report</h5>
                  
                </div>
                <small>3 days from now</small><br>
                <small>Morty Al-Banna</small><br>
                <small>update: 2020-06-03</small>
                
                
              </CListGroupItem>
                            <CListGroupItem
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Phase 1 report</h5>
                  
                </div>
                <small>3 days from now</small><br>
                <small>Morty Al-Banna</small><br>
                <small>update: 2020-06-03</small>
                
                
              </CListGroupItem>
                            <CListGroupItem
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Phase 1 report</h5>
                  
                </div>
                <small>3 days from now</small><br>
                <small>Morty Al-Banna</small><br>
                <small>update: 2020-06-03</small>
                
                
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CRow>
        <CCol md="9">
   <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Milestone Progress </strong>
      </CCardHeader>
      <CCardBody>
      <div class="row mb-1">
      <div class="col-sm-2">
      <strong> Phase 1: </strong>
      <small> Due Date: 2020-07-01</small>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="25"
          color="success"
          class="mb-2"
        />
        </div>
        </div>
              <div class="row mb-1">
      <div class="col-sm-2">
      <strong> Phase 2: </strong>
      <small> Due Date: 2020-07-01</small>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="50"
          color="info"
          class="mb-2"
        />
        </div>
        </div>
              <div class="row mb-1">
      <div class="col-sm-2">
      <strong> Phase 3: </strong>
      <small> Due Date: 2020-07-01</small>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="75"
          color="warning"
          class="mb-2"
        />
        </div>
        </div>
              <div class="row mb-1">
      <div class="col-sm-2">
      <strong> Phase 4: </strong>
      <small> Due Date: 2020-07-01</small>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="100"
          color="danger"
          class="mb-2"
        />
        </div>
        </div>
      </CCardBody>
    </CCard>
        </CCol>
        <CCol md="3">
        <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Schedule </strong>
          </CCardHeader>
          <CCardBody>
                <CListGroup>
                 <CListGroupItem
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Phase 1 meeting</h5>
                  
                </div>
                <small>3 days from now</small><br>
                <small>Type:meeting</small><br>
                <small>update: 2020-06-03</small>
              </CListGroupItem>
                 <CListGroupItem
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Phase 1 consultation</h5>
                  
                </div>
                <small>2 days from now</small><br>
                <small>Type:meeting</small><br>
                <small>update: 2020-06-03</small>
              </CListGroupItem>
                </CListGroup>
          </CCardBody>
        </CCard>
        </CCol>
    </CRow>
    <CRow>
    <CCol md="8">
            <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Team Work </strong>
          </CCardHeader>
          <CCardBody>
                <CTabs>
              <CTab title="Create a Milestone" active>
              <br>
<CForm>
              <CInput
                description="Please name the Milestone."
                label="Milestone Name"
                horizontal
                autocomplete="projectname"
              />
              <CInput
                label="Start Date"
                type="date"
                horizontal
              />
              <CInput
                label="End Date"
                type="date"
                horizontal
              />
              <CTextarea
                label="Description"
                placeholder="Description"
                horizontal
                rows="9"
              />
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CForm>
            
              </CTab>
              <CTab title="Plan Team Schedule" active>
              <br>
<CForm>
              <CInput
                description="Team ID."
                label="Team ID"
                horizontal
                autocomplete="teamid"
              />
              <CInput
                label="Date"
                type="date"
                horizontal
              />
              <CInput
                label="Start Time"
                description="like 3:15"
                horizontal
              />
              <CInput
                label="End Time"
                description="like 3:15"
                horizontal
              />
              <CInput
                label="Type"
                description="meeting or consultation"
                horizontal
              />
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
            </CForm>
              </CTab>
            </CTabs>
            </CCardBody>
            </CCard>
    </CCol>
    <CCol md="4">
                <CCard>
          <CCardHeader>
            <CIcon name="cil-justify-center"/><strong> Team Members </strong>
          </CCardHeader>
          <CCardBody>
           <CDataTable
              class="mb-0 table-outline"
              hover
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
            >

            </CDataTable>
          </CCardBody>
        </CCard>
    </CCol>

    </CRow>
  </div>
</template>

<script>
export default {
  name: 'ListGroups',
  data () {
    return {
      tableItems: [
        {
          name: 'Hao ZHONG',
          email: 'walkenzhong@gmail.com'
        },
        {
          name: 'Hao ZHONG',
          email: 'walkenzhong@gmail.com'
        },
        {
          name: 'Hao ZHONG',
          email: 'walkenzhong@gmail.com'
        },
      ],
      tableFields: [
        { key: 'name', label: 'Name', _classes: 'text-center' },
        { key: 'email' }
      ]
    }
  }
}
</script>
