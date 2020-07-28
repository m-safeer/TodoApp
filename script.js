var list = document.getElementById("list");

function addTodo(){
    var todoInput = document.getElementById("todo");
    if(todoInput.value.length > 0){

    // List Creation
    var li = document.createElement("li");
    li.setAttribute("class","my-3");
    var p = document.createElement("p")
    p.setAttribute("class","itempara");
    var liText = document.createTextNode(todoInput.value);
    list.appendChild(li);
    li.appendChild(p);
    p.appendChild(liText)

    // Edit Button Creation
    var editBtn = document.createElement("i");
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.setAttribute("class","fa fa-pencil-square-o fa-2x text-success mx-2")
    li.appendChild(editBtn);

    // Delete Button Creation
    var delBtn = document.createElement("i");
    delBtn.setAttribute("onclick","delList(this)");
    delBtn.setAttribute("class","fa fa-trash-o fa-2x text-success mx-2")
    li.appendChild(delBtn);

    todoInput.value = "";
    }

    else{
        alert("Enter Todo Task First")
       
    }
}

    // Delete All Function
    function delAll(){
        list.innerHTML ="";
    }

    // Delete Button Function
    function delList(e){
        e.parentNode.remove();
    }

    // Edit Button Function
    function editItem(e){

        // Clear Everything
        var valueText = e.parentNode.firstChild.firstChild.nodeValue;
        var value = e.parentNode;
        value.innerHTML = "";

        // Input Creation
        var input = document.createElement("input");
        input.setAttribute("type","text")
        input.setAttribute("class", "form-control")

        // Div Creation
        var div = document.createElement("div")
        div.setAttribute("class","itempara")

        value.appendChild(div);
        div.appendChild(input);
        input.value = valueText;

        // Update Button Creation
        var upd_btn = document.createElement("i");
            upd_btn.setAttribute("onclick","updItem(this)");
            upd_btn.setAttribute("class","fa fa-check-circle-o fa-2x text-success mx-2")
            value.appendChild(upd_btn);

        // Cancel Button Creation
        var cancelBtn = document.createElement("i")
            cancelBtn.setAttribute("onclick","delList(this)");
            cancelBtn.setAttribute("class","fa fa-trash-o fa-2x text-success mx-2");
            value.appendChild(cancelBtn);
    }

        // Update Button Function
        function updItem(e){
            var upd_valText = e.parentNode.firstChild.firstChild.value;
            var upd_val = e.parentNode;
            upd_val.innerHTML = "";

            // P Creation
            var upd_p = document.createElement("p")
            upd_p.setAttribute("class","itempara");
            var upd_pText = document.createTextNode(upd_valText);
            upd_val.appendChild(upd_p);
            upd_p.appendChild(upd_pText)

            // Edit Button Creation
            var upd_editBtn = document.createElement("i");
            upd_editBtn.setAttribute("onclick","editItem(this)");
            upd_editBtn.setAttribute("class","fa fa-pencil-square-o fa-2x text-success mx-2")
            upd_val.appendChild(upd_editBtn);

            // Delete Button Creation
            var upd_delBtn = document.createElement("i");
            upd_delBtn.setAttribute("onclick","delList(this)");
            upd_delBtn.setAttribute("class","fa fa-trash-o fa-2x text-success mx-2")
            upd_val.appendChild(upd_delBtn);
        }
