import React from 'react'
import Chart from '../../../components/Admin/Charts/Chart'
import Radar from '../../../components/Admin/Radar/Radar'
import DonutChart from '../../../components/Admin/DonutChart/DonutChart'
import ApexChart from '../../../components/Admin/ApexChart/ApexChart'
import './Dashboard.scss'
import PieChart from '../../../components/Admin/PieChart/PieChart'

function Dashboard() {
  return (
    <>
      <div className="diagrams">
        <div className="diagrams__1">
          <Chart />
        </div>

        <div className="diagrams__5">
          <PieChart />
        </div>


        <div className="wrappers">
          <div className="diagrams__3">
            <Radar />
          </div>

          <div className="diagrams__2">
            <DonutChart />
          </div>

          <div className="diagrams__3">
            <Radar />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Dashboard