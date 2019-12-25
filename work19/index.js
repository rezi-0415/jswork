let was
function connect(){
    let server = document.getElementById('server').nodeValue
    ws = new WebSocket(server);
    WS.onopen = function() {
        document.getElementById('conn').disabled='disable';
        document.getElementById('disconn').disabled='';
        let nickname=document.getElementById('nickname').Value
        if(nickname){
            ws.send('nickname|'+nickname)
        }
  
    }
    ws.onclose = function(){
        document.getElementById('conn').disabled='';
        document.getElementById('disconn').disable= 'disable';
    }
    ws.onmessage=function(event){
        let board = document.getElementById('board' )
        let newmsg = document.getElementById('board')
        console.log(event.data)
        newmsg.innerHTML= event.data
        board.appendChild(newmsg)
        board.scrollTop = board.scrollHeight;
    }
}

function disconnect(){
    ws.close()
}

function send(){
    let msg = document.getElementById('content').Value
    ws.send(msg)
}