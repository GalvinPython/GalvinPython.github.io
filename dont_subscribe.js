var ctx_live = document.getElementById('subChart').getContext('2d'); //Assigns the chart a <div> with the ID 'subChart' 
var subChartVar = new Chart(ctx_live, { //Creates a new variable for the graph
    type: 'line', //Type of graph - In this case, creates a line graph
    data: {
        labels: [], //Times go in here along the X-Axis
        datasets: [{
            label: `Subscriber Count - Don't Subscribe`, //Appears at the top of the graph
            fill: true, //The area under the line will be filled
            data: [], //Number of subscribers go into this array up the Y-Axis
            backgroundColor:'rgba(0,255,247,0.65)', //The colour of the filled graph
            borderColor: 'rgba(13,135,255,1)', //The color of the line
            borderWidth: 2 //The width of the line/border
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false //Scale does not begin at zero
            }
        }
    }
});

let getSubscriberCount = () => {

    fetch(`https://beta.mixerno.space/api/youtube-subscriber-counter/channel/UC68DIXWCmetC8N5J_Kc5gjQ`) //Fetch the API data from Mixerno.Space (thanks StatCounts for telling me about this)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data); //Logs the API data
        timeUpdatedAPI = data.timestamp; 
        variableSubscriberCount = data.userList[0].stats.subscriberCount; //Finding the subscriber count
        console.log("Subscribers: " + variableSubscriberCount); //Logging subscriber count into the console
        subChartVar.data.datasets[0].data.push(variableSubscriberCount) //Adds the subscriber count into the graph's data

        //Update time
        var newDate = new Date(timeUpdatedAPI) //Adds the timestamp (UNIX Epoch) from the API into a new variable
        var UpdatedDate = newDate.toLocaleTimeString() //Converts the UNIX Epoch into a human-friendly timestamp
        document.getElementById('updateTime').innerHTML  = UpdatedDate; //Puts the time into a <div> with ID 'updateTime' 
        subChartVar.data.labels.push(UpdatedDate); //Pushes data to graph data
        subChartVar.update() //Updates the graph

        numeralVariableSubscriberCount = numeral(variableSubscriberCount).format('0,0')
        document.getElementById('subBox').innerHTML = numeralVariableSubscriberCount; //Applying numeral subscriber count to the subBox 
    })
}

getSubscriberCount() //Calls out function

console.log("Hi!") //Hi

setInterval(getSubscriberCount, 5000) //Refreshes the function and updates the graph and API data after 5 seconds