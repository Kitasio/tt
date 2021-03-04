<template>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      persistent
      max-width="1000px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h2 font-weight-bold">CONTACT US</span>
        </v-card-title>
        <v-card-text>
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
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="shade white"
            text
            outlined
            tile
            @click="closeModal"
          >
            CLOSE
          </v-btn>
          <v-btn
            color="shade white"
            text
            outlined
            tile
            @click="closeModal"
          >
            SEND
          </v-btn>
        </v-card-actions>
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

</style>>
