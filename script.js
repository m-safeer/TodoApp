var list = document.getElementById("list");

    function addTodo(){
    
        var todoInput = document.getElementById("todo");
        if(todoInput.value.length > 0){

            // List Creation
        var li = document.createElement("li");
        var liText = document.createTextNode(todoInput.value);
        li.setAttribute("class","my-3")
        li.appendChild(liText);
        list.appendChild(li);

        // List Delete Button
        var delbtn = document.createElement("button");
        var delbtnText = document.createTextNode("Delete");
        delbtn.appendChild(delbtnText);
        delbtn.setAttribute("onclick","delList(this)");
        delbtn.setAttribute("class"," btn btn-success btn-sm mx-1")
        li.appendChild(delbtn);

        // List Edit Button
        var editbtn = document.createElement("button");
        var editbtnText = document.createTextNode("Edit");
        editbtn.appendChild(editbtnText);
        editbtn.setAttribute("onclick","editItem(this)");
        editbtn.setAttribute("class","btn btn-success btn-sm mx-1")
        li.appendChild(editbtn);

        todoInput.value = "";
        }

        else{
            alert("Enter Something");
        }
    }

// Delete All Function
function delAll(){
    list.innerHTML ="";
}

// List Delete Button Function
function delList(e){
    e.parentNode.remove();
}

// List Edit Button Function
function editItem(e){
    var value = e.parentNode.firstChild.nodeValue;
    var newVal = prompt("Enter", value);
    e.parentNode.firstChild.nodeValue = newVal;
}