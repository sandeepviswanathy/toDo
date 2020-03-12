let itemCounter = 0

const addNewItemIcon = document.querySelector('#item-0');

const listItemClass = "list-item"

function incrItemCounter() {
    itemCounter += 1;
}

function decrItemCounter() {
    itemCounter -= 1;
}

function getItemCounte() {
    return itemCounter;
}



function createListItem() {
    incrItemCounter();
    let listItem = document.createElement('div');
    listItem.setAttribute("class", listItemClass);
    listItem.setAttribute("id", "item-" + getItemCounte());
    addEmptyMarker(listItem);
    addToDoItem(listItem);
    addNewItemIcon.parentNode.insertBefore(listItem, addNewItemIcon);
}

function addEmptyMarker(elem) {
    let marker = document.createElement('div');
    marker.setAttribute('class', 'marker');
    //marker.innerHTML = '<i class="far fa-square"></i>';
    let icon = document.createElement('i');
    icon.setAttribute('class', 'far fa-square');
    icon.setAttribute('onclick', 'toggleMarker()');
    icon.setAttribute('ontouchstart', 'toggleMarker()');
    marker.append(icon);
    elem.append(marker);
}

function addToDoItem(elem) {
    let item = document.createElement('div');
    item.setAttribute('class', 'todo-item');
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-times remove');
    icon.setAttribute('onclick', 'removeToDoItem()');
    icon.setAttribute('ontouchstart', 'removeToDoItem()');
    item.append(input);
    item.append(icon);
    elem.append(item);
}

function toggleMarker() {
    let elem = event.target;

    /*let unchecked = elem.classList.contains("fa-square");
    
    if (unchecked) {
        console.log("checked")
        elem.classList.remove("fa-square");
        elem.classList.add("fa-check-square");
    } else {
        console.log("un-checked")
        elem.classList.remove("fa-check-square");
        elem.classList.add("fa-square");
    }*/

    const dataIconAttr = elem.getAttribute('data-icon');
    if (dataIconAttr === "square") {
        console.log("un-checked");
        elem.setAttribute("data-icon", "check-square");
    } else {
        console.log("checked");
        elem.setAttribute("data-icon", "square");
    }

}

function removeToDoItem() {
    let listItem = event.target.closest(".list-item");
    listItem.remove();
}
