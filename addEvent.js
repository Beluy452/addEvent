function addEvent(selector,event,callback) {
    var items = document.querySelectorAll(selector);
    var itemLen = items.length;
    while(itemLen--) {
        items[itemLen].addEventListener(event,callback);
    }
}