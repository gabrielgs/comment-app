import React, {Component} from 'react'
import './LineChart.css'
import Chart from 'chart.js'

class LineChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commentByDate:[]
    }


  }

  componentDidMount() {
    const ctx = document.getElementById('myChart');
    const data = {
      labels: [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
        "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
      ],
      datasets: [{
        label: "Comentarios po hora",
        backgroundColor: '#B0D0D3',
        borderColor: '#B0D0D3',
        data: [30, 50, 100, 10.4, 30.2],
        fill: false
      }]
    }

    const lineChart = new Chart(ctx, {
      type: 'line',
      data: data
    })
  }

  showDate() {
    const comments = JSON.parse(localStorage.getItem('comments'));

    let arrDates = comments.map( (comment) => {
      let commentDate = new Date(comment.createdAt);
      return commentDate.getHours();
    });

    return arrDates;
  }

  render() {
    return (
      <div className="col s10 center-align">
        <h1>This is my Chart</h1>
        <section className="containerCanvas">
          <canvas id="myChart" className="LineChart"></canvas>
        </section>
        <p>{this.showDate()}</p>
      </div>
    )  
  }
}

export default LineChart