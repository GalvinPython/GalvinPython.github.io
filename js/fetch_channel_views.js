// This file will be cleaned up in the next update

function removeElements() {
    document.getElementById('removeOnSuccessfulLoad').outerHTML = '';
    document.getElementById('showOnBadLoad').outerHTML = '';
}

function removeOnBadLoad() {
    document.getElementById('main').outerHTML = '';
}

function fetchProfilePicture(abbr) {
    document.getElementById('profilePicture').src = `/imgs/profiles/${abbr}.webp`
}

function getAbbr() {
    return [
        "jsal",
        "jsas",
        "jmw",
        "jsag",
        "gs",
        "jsac",
        "i",
        "jsae",
        "jsapup",
        "rickx",
        "tb420",
        "epic",
        "ssoas",
        "ssoa",
        "ejsafc",
        "oldjmw"
    ];
}

function getId() {
    return [
        "UCewMTclBJZPaNEfbf-qYMGA",
        "UCxLIJccyaRQDeyu6RzUsPuw",
        "UCyktGLVQchOpvKgL7GShDWA",
        "UCd15dSPPT-EhTXekA7_UNAQ",
        "UC_7K5gOJJ3urQR53ltIck8w",
        "UCUXNOmIdsoyd5fh5TZHHO5Q",
        "UCrZKnWgOaYTTc7sc1KsVXZw",
        "UCqx-my2rOoQuEOHKNNgNppw",
        "UCpCJRHoggwXQhuFbW4gjM_w",
        "UCF9R3Ln-u52vUdSO-pFdETw",
        "UCbu2qTa75eyjwCKOugX8F6A",
        "UChLNLQ6r-aGrIFWo_1A9tKQ",
        "UCJ4w2lMYOnBwsgQdFgbLqIg",
        "UCgKbwxXkz95TYVcpvpkCjag",
        "UCwhiRo2CSPODulancVnWopQ",
        "UCBCuUUPr6Lo8RmmhVFySoiQ"
    ];
}

function generateColor() {
    color_r = Math.floor(Math.random() * 255);
    color_g = Math.floor(Math.random() * 255);
    color_b = Math.floor(Math.random() * 255);
    return `${color_r},${color_g},${color_b}`;
}

const baseUrl = "https://api-v6.mixerno.space/youtube-channel-counter/live"

const graphColor = generateColor();
console.log(graphColor)

const search = window.location.search.split('=')
console.log(search)
let abbr = search[1]
try {
    if (abbr.charAt(abbr.length-1) == '/') {
        abbr = abbr.slice(0, abbr.length-1)
    }
} catch(err) {
    removeOnBadLoad()
}
console.log(abbr)

if (abbr == "jsal" || abbr == "jsas" || abbr == "jmw" || abbr == "jsag" || abbr == "gs" || abbr == "jsac" || abbr == "i" || abbr == "jsae" || abbr == "jsapup" || abbr == "rickx" || abbr == "tb420" || abbr == "epic" || abbr == "ssoas" || abbr == "ssoa" || abbr == "ejsafc" || abbr == "oldjmw") {
    removeElements()
    fetchProfilePicture(abbr)
    setInterval(getSubData, 4000)
}

const channelIds = getId();
const channelAbbrs = getAbbr();
const channelId = getIdfromAbbr();
console.log(channelId)
document.getElementById('channelId').innerHTML = `@${channelId}`

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
            backgroundColor: `rgba(${graphColor},0.65)`,
            borderColor: `rgba(${graphColor},1)`,
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

function getIdfromAbbr() {
    for (let i = 0; i < channelAbbrs.length; i++) {
        if (channelAbbrs[i] == abbr) {
            return channelIds[i]
        }
    }
}

function getSubData() {
    fetch(`${baseUrl}/${channelId}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const channelNameText= document.getElementById('channelName')
        const textBox = document.getElementById('subCountText');
        const textBoxAPI = document.getElementById('subCountTextAPI');
        const timeBox = document.getElementById('timeUpdated');

        // Get channel name
        channelNameText.innerHTML = data.name;

        // Get subscriber count (estimated)
        let subCountEstimated = data.views;
        subChartVar.data.datasets[0].data.push(subCountEstimated);
        textBox.innerHTML = subCountEstimated;
        console.log(subCountEstimated);

        // Get subscriber count (API)
        let subCountAPI = data.views_api;
        textBoxAPI.innerHTML = subCountAPI;
        
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

    if (dh < 10) {dh = `0${dh}`}
    if (dmin < 10) {dmin = `0${dmin}`}
    if (ds < 10) {ds = `0${ds}`}

    return `${dh}:${dmin}:${ds}`;
}

setInterval(getSubData, 4000)
