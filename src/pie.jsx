import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React from 'react';



function Pie(props) {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const getHoursByName = (name) => {
        const hours = props.data.filter((value) => value['Name'] == name)
        let total = 0;

        let index = 0;
        while (index < hours.length) {
            total += parseFloat(hours[index]["Total Time (Hours)"]);
            index += 1;
        }
        return total;
    }

    const display = {
        labels: ["Snow", "Dan", "Grahith", "Tszfai", "Matt"],
        datasets: [{
            label: "Hours",
            data: [getHoursByName("Snow"),
            getHoursByName("Dan"),
            getHoursByName("Grahith"),
            getHoursByName("Tszfai"),
            getHoursByName("Matt")],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }],
        redraw: true
    }

    return (
        <Doughnut options={{
            aspectRatio: 1,
            // maintainAspectRatio: false,
        }} data={display} />
    )
}

export default Pie;