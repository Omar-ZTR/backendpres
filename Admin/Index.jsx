import React from 'react'
import Card from './Components/Card'
import Chart from './Components/Chart'
import SideBar from './Components/SideBar'
import Navbar from '../../src/Admin/Components/Navbar'
import "./admin.css"
import { Outlet } from 'react-router-dom'
import Main from './Components/ongles/main/Main'
import Requests from './Components/ongles/Requests/Requests'
import NavDash from './Components/NavDash'
import TabSeller from './Components/ongles/TabSeller/TabSeller'
import TabClient from './Components/ongles/tabClient/TabClient'
const Index = () => {
  return (
    <div><body id="body">
      <div className='baar'>
      Requests
      </div>
      <div className="Admin">
       

        <div className='main'>
           {/* <NavDash/> */}
          <div class="main__Admin">

            {/* <TabSelle/> */}
            <Requests/>
          </div>
        </div>  <SideBar />
        </div>
    </body>
      {/* <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="script.js"></script> */}
    </div>
  )
}

export default Index