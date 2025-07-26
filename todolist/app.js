todolist = [];
let req = prompt("enter your request:");
while (true) {
    if (req == "quit") {
        console.log("Qutting!!!!!!")
        break;
    }
    if (req == "list") {
        console.log("__________________________");
        for (task of todolist) {
            console.log(task);

        }
        console.log("_______________________________");
    } else if (req == "add") {
        let task = prompt("enter the task you want to add:");
        todolist.push(task);
        console.log("task has been added");

    } else if (req == "delete") {
        let task = prompt("enter the task you want to delete");
        del = parseInt(task);
        todolist.splice(del, 1);
        console.log("task has been deleted");

    }
    req = prompt("enter your request:");

}