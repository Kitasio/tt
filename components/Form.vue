<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="90%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          tile
          depressed
          v-bind="attrs"
          v-on="on"
          id="options"
          class="request text-subtitle-2 text-sm-h6 text-xl-h4 font-weight-light"
          color="shade white"
        >
        SEND REQUEST
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="d-flex justify-space-between">
          <span class="text-h5 text-sm-h2 font-weight-bold">CONTACT</span>
          <span class="text-h5 text-sm-h2 font-weight-bold">US</span>
        </v-card-title>
        <v-card-text class="card-text">
          <v-container>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-text-field
                  label="NAME*"
                  color="shade white"
                  required
                  v-model="name"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-text-field
                  label="PHONE NUMBER*"
                  color="shade white"
                  required
                  v-model="number"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-text-field
                  label="EMAIL*"
                  type="email"
                  color="shade white"
                  required
                  v-model="email"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  label="TELL US ABOUT YOUR COMPANY"
                  color="shade white"
                  rows="1"
                  v-model="tell_us"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  label="DESCRIBE YOUR REQUEST"
                  color="shade white"
                  rows="1"
                  v-model="describe_request"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  label="APPROXIMATE BUDGET"
                  color="shade white"
                  rows="1"
                  v-model="budget"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  label="APPROXIMATE DATES"
                  color="shade white"
                  rows="1"
                  v-model="dates"
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-spacer cols="9" sm="11"></v-spacer>
              <v-col cols="3" sm="1" class="pa-0 pb-10" align-self="end">
                <v-btn
                  color="shade white"
                  text
                  outlined
                  type="submit"
                  tile
                  @click="tgMessage"
                >
                  SEND
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
    props: ['showModal'],
    data() {
        return{
            dialog: false,
            name: '',
            number: '',
            email: '',
            tell_us: '',
            describe_request: '',
            budget: '',
            dates: '',
        }
    },
    methods: {
        closeModal: function() {
            this.$emit('close')
        },
        send: function() {
          console.log(this.firstName, this.lastName, this.email)
          this.dialog = false
          let data = {firstName: this.firstName, lastName: this.lastName, email: this.email}
          fetch('/.netlify/functions/send', {
              headers: {
                  "content-type": "application/json"
                  },
              method: "POST",
              body: JSON.stringify(data)
          }).then(() => {
              console.log('fetch then')
          }).catch(() => {
              console.log('fetch error')
          })
        },
        tgMessage: function() {
          this.dialog = false
          let data = {
            name: this.name,
            number: this.number,
            email: this.email,
            tell_us: this.tell_us,
            describe_request: this.describe_request,
            budget: this.budget,
            dates: this.dates,
          }
          fetch('/.netlify/functions/tgMessage/tgMessage.js', {
              headers: {
                  "content-type": "application/json"
                  },
              method: "POST",
              body: JSON.stringify(data)
          }).then(() => {
              console.log('fetch then')
          }).catch(() => {
              console.log('fetch error')
          })
        },
    }
}
</script>

<style lang="scss" scoped>
.card-text {
  padding: 0 20%;
}
#options {
    z-index: 100;
    position: fixed;
    padding: 30px;
    right: 3%;
    bottom: 3%;
    div {
        cursor: pointer;
    }
}

</style>>
