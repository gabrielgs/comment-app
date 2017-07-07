import React, {Component} from 'react'
import './LineChart.css'
import Chart from 'chart.js'
import {Line} from 'react-chartjs-2'

class LineChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listComments: JSON.parse(localStorage.getItem('comments')) || []
    }
  }

  getData() {
    const comments = this.state.listComments
    
    function orderBySex(sex) {
      return comments.filter( comment => comment.sex == sex )
    }

    function getNumberOfComments(sex) {
      let numberComments = [
        null, null, null, null, null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null, null, null, null, null
      ];

      const commentsBySex = orderBySex(sex)

      const arrHour = commentsBySex.map( comment => {
        const commentDate = new Date(comment.createdAt);
        return commentDate.getHours();
      })

      arrHour.sort( (a, b) => a - b)
      const lastHour = arrHour[arrHour.length-1]

      arrHour.reduce( (prev, curr) => {
        if (prev !== curr) {
          numberComments[curr] = 1
        }else {
          numberComments[curr]++
        }

        return (prev = curr)

      }, 0)

      debugger
      for(let i = 0; i < lastHour; i++) {
        numberComments[i] = numberComments[i] === null ? 0 : numberComments[i]
      }

      return numberComments
    }

    let data = {
      labels: [
        "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
        "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"
      ],
      datasets: [{
        label: "Hombres",
        backgroundColor: '#B0D0D3',
        borderColor: '#B0D0D3',
        data: getNumberOfComments('masculino'),
        fill: false
      },
      {
        data: getNumberOfComments('femenino'),
        label: 'Mujeres',
        backgroundColor: '#BDDF67',
        borderColor: '#BDDF67',
        fill: false
      }]
    }

    return data;
  }

  render() {

    return (
      <div>
        {/*<Nav />*/}
        <main className="main">
          <section className="container center">
            <h3>This is my Chart</h3>
            <Line data={this.getData()} width={200} height={200}/>
          </section>
        </main>
      </div>
    )  
  }
}

export default LineChart