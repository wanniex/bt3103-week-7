import { Bar } from 'vue-chartjs'
import db from '../../firebase.js'

export default {
    extends: Bar,
    data: function () {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                    label: "Total Number of each",

                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                    data: []
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Total Number of each dish'
                },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0
                        }
                    }]
                }
            }
        }
    },
    methods: {
        fetchItems: function () {
            db.collection('orders').get().then(querySnapShot => {
                querySnapShot.forEach(doc => {
                    for (let i = 0; i < doc.data().shimin.length; i++) {
                        if (!this.datacollection.labels.includes(doc.data().shimin[i].name)) {
                            this.datacollection.labels.push(doc.data().shimin[i].name);
                            this.datacollection.datasets[0].data.push(doc.data().shimin[i].qty);
                        } else {
                            var dish = doc.data().shimin[i].name;
                            var pos = this.datacollection.labels.indexOf(dish);
                            this.datacollection.datasets[0].data[pos] = this.datacollection.datasets[0].data[pos] + doc.data().shimin[i].qty;
                        }
                    }
                })
                console.log(this.datacollection.datasets[0].data);
                this.renderChart(this.datacollection, this.options)
            })
        }
    },
    created() {
        this.fetchItems()
    }
}
