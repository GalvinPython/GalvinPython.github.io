const nextTarget = 10000000
let target = document.getElementById('nextMilestone')

function updateTarget() {
    target.innerHTML = nextTarget
}

setTimeout(updateTarget, 1000)