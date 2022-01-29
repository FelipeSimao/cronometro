    

var counter = document.querySelector('h2')
    
var hh = 0
var mm = 0 
var ss = 0

//verificando se ja existe um tempo salvo
if(localStorage.hh){

     hh = localStorage.hh
     mm = localStorage.mm
     ss = localStorage.ss
    
}else{
    
     hh = 0
     mm = 0 
     ss = 0
}

counter.innerText = `${hh}:${mm}:${ss}`

var stopwatch
const time = 1000 


//iniciando contador
function play(){
    document.querySelector('#play').disabled = true
    stopwatch = setInterval(()=> { timer() }, time)
}


//pausando contador
function pause(){
        clearInterval(stopwatch)
}


//parando contador e zerando valores 
function stop(){
    clearInterval(stopwatch)

    counter.innerText = '00:00:00'

    localStorage.setItem('hh', 00)
    localStorage.setItem('mm', 00)
    localStorage.setItem('ss', 00)
    hh = 0
    mm = 0 
    ss = 0
    document.querySelector('#play').disabled = false
}

//salvando na memoria o tempo atual
function save(){

    localStorage.setItem('hh', hh)
    localStorage.setItem('mm', mm)
    localStorage.setItem('ss', ss)
    alert(`tempo salvo com sucesso `)
}


//iniciando e mostando contador 
function timer(){

    ss++

    if(ss == 60){
        ss = 0
        mm++
        
        if(mm== 60){
            mm = 0
            hh++
        }
    }

    let format = `${hh < 10 ? '0' + hh : hh}: ${mm < 10 ? '0' + mm : mm}: ${ss < 10 ? '0' + ss : ss}`
    counter.innerText = format
}
