<template>
  <div>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Recent Notification</h4>
            <div class="small text-muted">20200719</div>
          </CCol>
          <CCol sm="7" class="d-none d-md-block">
            <CButton color="primary" class="float-right">
              Notification
            </CButton>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CRow class="text-center">
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
        </CRow>
      </CCardFooter>
    </CCard>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            Course &amp; Project
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="info">
                      <small class="text-muted">Processing</small><br>
                      <strong class="h4">9</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="warning">
                      <small class="text-muted">Planning</small><br>
                      <strong class="h4">7</strong>
                    </CCallout>
                  </CCol>
                </CRow>

              </CCol>
              <CCol sm="12" lg="6">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="success">
                      <small class="text-muted">Finish</small><br>
                      <strong class="h4">7</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="danger">
                      <small class="text-muted">Over Due</small><br>
                      <strong class="h4">0</strong>
                    </CCallout>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
           <CDataTable
              class="mb-0 table-outline"
              hover
              :items="tableItems"
              :fields="tableFields"
              head-color="light"
              no-sorting
            >
              <td slot="course" slot-scope="{item}">
                <div>{{item.course.name}}</div>
              </td>
              <td slot="project" slot-scope="{item}">
                <div>{{item.project.name}}</div>
                <div class="small text-muted">
                  <span>
                    <template v-if="item.project.new">New</template>
                    <template v-else>Recurring</template>
                  </span> | Registered: {{item.project.registered}}
                </div>
              </td>
              <td
                slot="group"
                slot-scope="{item}"
                class="text-center"
              >
              <div>{{item.group.name}}</div>
                <div class="small text-muted">
                  Group members: {{item.group.member}}
                </div>
              </td>
              <td slot="process" slot-scope="{item}">
                <div class="clearfix">
                  <div class="float-left">
                    <strong>{{item.process.value}}%</strong>
                  </div>
                  <div class="float-right">
                    <small class="text-muted">{{item.process.period}}</small>
                  </div>
                </div>
                <CProgress
                  class="progress-xs"
                  v-model="item.process.value"
                  :color="color(item.process.value)"
                />
              </td>
              <td
                slot="due"
                slot-scope="{item}"
                class="text-center"
              >
              <div>{{item.due.date}}</div>
              </td>
              <td slot="activity" slot-scope="{item}">
                <div class="small text-muted">Last Update</div>
                <strong>{{item.activity}}</strong>
              </td>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      tableItems: [
        {
          course: { name: 'COMP9323' },
          project: { name: 'project management system', new: true, registered: 'Jan 1, 2015' },
          group: { name: 'Group5', member: '5' },
          process: { value: 50, update: 'Jun 11, 2015' },
          due: { date: 'Jun 11, 2015'},
          activity: '10 sec ago'
        }
      ],
      tableFields: [
        { key: 'course' },
        { key: 'project' },
        { key: 'group', _classes: 'text-center' },
        { key: 'process' },
        { key: 'due', label: 'Due date', _classes: 'text-center' },
        { key: 'activity' },
      ]
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>


