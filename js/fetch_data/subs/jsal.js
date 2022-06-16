/**
 * Fetch the subscriber count for JackSucksAtLife
 * Only mixerno.space estimations are supported, not YouTube
 */

const channelId = 'UCewMTclBJZPaNEfbf-qYMGA';
const baseUrl = 'https://mixerno.space/api/youtube-channel-counter/user'

const JSALSubData = () => {
    fetch(`${baseUrl}/${channelId}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        
        const textBox = document.getElementById('subCountText');

        if (data == "null") {
            textBox.innerHTML = "Invalid data";
            return;
        } else {
            const subCountEstimated = numeral(data.counts[0].count).format('0,0');
            console.log(subCountEstimated)
            textBox.innerHTML = subCountEstimated;
        }
    })
}

const fetchDate = () => {
    const d = new Date();
    const dy = d.getFullYear();
    const dm = (d.getMonth()) + 1;
    const dd = d.getDate()

    let dh = d.getHours()
    let dmin = d.getMinutes();
    let ds = d.getSeconds();
    let dmil = d.getMilliseconds();

    if (dh < 10) {dh = `0${dh}`}
    if (dmin < 10) {dmin = `0${dmin}`}
    if (ds < 10) {ds = `0${ds}`}
    if (dmil < 100) {if (dmil < 10) {dmil = `00${dmil}`} else {dmil = `0${dmil}`}}

    const timeBox = document.getElementById('timeUpdated');
    timeBox.innerHTML = `Time Updated: ${dh}:${dmin}:${ds}.${dmil} (${dd}/${dm}/${dy})`;
}

const JSALAPIData = () => {
    console.log("No YouTube API data yet :(")
}

JSALSubData();
JSALAPIData();
fetchDate();