
var backlog = {

    addItem: function (obj) {

        var date = new Date();

        var backlogChildLi = document.createElement("li"),
            backlogUL = document.getElementsByClassName("backlog");
        backlogUL[backlogUL.length-1].appendChild(backlogChildLi);

        var createOrderSpan = document.createElement("span"),
            orderSpanContent = document.createTextNode(obj.order);
        createOrderSpan.className = "order";
        backlogChildLi.appendChild(createOrderSpan);

        var createTitleSpan = document.createElement("span"),
            titleSpanContent = document.createTextNode(obj.title);
        createTitleSpan.className = "title";
        createTitleSpan.appendChild(titleSpanContent);
        backlogChildLi.appendChild(createTitleSpan);

        var createStateSpan = document.createElement("span"),
            stateSpanContent = document.createTextNode(obj.state);
        createStateSpan.className = "state";
        createStateSpan.appendChild(stateSpanContent);
        backlogChildLi.appendChild(createStateSpan);

        var createEffortSpan = document.createElement("span"),
            efforSpanContent = document.createTextNode(obj.effort);
        createEffortSpan.className = "effort";
        createEffortSpan.appendChild(efforSpanContent);
        backlogChildLi.appendChild(createEffortSpan);


        var createPrioritySpan = document.createElement("span"),
            prioritySpanContent = document.createTextNode(obj.priority);
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
        createTaskStateSpan.className = "taskState";
        createTaskStateSpan.appendChild(taskStateSpanContent);
        createTaskChildLi.appendChild(createTaskStateSpan);
    },

    clickEvent: function () {
      window.open("edit.html", "_self");
    },

    initialize: function () {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.startsWith("bi")) {
                backlog.addItem(localStorage.getItem(localStorage.key(i)));
                localStorage.setItem("order", i+1);
            }
        }
        var newItemButton = document.querySelector("#newitem");
        newItemButton.addEventListener("click", backlog.clickEvent);
    }

};

var edit = {
    saveItem: function () {
        var isEmpty = function (text)
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
        };

        var lengthIsLessThanFiftyCharacters = function (text)
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
        };
        var date = new Date();
        var orderBox = document.getElementById("itemOrder").value;
        var id = "bi"+date.getTime().toString();
        var titleBox = document.getElementById("itemTitle").value;
        var stateBox = document.getElementById("itemState");
        var selectedState = stateBox.options[stateBox.selectedIndex].value;
        var effortBox = document.getElementById("itemEffort").value;
        var priorityBox = document.getElementById("itemPriority").value;
        var desc = document.getElementById("itemDescription").value;
        var accept = document.getElementById("itemAcceptance").value;
        if(isEmpty(titleBox) && lengthIsLessThanFiftyCharacters(titleBox))
        {
            var itemJsonObject = {"id": orderBox, "order": orderBox, "title": titleBox, "status": stateBox, "des": itemDescription,
                "acceptance": "never late", "priority": priorityBox, "effort": effortBox, "tasks": {"task": [{"id": "bt1", "backlogItemId": "bi1",
                    "title": "title of the task", "description": "desc", "status": "todo"}, {"id": "bt2", "backlogItemId": "bi1",
                    "title": "title of the task", "description": "desc", "status": "in progress"}, {"id": "bt3", "backlogItemId": "bi1",
                    "title": "title of the task","description": "desc", "status": "done"}]}};

            localStorage.setItem(id, itemJsonObject);
            localStorage.setItem("order", orderBox++);
            window.open("backlog.html", "_self");
        }
    },

    initialize: function () {
        var order = document.getElementById("itemOrder");
        order.value = ++localStorage["order"];
        var saveButton = document.getElementById("saveBtn");
        saveButton.addEventListener("click", edit.saveItem);
    }

};
