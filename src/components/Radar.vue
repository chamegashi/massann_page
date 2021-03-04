<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  name: 'radar',
  props: {
    label: String,
    labels: Array,
    radarData: Array,
    color: Array,
  },
  data () {
    return {
      data: {
        label: this.label,
        labels: this.labels,
        datasets: [{
          label: this.label,
          backgroundColor: 'rgba(' + this.color[0] + ', ' + this.color[1] + ', ' + this.color[2] + ', 0.1)',
          borderColor: 'rgba(' + this.color[0] + ', ' + this.color[1] + ', ' + this.color[2] + ', 0.3)',
          data: this.radarData
        }]
      },
      options: {
        scale: {
          ticks: {
            max: 5,
            min: 0,
            stepSize: 1.0
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>