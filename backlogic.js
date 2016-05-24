var orderInc = 0;

function addItem()
{
    var date = new Date();

    var backlogChildLi = document.createElement("li"),
        backlogUL = document.getElementsByClassName("backlog");
    backlogChildLi.id = "bi"+date.getTime().toString();
    backlogUL[0].appendChild(backlogChildLi);

    orderInc++;
    var createOrderSpan = document.createElement("span"),
        orderContent = document.createTextNode(orderInc);
    createOrderSpan.className = "order";
    createOrderSpan.appendChild(orderContent);
    backlogChildLi.appendChild(createOrderSpan);


    var createTitleSpan = document.createElement("span"),
        titleSpanContent = document.createTextNode(" Krumpli kapálás");
    createTitleSpan.className = "title";
    createTitleSpan.appendChild(titleSpanContent);
    backlogChildLi.appendChild(createTitleSpan);


   var createStateSpan = document.createElement("span"),
       stateSpanContent = document.createTextNode(" ,fel sincsen szántva, HE!");
   createStateSpan.className = "state";
   createStateSpan.appendChild(stateSpanContent);
    backlogChildLi.appendChild(createStateSpan);

   var createEffortSpan = document.createElement("span"),
       efforSpanContent = document.createTextNode(" ÁÁáá mácská kálápbán...");
   createEffortSpan.className = "effort";
    createEffortSpan.appendChild(efforSpanContent);
    backlogChildLi.appendChild(createEffortSpan);


   var createPrioritySpan = document.createElement("span"),
       prioritySpanContent = document.createTextNode(" Brother louie  louie  louie! ");
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
       nameSpanContent = document.createTextNode(" AZ ÁNGYOD TÉRGYÉT! ");
   createNameSpan.className = "name";
    createNameSpan.appendChild(nameSpanContent);
    createTaskChildLi.appendChild(createNameSpan);

   var createTaskStateSpan = document.createElement("span"), 
       taskStateSpanContent = document.createTextNode(" Sehogy se nyúl ketonbeverő!");
   createTaskStateSpan.className = "taskState"
   createTaskStateSpan.appendChild(taskStateSpanContent);
    createTaskChildLi.appendChild(createTaskStateSpan);

    // document.getElementById("backlog").appendChild(backlogChildLi).appendChild(createOrderSpan);
}