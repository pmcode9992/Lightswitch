let bulbswitch = document.getElementById('toggle')
let bulbstate = document.getElementById('bs')
let blinker = document.getElementById('blinker')
let on = false
let bswitch = false
bulbswitch.addEventListener('click', function(){
    if(on){
        bulbstate.setAttribute('src' ,'imgs/off.jpeg')
        on = false
        }
        else{
        bulbstate.setAttribute('src', 'imgs/on.jpeg')
        on = true
        }
        
})
    blinker.addEventListener('click',function(){
    if(bswitch ==false){
        let speed = prompt('enter speed in miliseconds')
        myInterval = setInterval(function(){
            if(on){
                bulbstate.setAttribute('src' ,'imgs/off.jpeg')
                on = false
                }
                else{
                bulbstate.setAttribute('src', 'imgs/on.jpeg')
                on = true
                }
         },speed*100)
         bswitch = true
    }
    else{
        clearInterval(myInterval)
        bulbstate.setAttribute('src' ,'imgs/off.jpeg')
        on = false
        bswitch = false
    }
})
