<template>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      persistent
      max-width="1000px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  color="shade white"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  color="shade white"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="closeModal"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="closeModal"
          >
            Save
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
