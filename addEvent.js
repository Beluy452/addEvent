function addEvent(selector,event,callback) {
    var items = document.querySelectorAll(selector);
    for(var i = 0; i < items.length; i++){
        items[i].addEventListener(event,callback);
    }
}