import React from 'react'
import "./tabSeller.css"
import userimg from "../../../../img/mman.png"
import LineChart from '../tabClient/LineChart'
import delet from '../../../../img/delete.png';
import edi from '../../../../img/edi.png';

const TabSeller = () => {
  return (

    <div className='tabs'>
      
      <div className='tabSeller'>
        <h2 className='tit'>Table of Seller:</h2>
        <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Category</th>
            <th>Number of services</th>
            <th>Level</th>
            <th></th>
          </tr>
         
            <tr >
              <td>
                <img className="imageuser" src={userimg} alt="" />
              </td>
              <td>Karim</td>
              <td>Art</td>
              <td>2</td>
              <td>1</td>
              <td>
                <img
                  className="delete"
                  src={edi}
                  alt=""
                  style={{width:'22px'}}
                />
                <img
                  className="delete"
                  src={delet}
                  alt=""
                  
                />
              </td>
            </tr>

            <tr >
              <td>
                <img className="imageuser" src={userimg} alt="" />
              </td>
              <td>Ramzi</td>
              <td>Plumber</td>
              <td>4</td>
              <td>3</td>
              <td>
                 <img
                  className="delete"
                  src={edi}
                  alt=""
                  style={{width:'22px'}}
                />
                <img
                  className="delete"
                  src={delet}
                  alt=""
                  
                />
              </td>
            </tr>

            <tr >
              <td>
                <img className="imageuser" src={userimg} alt="" />
              </td>
              <td>Maher</td>
              <td>Lawyer</td>
              <td>7</td>
              <td>6</td>
              <td>
                 <img
                  className="delete"
                  src={edi}
                  alt=""
                  style={{width:'22px'}}
                />
                <img
                  className="delete"
                  src={delet}
                  alt=""
                  
                />
              </td>
            </tr>

            <tr >
              <td>
                <img className="imageuser" src={userimg} alt="" />
              </td>
              <td>Mohamed</td>
              <td>Veterinarian</td>
              <td>3</td>
              <td>2</td>
              <td>
                 <img
                  className="delete"
                  src={edi}
                  alt=""
                  style={{width:'22px'}}
                />
                <img
                  className="delete"
                  src={delet}
                  alt=""
                  
                />
              </td>
            </tr>
          

        </table>
    </div>
    <LineChart />
            
    </div>
  )
}

export default TabSeller