const channelId = 'UCqx-my2rOoQuEOHKNNgNppw';
const baseUrl = 'https://mixerno.space/api/youtube-channel-counter/user'

// Create chart
var ctx_live = document.getElementById('subChartCanvas').getContext('2d');
var subChartVar = new Chart(ctx_live, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Subscriber Count',
            fill: true,
            data: [],
            backgroundColor: 'rgba(206,146,14,255)',
            borderColor: 'rgba(236,17,241,255)',
            borderWidth: 2
        }]
    },
    options: {
        transitions: {
            show: {
                animations: {
                    x: {
                        from: 0
                    },
                    y: {
                        from: 0
                    }
                }
            },
            hide: {
                animations: {
                    x: {
                        to: 0
                    },
                    y: {
                        to: 0
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

let SubData = () => {
    fetch(`${baseUrl}/${channelId}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const textBox = document.getElementById('subCountText');
        const timeBox = document.getElementById('timeUpdated');

        // Get subscriber count
        let subCountEstimated = data.counts[3].count;
        subChartVar.data.datasets[0].data.push(subCountEstimated);
        let subCountEstimatedFormated = numeral(subCountEstimated).format('0,0');
        textBox.innerHTML = subCountEstimatedFormated;
        console.log(subCountEstimatedFormated);
        
        // Update time
        let timeUpdate = fetchDate();
        subChartVar.data.labels.push(timeUpdate);
        timeBox.innerHTML = `Time Updated: ${timeUpdate}`;

        subChartVar.update()
    })
}

const fetchDate = () => {
    const d = new Date();

    let dh = d.getHours()
    let dmin = d.getMinutes();
    let ds = d.getSeconds();
    let dmil = d.getMilliseconds();

    if (dh < 10) {dh = `0${dh}`}
    if (dmin < 10) {dmin = `0${dmin}`}
    if (ds < 10) {ds = `0${ds}`}
    if (dmil < 100) {if (dmil < 10) {dmil = `00${dmil}`} else {dmil = `0${dmil}`}}

    return `${dh}:${dmin}:${ds}.${dmil}`;
}

// Preview 17
const APIData = () => {
    console.log("No YouTube API data yet :(")
}

//SubData();
APIData();
setInterval(SubData, 5000)