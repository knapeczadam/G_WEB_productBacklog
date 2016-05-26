var orderInc = 0;



function isEmpty(text)
{
    if(text.length !== 0 && text.trim().length !== 0)
    {
        return true;
    }
    else
    {
        alert("You Should fill all fields!");
        return false;
    }
}

function addItem()
{
    var date = new Date();

    var backlogChildLi = document.createElement("li"),
        backlogUL = document.getElementsByClassName("backlog");
    backlogChildLi.id = "bi"+date.getTime().toString();
    backlogUL[0].appendChild(backlogChildLi);

    var orderBox = document.getElementById("itemOrder").value;
    orderBox = orderInc++;
    var createOrderSpan = document.createElement("span");
    createOrderSpan.className = "order";
    backlogChildLi.appendChild(createOrderSpan);


    var titleBox = document.getElementById("itemTitle").value;
    if(isEmpty(titleBox))
    {
        var createTitleSpan = document.createElement("span"),
            titleSpanContent = document.createTextNode(titleBox);
        createTitleSpan.className = "title";
        createTitleSpan.appendChild(titleSpanContent);
        backlogChildLi.appendChild(createTitleSpan);
    }


    var stateBox = document.getElementById("itemState").value;
    if(isEmpty(stateBox))
    {
        var createStateSpan = document.createElement("span"),
            stateSpanContent = document.createTextNode(stateBox);
        createStateSpan.className = "state";
        createStateSpan.appendChild(stateSpanContent);
        backlogChildLi.appendChild(createStateSpan);
    }


    var effortBox = document.getElementById("itemEffort").value;
    if(isEmpty(effortBox))
    {
        var createEffortSpan = document.createElement("span"),
            efforSpanContent = document.createTextNode(effortBox);
        createEffortSpan.className = "effort";
        createEffortSpan.appendChild(efforSpanContent);
        backlogChildLi.appendChild(createEffortSpan);
    }


    var priorityBox = document.getElementById("itemPriority").value;
    if(isEmpty(priorityBox))
    {
        var createPrioritySpan = document.createElement("span"),
            prioritySpanContent = document.createTextNode(priorityBox);
        createPrioritySpan.className = "priority";
        createPrioritySpan.appendChild(prioritySpanContent);
        backlogChildLi.appendChild(createPrioritySpan);
    }


   var createTaskUl = document.createElement("ul");
   createTaskUl.className = "task";
    backlogChildLi.appendChild(createTaskUl);


   var createTaskChildLi = document.createElement("li");
   createTaskChildLi.id = "bt"+date.getTime().toString();
    backlogChildLi.appendChild(createTaskChildLi);


   var createNameSpan = document.createElement("span"),
       nameSpanContent = document.createTextNode(" AZ ÁNGYOD TÉRGYÉT! ");
   createNameSpan.className = "name";
    createNameSpan.appendChild(nameSpanContent);
    createTaskChildLi.appendChild(createNameSpan);


   var createTaskStateSpan = document.createElement("span"),
       taskStateSpanContent = document.createTextNode(" Sehogy se nyúl ketonbeverő!");
   createTaskStateSpan.className = "taskState";
   createTaskStateSpan.appendChild(taskStateSpanContent);
    createTaskChildLi.appendChild(createTaskStateSpan);
}

function saveBacklogItem(locStorage, id) {
    var newOtem = locStorage.getItem(id);
    var title = document.querySelector("#itemTitle").value;
    var orderSelect = document.querySelector("#itemState");
    var selectedState = orderSelect.options[orderSelect.selectedIndex].value;
    var description = document.querySelector("#itemDescription").value;
    var acceptance = document.querySelector("#itemAcceptance").value;
    var effort = document.querySelector("#itemEffort").value;
    var priority= document.querySelector("#itemPriority").value;
    newItem.title = title;
    newItem.status = selectedState;
    newItem.des = description;
    newItem.acceptance = acceptance;
    newItem.effort = effort;
    newItem.priority = priority;
    locStorage.setItem(id, newItem);
    window.open("backlog.html");
}


document.getElementById("newitem").addEventListener("click", newItemHandler);
function newItemHandler()
{
  window.location.href = "edit.html";
}
