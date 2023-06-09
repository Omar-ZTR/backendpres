import React from 'react'
import userimg from "../../../../img/mman.png"
import "../Requests/Request.css"
const Requests = () => {
    return (
        <div className='requests'>
            <h2>Requests</h2>
            <div className='req'>
                <div className="request-data">
                    <img src={userimg} className='request-data-img' alt="" />
                    <span className="request-data-name" >Ahmed</span>

                </div>
                <div className="request ">
                    <p>Hi Vint,how are you? How is the project coming along?
                    </p>
                    <button>Reply</button>
                </div>

                <hr />
            </div>
            <div className='req'>
                <div className="request-data">
                    <img src={userimg} className='request-data-img' alt="" />
                    <span className="request-data-name" >Aymen</span>

                </div>
                <div className="request ">
                    <p>Hi Vint,how are you? How is the project coming along?
                    </p>
                    <button>Reply</button>
                </div>

                <hr />
            </div>
            <div className='req'>
                <div className="request-data">
                    <img src={userimg} className='request-data-img' alt="" />
                    <span className="request-data-name" >Meher</span>

                </div>
                <div className="request ">
                    <p>Hi Vint,how are you? How is the project coming along?
                    </p>
                    <button>Reply</button>
                </div>

                <hr />
            </div>
            <div className='req'>
                <div className="request-data">
                    <img src={userimg} className='request-data-img' alt="" />
                    <span className="request-data-name" >Ramzi</span>

                </div>
                <div className="request ">
                    <p>Hi Vint,how are you? How is the project coming along?
                    </p>
                    <button>Reply</button>
                </div>

                <hr />
            </div>
            <div className='req'>
                <div className="request-data">
                    <img src={userimg} className='request-data-img' alt="" />
                    <span className="request-data-name" >Asma</span>

                </div>
                <div className="request ">
                    <p>Hi Vint,how are you? How is the project coming along?
                    </p>
                    <button>Reply</button>
                </div>

                <hr />
            </div>
        </div>
    )
}

export default Requests