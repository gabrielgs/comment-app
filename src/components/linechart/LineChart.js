import React, {Component} from 'react'
import './LineChart.css'
import Chart from 'chart.js'
import {Line} from 'react-chartjs-2'

class LineChart extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  updateCanvas() {
    let comments = this.props.listComments
    let arrDates = comments.map( (comment) => {
      let commentDate = new Date(comment.createdAt);
      return commentDate.getHours();
    });

    let numberComments = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    
    arrDates.sort();

    arrDates.reduce(function(prev, curr) {
      if( prev !== curr ) {
        numberComments[curr] = 1
      }else {
        numberComments[curr]++;
      }

      return (prev = curr)
    }, undefined)

    let data = {
      labels: [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
        "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
      ],
      datasets: [{
        label: "Comentarios por hora",
        backgroundColor: '#B0D0D3',
        borderColor: '#B0D0D3',
        data: numberComments,
        fill: false
      }]
    }

    return data;
  }

  render() {

    return (
      <div className="row">
        <h1>This is my Chart</h1>
        <Line data={this.updateCanvas()} width={400} height={300}/>
      </div>
    )  
  }
}

export default LineChart