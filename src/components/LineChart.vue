<script>
import { defineComponent, h } from "vue";

import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

export default defineComponent({
  name: "LineChart",
  components: {
    Line,
  },
  props: {
    chartId: {
      type: String,
      default: "line-chart",
    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const chartData = {
      labels: [
        "09:00AM",
        "10:00AM",
        "11:00AM",
        "12:00PM",
        "01:00PM",
        "02:00PM",
        "03:00PM",
        "04:00PM",
      ],
      datasets: [
        {
          data: [0, 0, 1, 2, 9, 12, 10, 9],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "rgb(213, 231, 252)",
          borderWidth: 3,
        },
        {
          data: [5.166, 0.081, 3.003, 0.323, 94.792, 30.886, 43.662, 51.514],
          backgroundColor: "rgb(213, 231, 252)",
          borderColor: "#3483f7",
          borderWidth: 3,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return () =>
      h(Line, {
        chartData,
        chartOptions,
        chartId: props.chartId,
        width: props.width,
        height: props.height,
        cssClasses: props.cssClasses,
        styles: props.styles,
        plugins: props.plugins,
      });
  },
});
</script>
