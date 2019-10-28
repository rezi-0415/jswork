function sort(methob){
    let origin = document.getElementById('origin').value
    let logs
    if(methob=='bubble'){
        logs = bubbleSort(origin)
    }else if(methob=='insert'){
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML = logs
}