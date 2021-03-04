<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="90%"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          id="options"
          class="text-subtitle-2 text-sm-h6 font-weight-light"
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
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-text-field
                  label="PHONE NUMBER*"
                  color="shade white"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-text-field
                  label="EMAIL*"
                  type="email"
                  color="shade white"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  label="TELL US ABOUT YOUR COMPANY"
                  color="shade white"
                  rows="1"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  label="DESCRIBE YOUR REQUEST"
                  color="shade white"
                  rows="1"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  label="APPROXIMATE BUDGET"
                  color="shade white"
                  rows="1"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="pa-0">
                <v-textarea
                  label="APPROXIMATE DATES"
                  color="shade white"
                  rows="1"
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
                  tile
                  @click="dialog = false"
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
            dialog: false
        }
    },
    methods: {
        closeModal: function() {
            this.$emit('close')
        }
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
    right: 3%;
    bottom: 3%;
    div {
        cursor: pointer;
    }
}
</style>>
