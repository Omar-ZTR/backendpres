import { LineController } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
// global.legend.position = 'bottom'

const LineChart = () => {
  return (
    <div className='chart__container'>
      <Line
        data={{
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesay', 'Thursday', 'Friday','Saturday'],
          datasets: [
            {
              label: 'Seller',
              data: [2, 6, 0, 0, 2, 4,5],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [3, 6, 3, 0, 0, 2,4],
            //   backgroundColor: 'bleuDark',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default LineChart
