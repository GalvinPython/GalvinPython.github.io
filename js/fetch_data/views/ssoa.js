const channelId = 'UCgKbwxXkz95TYVcpvpkCjag';
const baseUrl = 'https://mixerno.space/api/youtube-channel-counter/user'

// Create chart
var ctx_live = document.getElementById('subChartCanvas').getContext('2d');
var viewChartVar = new Chart(ctx_live, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Subscriber Count',
            fill: true,
            data: [],
            backgroundColor: 'rgba(171,68,187,1)',
            borderColor: 'rgba(185,134,193,1)',
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

let ViewData = () => {
    fetch(`${baseUrl}/${channelId}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const textBox = document.getElementById('subCountText');
        const textBoxAPI = document.getElementById('subCountTextAPI');
        const timeBox = document.getElementById('timeUpdated');

        // Get view count (estimated)
        let viewCountEstimated = data.counts[3].count;
        viewChartVar.data.datasets[0].data.push(viewCountEstimated);
        let viewCountEstimatedFormatted = numeral(viewCountEstimated).format('0,0');
        textBox.innerHTML = viewCountEstimatedFormatted;
        console.log(viewCountEstimatedFormatted);
        
        // Get view count (API)
        let viewCountAPI = data.counts[4].count;
        let viewCountAPIFormatted = numeral(viewCountAPI).format('0,0');
        textBoxAPI.innerHTML = viewCountAPIFormatted;

        // Update time
        let timeUpdate = fetchDate();
        viewChartVar.data.labels.push(timeUpdate);
        timeBox.innerHTML = `Time Updated: ${timeUpdate}`;

        viewChartVar.update()
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

setInterval(ViewData, 4000)