import React from 'react'
import { VictoryPie } from 'victory-pie';

const Chart = () => {
  const myData = [
    { x: "PHP", y: 900 },
    { x: "Python", y: 400 },
    { x: "Javascript", y: 300 },
  ];
  return (
    <div> <div className="charts">
    {/* <div className="charts__left">
      <div className="charts__left__title">
        <div>
          <h1>Daily Reports</h1>
          <p>Cupertino, California, USA</p>
        </div>
        <div >
      <VictoryPie
        data={myData}
        colorScale={["blue", "yellow", "red"]}
        radius={100}
        labels={({ datum }) => ` ${datum.x}`}
        labelPosition={({ index }) => index
          ? "centroid"
          : "centerAngle"
        }
        labelPlacement={({ index }) => index
          ? "parallel"
          : "vertical"
        }
      />
    </div>      </div>
      <div id="apex1"></div>
    </div> */}

    <div className="charts__right">
      <div className="charts__right__title">
        <div>
          <h1>Stats Reports</h1>
          <p>Popular Category</p>
        </div>
        {/* <i className="fa fa-usd" aria-hidden="true"></i> */}
      </div>

      <div className="charts__right__cards">
        <div className="card1">
          <h1>Auto services</h1>
          {/* <p>Car</p> */}
        </div>

        <div className="card2">
          <h1>Orders</h1>
          <p>7</p>
        </div>

        <div className="card3">
          <h1>Seller</h1>
          <p>2</p>
        </div>

        
      </div>
    </div>
  </div></div>
  )
}

export default Chart