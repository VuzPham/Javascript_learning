
function logger(log, isAlert = false, type = 'log') {
    console.log(log);
    if (isAlert){
        return alert(log);
    }
    console[type](log);
}

logger('message');
