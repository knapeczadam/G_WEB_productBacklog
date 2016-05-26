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

function lengthIsLessThanFiftyCharacters(text)
{
    if (text.length <= 50)
    {
        return true;
    }
    else
    {
        alert('Title is too long! Maximum character is 50!');
        return false;
    }
}

function addItem()
{
    var date = new Date();

    var backlogChildLi = document.createElement("li"),
        backlogUL = document.getElementsByClassName("backlog");
    backlogChildLi.id = "bi"+date.getTime().toString();

    var orderBox = document.getElementById("itemOrder").value;
    var createOrderSpan = document.createElement("span");
    createOrderSpan.className = "order";
    backlogChildLi.appendChild(createOrderSpan);


    var createTitleSpan = document.createElement("span");
    var titleBox = document.getElementById("itemTitle").value;
    var titleSpanContent = document.createTextNode(titleBox);
    createTitleSpan.className = "title";
    createTitleSpan.appendChild(titleSpanContent);
    backlogChildLi.appendChild(createTitleSpan);




    var createStateSpan = document.createElement("span"),
        stateBox = document.getElementById("itemState").value,
        stateSpanContent = document.createTextNode(stateBox);
    createStateSpan.className = "state";
    createStateSpan.appendChild(stateSpanContent);
    backlogChildLi.appendChild(createStateSpan);


    var createEffortSpan = document.createElement("span"),
        effortBox = document.getElementById("itemEffort").value,
        effortSpanContent = document.createTextNode(effortBox);
    createEffortSpan.className = "effort";
    createEffortSpan.appendChild(effortSpanContent);
    backlogChildLi.appendChild(createEffortSpan);


    var createPrioritySpan = document.createElement("span"),
        priorityBox = document.getElementById("itemPriority").value,
        prioritySpanContent = document.createTextNode(priorityBox);
    createPrioritySpan.className = "priority";
    createPrioritySpan.appendChild(prioritySpanContent);
    backlogChildLi.appendChild(createPrioritySpan);


   var createTaskUl = document.createElement("ul");
   createTaskUl.className = "task";
    backlogChildLi.appendChild(createTaskUl);


   var createTaskChildLi = document.createElement("li");
   createTaskChildLi.id = "bt"+date.getTime().toString();
    backlogChildLi.appendChild(createTaskChildLi);


   var createNameSpan = document.createElement("span"),
       nameSpanContent = document.createTextNode(" De szép bauxit honnan van?!");
   createNameSpan.className = "name";
    createNameSpan.appendChild(nameSpanContent);
    createTaskChildLi.appendChild(createNameSpan);


   var createTaskStateSpan = document.createElement("span"), 
       taskStateSpanContent = document.createTextNode(" Keddet szeretem a szombatban!");
   createTaskStateSpan.className = "taskState";
   createTaskStateSpan.appendChild(taskStateSpanContent);
    createTaskChildLi.appendChild(createTaskStateSpan);

    if(isEmpty(titleBox) && lengthIsLessThanFiftyCharacters(titleBox))
    {
        orderBox = orderInc++;
        backlogUL[0].appendChild(backlogChildLi);
    }
}

function saveBacklogItem(locStorage, id) 
{
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