import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
  // Modify the axis by adding scales
  scales: {
    x: {
      grid: {
        drawBorder: false,
        color: '#777777',
      },
      ticks: {
        beginAtZero: true,
        color: 'white',
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = [
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
];

// const labels = Utils.months({ count: 7 });

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [90, 85, 70, 68, 54, 60, 55, 45, 40, 30, 32, 43],
      borderColor: '#FFCC21',
      backgroundColor: '#FFCC21',
    },
    {
      label: 'Dataset 2',
      data: [90, 80, 73, 63, 50, 23, 20, 18, 15, 12, 10, 5],
      borderColor: '#8FE9D0',
      backgroundColor: '#8FE9D0',
    },
  ],
};

export function LineChart() {
  return (
    <div className='bg-[#2E2E2E] p-6'>
      <Line options={options} data={data} />
    </div>
  );
}
