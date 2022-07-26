/**
 * JackSucksAtLife
 * To be ran on the channel info page
 */

/* Calculate difference between current date and join date */
const d = new Date();
const dd = d.getDay();
const dm = (d.getMonth())+1;
const dy = d.getFullYear();

const d1 = new Date(`${dd}/${dm}/${dy}`)
const d2 = new Date("10/03/2013")

const timeDiff = Math.abs(d1.getTime() - d2.getTime());
const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

console.log(diffDays);

let daysJoined = document.getElementById('daysSinceJoin')
daysJoined.innerHTML = `10 Mar 2013 (${diffDays} days ago)`