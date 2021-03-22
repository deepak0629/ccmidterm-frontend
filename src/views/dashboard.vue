<template>
  <v-content style="padding-top:0px;">
    <div style="width:100%; height:100%">

      <!-- Content -->
      <v-card  dark align-end flexbox>
        <v-container fluid grid-list-md pa-2>
          <v-layout row wrap>
            <v-flex xs6  >
              <SpendData/>
            </v-flex>
            <v-flex xs6  >
              <SpendDataCat/>
            </v-flex>
            <v-flex xs6  >
              <MaritalStatus/>
            </v-flex>
            <v-flex xs6  >
              <IncomeRange/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </v-content>
</template>

<script>
    import SpendData from './spendvstime.vue'
    import SpendDataCat from './spendvstimedetailed'
    import MaritalStatus from './maritalstatus'
    import IncomeRange from './incomerange'
  export default {
    components: {
        SpendData,
        SpendDataCat,
        MaritalStatus,
        IncomeRange
    },
    data: () => {
      return {
        sbuSelected: null
      }
    },
    methods: {

    }
  }
</script>

<style>
  .el-loading-mask {
    background-color: rgba(66,66,66,.9) !important;
  }
</style>
