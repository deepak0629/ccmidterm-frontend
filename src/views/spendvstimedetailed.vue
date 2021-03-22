<template>
  <v-card
    align-end
    flexbox
    style="width:100%; height:100%"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="black"
  >
    <highcharts dark :options="chartConfig" />
  </v-card>
</template>

<script>

import Highcharts from 'highcharts'
Highcharts.theme = {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
             '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor: {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(255, 255, 255)'],
                [1, 'rgb(240, 240, 255)']
            ]
        },
    },
    title: {
        style: {
            color: '#000',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'black'
        },
        itemHoverStyle:{
            color: 'gray'
        }
    }
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);
import Axios from 'axios'

export default {
    name:"SpendDataCat",
  data: () => ({
    isloading: false,
    loadingText: 'Loading Year Vs Household Details by Categories',
    labels: [],
    data: [],
    ChartMsg: 'No Data',
    title: 'Year Vs Household'
  }),
  mounted () {
      this.getSpendData()
  },
  computed: {
    loading () {
      return this.isloading
    },
    chartConfig () {
      return {
        chart: {
          type: 'column',
          height: 450,
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          plotBorderColor: '#white'
        },
        title: {
          text: 'Year Vs Household Spend'
        },
        xAxis: {
          categories: this.labels,
          title: {
            text: 'Year'
          },
          crosshair: true,
          labels: {
            style: {
              color: 'black'
            }
          }
        },
        yAxis: {
          title: {
            text: 'Household Spent'
          },
          reversedStacks: false,
          gridLineWidth: 0,
          minorGridLineWidth: 0,
          gridLineColor: 'transparent'
        },
        legend: {
          backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || 'white',
          shadow: false
        },
        lang: {
          noData: this.ChartMsg
        },
        plotOptions: {
          column: {
            dataLabels: {
              enabled: true,
              color: '#FFFFFF',
              style: {
                textOutline: false,
                fontWeight: '100'
              },
              formatter: function () {
                if (this.point.y !== 0) {
                  return this.point.y
                }
              }
            },
          }
        },
        series: this.data
      }
    }
  },
  methods: {
    async getSpendData () {
        try {
                  this.isloading = true
      this.data = []
      this.ChartMsg = 'Loading....'
      
      await Axios.get('https://ccmidterm1.azurewebsites.net/backend/getspendvstimedetailed/').then((data)=>{
          this.data=data.data.data

          this.labels=data.data.categories
          this.isloading = false
      }).catch(()=>{
          this.isloading = false
            this.data=[]
             this.$notify({
              group: 'notification',
              title: '<span style="font-size:14px"><b><u>Error:</u></b></span>',
              text: `<span style="font-size:14px"><br/><b>Error Getting Data</b></span>`,
              type: 'error'
            })
      })
        } catch (error) {
            console.log(error)
            this.isloading = false
            this.data=[]
                         this.$notify({
              group: 'notification',
              title: '<span style="font-size:14px"><b><u>Error:</u></b></span>',
              text: `<span style="font-size:14px"><br/><b>Error Getting Data</b></span>`,
              type: 'error'
            })
        }
    }
  },
  watch: {
  }
}
</script>
