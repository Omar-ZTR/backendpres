import React from 'react'
import userimg from "../../../../img/mman.png"
import "./tabClent.css"
import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import LineChart from './LineChart';
import delet from '../../../../img/delete.png';
const TabClient = () => {
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        title: 'My Line Chart',
        data: [65, 59, 80, 81, 56, 55, 40],
    };
    return (
        <div className='Customer' >
            {/* <LineChart labels={chartData.labels} title={chartData.title} data={chartData.data} /> */}
            
            <div className='tabClient'>
                <h2 className='tit'>Table of Customers:</h2>
                <table>
                    <tr>
                        <th></th>
                        <th>Name</th>

                        <th>Number of Orders</th>

                        <th></th>
                    </tr>

                    <tr >
                        <td>
                            <img className="imageuser" src={userimg} alt="" />
                        </td>
                        <td>Aymen</td>

                        <td>6</td>

                        <td>
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
                        <td>Karim</td>

                        <td>2</td>

                        <td>
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
                        <td>Omar</td>

                        <td>4</td>

                        <td>
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
                        <td>Ahmed</td>

                        <td>1</td>

                        <td>
                            <img
                                className="delete"
                                src={delet}
                                alt=""

                            />
                        </td>
                    </tr>


                </table>
            </div><LineChart />
            </div>
    )
}

export default TabClient