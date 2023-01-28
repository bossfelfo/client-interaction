import Chart from 'react-apexcharts'
import { Card } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import { CardTitle } from 'components'

const InteractionChart = () => {
  const apexDonutOpts: ApexOptions = {
    chart: {
      height: 340,
      type: 'donut',
    },
    colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 376,
        options: {
          chart: {
            width: 250,
            height: 250,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }

  const apexDonutData = [1, 1, 1, 1]

  return (
    <Card>
      <Card.Body>
        <CardTitle
          containerClass='d-flex align-items-center justify-content-between'
          title='Total Interactions'
        />

        <Chart
          options={apexDonutOpts}
          series={apexDonutData}
          type='donut'
          height={222}
          className='apex-charts mb-4 mt-4'
        />

        <div className='chart-widget-list'>
          <p>
            <i className='mdi mdi-square text-primary'></i> Real Estate
            <span className='float-end'>count</span>
          </p>
          <p>
            <i className='mdi mdi-square text-danger'></i> Industrials
            <span className='float-end'>count</span>
          </p>
          <p>
            <i className='mdi mdi-square text-success'></i> Materials
            <span className='float-end'>count</span>
          </p>
          <p className='mb-0'>
            <i className='mdi mdi-square text-warning'></i> Communication Services
            <span className='float-end'>count</span>
          </p>
        </div>
      </Card.Body>
    </Card>
  )
}

export { InteractionChart }
