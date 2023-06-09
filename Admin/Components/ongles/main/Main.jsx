import React from 'react'
import Card from '../../Card'
import Chart from '../../Chart'
import "../main/Main.css"
import { VictoryPie } from "victory-pie";
 

import userimg from "../../../../img/mman.png"

const Main = () => {
   
    return (
        <div>
            <Card />
            <Chart />
           
            <div className='lists'>
                <div className='listLeft'>
                    <h2> Last Messages</h2>
                    <div className='msg'>
                        <div className="messageadmin-data">
                            <img src={userimg} className='messageadmin-data-img' alt="" />
                            <span className="messageadmin-data-name" >Ahmed</span>

                        </div>
                        <div className="messageadmin ">
                            <p>Hi Vincent,how are you? How is the project coming along?
                            </p>
                            <button>Reply</button>
                        </div>

                    </div>
                    <div className='msg'>
                        <div className="messageadmin-data">
                            <img src={userimg} className='messageadmin-data-img' alt="" />
                            <span className="messageadmin-data-name" >Aymen</span>

                        </div>
                        <div className="messageadmin ">
                            <p>Hi Vincent,how are you? How is the project coming along?
                            </p>
                            <button>Reply</button>
                        </div>

                    </div>
                    <div className='msg'>
                        <div className="messageadmin-data">
                            <img src={userimg} className='messageadmin-data-img' alt="" />
                            <span className="messageadmin-data-name" >Meher</span>

                        </div>
                        <div className="messageadmin ">
                            <p>Hi Vincent,how are you? How is the project coming along?
                            </p>
                            <button>Reply</button>
                        </div>

                    </div>

                </div>
                <div className='listright'>
                    <h2> Last Seller</h2>
                    <div className='listseller'>
                        <div className="itemlist">
                            <table className='tableSeller'>
                                <tr>
                                    <td> <img src={userimg} className='itemlist-img' alt="" /> 
                                       </td> <td><span className="itemlist-name" >Mohamed</span>
                                        </td>
                                    <td> <div className="itemlist-cat" >veterinarian</div></td>
                                </tr>
                                <tr>
                                    <td> <img src={userimg} className='itemlist-img' alt="" /> 
                                       </td> <td><span className="itemlist-name" >Meher</span>
                                        </td>
                                    <td> <div className="itemlist-cat" >Lawyer</div></td>
                                </tr>
                                <tr>
                                    <td> <img src={userimg} className='itemlist-img' alt="" /> 
                                       </td> <td><span className="itemlist-name" >Olia</span>
                                        </td>
                                    <td> <div className="itemlist-cat" >Olia</div></td>
                                </tr>
                                <tr>
                                    <td> <img src={userimg} className='itemlist-img' alt="" /> 
                                       </td> <td><span className="itemlist-name" >Ramzi</span>
                                        </td>
                                    <td> <div className="itemlist-cat" >Plumber</div></td>
                                </tr>
                                <tr>
                                    <td> <img src={userimg} className='itemlist-img' alt="" /> 
                                       </td> <td><span className="itemlist-name" >Olia</span>
                                        </td>
                                    <td> <div className="itemlist-cat" >Olia</div></td>
                                </tr>
                                <tr>
                                    <td> <img src={userimg} className='itemlist-img' alt="" /> 
                                       </td> <td><span className="itemlist-name" >Olia</span>
                                        </td>
                                    <td> <div className="itemlist-cat" >Olia</div></td>
                                </tr>
                                <tr>
                                    <td> <img src={userimg} className='itemlist-img' alt="" /> 
                                       </td> <td><span className="itemlist-name" >Olia</span>
                                        </td>
                                    <td> <div className="itemlist-cat" >Olia</div></td>
                                </tr>
                            </table>
     
                           

                        </div>
                      
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Main