function sort(methob){
    let origin = document.getElementById('origin').Value
    let logs
    console.log(methob)
    if(methob=='bubble'){
        logs = bubbleSort(origin)
    }
    showDiv = document.getElementById('Anim')
    logValues = logs.Values(
    console.log(logValues.next())
    setTimeout("showLog(logValues,showDiv)",50)
}