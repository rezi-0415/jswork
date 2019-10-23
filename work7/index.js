function sort(methob){
    let origin = document.getElementById('origin').Value
    let logs
    console.log(methob)
    if(methob=='bubble'){
        logs = bubbleSort(origin)
    }else if(methob=='insert'){
        logs = inserSort(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML = logs
}