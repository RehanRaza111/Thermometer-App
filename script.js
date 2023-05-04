{/* <span id="temp" class="fa"></span></h1> */ }


const tempLoad = () => {
    let temp = document.getElementById('temp');
    let heading = document.querySelector('.heading');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "white";
    heading.style.color = "white";

    
    
    
    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "red";
        heading.style.color = "red";
        
        
    }, 1000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "yellow";
        heading.style.color = "yellow";
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "blue";
        heading.style.color = "blue";
    }, 3000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "darkgreen";
        heading.style.color = "darkgreen";
        
    }, 4000);
}


tempLoad();

setInterval(tempLoad, 5000); //it will continues run the function like digital clock








