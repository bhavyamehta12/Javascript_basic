const fs = require("fs");
const readline = require("readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function showMenu() {
    let choice;

    do {
        console.log(`
╔══════════════════════════════╗
║         TODO MANAGER         ║
╚══════════════════════════════╝

1. Add Todo
2. View Todos
3. View Todo
4. Update Todo
5. Complete Todo
6. Delete Todo
7. Exit
`);

        choice = await rl.question("Enter your choice: ");

        switch (Number(choice)) {

            case 1:
                await addTodo();
                break;

            case 2:
                await viewTodos();
                break;

            case 3:
                await viewTodo();
                break;

            case 4:
                await updateTodo();
                break;

            case 5:
                await completeTodo();
                break;

            case 6:
                await deleteTodo();
                break;

            case 7:
                console.log("Exiting Todo Manager...");
                break;

            default:
                console.log("Invalid input. Please choose 1-7.");
        }

    } while (Number(choice) !== 7);

    rl.close();
}



async function addTodo() {

    const title = await rl.question("Enter Todo Title: ");

    const data = fs.readFileSync("todos.json", "utf-8");
    const todos = JSON.parse(data);

    const newTodo = {
        id: todos.length + 1,
        title: title,
        completed: false
    };

    todos.push(newTodo);

    fs.writeFileSync(
        "todos.json",
        JSON.stringify(todos, null, 2)
    );

    console.log(`Todo "${title}" added successfully!`);
}



async function viewTodos() {

    const data = fs.readFileSync("todos.json", "utf-8");

    const todos = JSON.parse(data);

    if (todos.length === 0) {
        console.log("Todos Empty");
        return;
    }

    console.log(`
────────────────────────────
        ALL TODOS
────────────────────────────
`);

    todos.forEach((todo) => {

        console.log(`ID: ${todo.id}`);
        console.log(`Title: ${todo.title}`);
        console.log(
            `Status: ${todo.completed ? "Completed" : "Pending"}`
        );

        console.log("----------------------------");
    });
}



async function viewTodo() {

    const id = await rl.question("Enter Todo ID: ");

    const todoId = Number(id);

    const data = fs.readFileSync("todos.json", "utf-8");

    const todos = JSON.parse(data);

    if (todos.length === 0) {
        console.log("Todos Empty");
        return;
    }

    const foundTodo = todos.find(
        (todo) => todo.id === todoId
    );

    if (!foundTodo) {
        console.log("Todo not found");
        return;
    }

    console.log(`
────────────────────────────
        TODO DETAILS
────────────────────────────
`);

    console.log(`ID: ${foundTodo.id}`);
    console.log(`Title: ${foundTodo.title}`);
    console.log(
        `Status: ${foundTodo.completed ? "Completed" : "Pending"}`
    );

    console.log("----------------------------");
}



async function updateTodo() {

    const id = await rl.question("Enter Todo ID: ");

    const todoId = Number(id);

    const data = fs.readFileSync("todos.json", "utf-8");

    const todos = JSON.parse(data);

    if (todos.length === 0) {
        console.log("Todos Empty");
        return;
    }

    const foundTodo = todos.find(
        (todo) => todo.id === todoId
    );

    if (!foundTodo) {
        console.log("Todo not found");
        return;
    }

    console.log(`
Current Todo
ID: ${foundTodo.id}
Title: ${foundTodo.title}
Status: ${foundTodo.completed ? "Completed" : "Pending"}
`);

    const newTitle = await rl.question(
        "Enter New Title: "
    );

    foundTodo.title = newTitle;

    fs.writeFileSync(
        "todos.json",
        JSON.stringify(todos, null, 2)
    );

    console.log(
        `Todo "${newTitle}" updated successfully!`
    );
}

async function completeTodo() {

    const id = await rl.question("Enter Todo ID: ");

    const todoId = Number(id);

    const data = fs.readFileSync("todos.json", "utf-8");

    const todos = JSON.parse(data);

    if (todos.length === 0) {
        console.log("Todos Empty");
        return;
    }

    const foundTodo = todos.find(
        (todo) => todo.id === todoId
    );

    if (!foundTodo) {
        console.log("Todo not found");
        return;
    }

    if (foundTodo.completed) {
        console.log("Todo is already completed.");
        return;
    }

    foundTodo.completed = true;

    fs.writeFileSync(
        "todos.json",
        JSON.stringify(todos, null, 2)
    );

    console.log(
        `Todo "${foundTodo.title}" completed successfully!`
    );
}


async function deleteTodo() {

    const id = await rl.question("Enter Todo ID: ");

    const todoId = Number(id);

    const data = fs.readFileSync("todos.json", "utf-8");

    const todos = JSON.parse(data);

    if (todos.length === 0) {
        console.log("Todos Empty");
        return;
    }

    const foundTodo = todos.find(
        (todo) => todo.id === todoId
    );

    if (!foundTodo) {
        console.log("Todo not found");
        return;
    }

    console.log(`
Todo Found:
ID: ${foundTodo.id}
Title: ${foundTodo.title}
`);

    const confirmation = await rl.question(
        "Are you sure you want to delete this Todo? (y/n): "
    );

    if (confirmation.toLowerCase() !== "y") {
        console.log("Todo was not deleted.");
        return;
    }

    const updatedTodos = todos.filter(
        (todo) => todo.id !== todoId
    );

    fs.writeFileSync(
        "todos.json",
        JSON.stringify(updatedTodos, null, 2)
    );

    console.log("Todo deleted successfully!");
}

showMenu();