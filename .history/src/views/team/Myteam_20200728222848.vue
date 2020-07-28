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
                <br>
                <p>
                <strong>Team Name: </strong>Group 5<br>
                <strong>Team Members: </strong>5<br>
                <strong>Team Goal: </strong>This project focuses on providing features that are specific to students-mentor meetings, student meetings, project activity review and planning  (not limited to) : (i) managing regular project member meetings including explicit meeting agenda and moderation, (ii) management of project goals, milestones and progress, (iii) providing meeting summary notes including to do tasks and integration with calendar and task management services, (iii) managing regular reviews and feedbacks by mentors, partners and peers  forming a project community, (iv) providing regular encouragement of group members for progress, contributions and positive attitude, (v) showcasing student progress through video presentations, (vi) organizing scheduled consultations. <br>
                </p>
                <CButton color="primary">EDIT</CButton>
              </CTab>
              <CTab title="Team Project" active>
                <br>
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
           <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/>
        <strong> Milestone Progress </strong>
      </CCardHeader>
      <CCardBody>
      <div class="row mb-1">
      <div class="col-sm-2">
      <strong> Phase 1 Report(Team): </strong>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="100"
          color="success"
          class="mb-2"
        />
        <strong> Due Date: </strong>2020-07-01 <strong>Status: </strong>finished <strong>Mark: </strong>80
        </div>
        </div>
        <hr>
      <div class="row mb-1">
      <div class="col-sm-2">
      <strong>Phase 2 presentation(Team): </strong><br>
      <small> Due Date: 2020-07-30</small><br>
      <small> status: processing</small><br>
      <small> mark: not yet marked</small><br>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="80"
          color="info"
          class="mb-2"
        />
        </div>
        </div>
              <div class="row mb-1">
      <div class="col-sm-2">
      <strong>Peer review(Team): </strong><br>
      <small> Due Date: 2020-08-03</small><br>
      <small> status: processing</small><br>
      <small> mark: not yet marked</small><br>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="10"
          color="warning"
          class="mb-2"
        />
        </div>
        </div>
              <div class="row mb-1">
      <div class="col-sm-2">
      <strong>Phase 3(Team): </strong><br>
      <small> Due Date: 2020-08-20</small><br>
      <small> status: not yet started</small><br>
      <small> mark: not yet started</small><br>
      </div>
      <div class="col-sm-10 pt-1">
        <CProgress
          :value="0"
          color="danger"
          class="mb-2"
        />
        </div>
        </div>
      </CCardBody>
    </CCard>
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
                description="like 3:15PM"
                horizontal
              />
              <CInput
                label="End Time"
                description="like 3:15PM"
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
                  <h5 class="mb-1">Phase 2 presentation</h5>
                  
                </div>
                <small>2 days from now</small><br>
                <small>Post by: Morty Al-Banna</small><br>
                <small>Type: team</small><br>
                <small>Date: Thursday, 30th of July 2020 6-9PM</small>
                
                
              </CListGroupItem>
                            
              <CListGroupItem
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Peer review </h5>
                  
                </div>
                <small>6 days from now</small><br>
                <small>Post by: Morty Al-Banna</small><br>
                <small>Type: personal</small><br>
                <small>Due: Monday, 3rd of August 2020 12:00</small>
                
                
              </CListGroupItem>
              <CListGroupItem
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Phase 3 </h5>
                  
                </div>
                <small>18 days from now</small><br>
                <small>Post by: Morty Al-Banna</small><br>
                <small>Type: team</small><br>
                <small>Due: Monday, 20th of August 2020 12:00</small>
                
                
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
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
                  <h5 class="mb-1">Meeting </h5>
                  
                </div>
                <small>To discuss the ER model</small><br>
                <small>date: Tuesday, 2020-07-28</small><br>
                <small>time: 14:00 - 16:00</small>
              </CListGroupItem>
                 <CListGroupItem
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Consultation</h5>
                  
                </div>
                <small>Consult how to prepare presentation</small><br>
                <small>mentor: Morty Al-Banna</small><br>
                <small>date: Wednesday, 2020-07-29</small><br>
                <small>time: 10:00 - 10:30</small>
              </CListGroupItem>
              <CListGroupItem
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Meeting</h5>
                  
                </div>
                <small>Prepare and rehearse presentation</small><br>
                <small>date: Thursday, 2020-07-30</small><br>
                <small>time: 10:00 - 12:00</small>
              </CListGroupItem>
                </CListGroup>
          </CCardBody>
        </CCard>
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
          name: 'Krishnan Suresh',
          email: 'krishnan.suresh@student.unsw.edu.au'
        },
        {
          name: 'Nehal Yatham',
          email: 'n.yatham@student.unsw.edu.au'
        },
        {
          name: 'Peiwen Lyu',
          email: 'peiwen.lyu@student.unsw.edu.au'
        },
        {
          name: 'Suharsh Nagasampagi',
          email: 's.nagasampagi@student.unsw.edu.au'
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
