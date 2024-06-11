let timeFunction = () => {
    let time = new Date();
    let hours = document.querySelector(".hour");
    let mint = document.querySelector(".mint");
    let sec = document.querySelector(".sec");
    let timeHours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    let timeMint = time.getMinutes();
    let timeSec = time.getSeconds();
    hours.textContent = (timeHours < 10 ? "0" : "") + timeHours;
    mint.textContent = (timeMint < 10 ? "0" : "") + timeMint;
    sec.textContent = (timeSec < 10 ? "0" : "") + timeSec;

}
setInterval(timeFunction, 1000)
const dateElement = document.getElementById("date");
        const date = new Date(  ); 
        const options = { weekday: 'long', month: 'long', day: 'numeric' };
        dateElement.textContent = date.toLocaleDateString("en-US", options);