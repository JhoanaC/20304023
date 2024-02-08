const tasksRepository = require("./tasksRepository.js");


describe("pruebas", ()=>{


    test("Create a task", ()=>{
        const newTask = {id: 3, name: "Task 3", completed: false};

        tasksRepository.create(newTask);
        const tasks = tasksRepository.getAll();

        expect(tasks.length).toBe(3);
        expect(tasks.find(t => t.id === 3)).toEqual(newTask);
    });

    test("Update a task", ()=>{
        const taskToUpdate = {id: 1, name: "Task 1 updated", completed: true};

        tasksRepository.update(taskToUpdate);
        const tasks = tasksRepository.getAll();

        expect(tasks.length).toBe(2);
        expect(tasks.find(t => t.id === 1)).toEqual(taskToUpdate);
    });

    test("Delete a task", ()=>{
        const taskIdToDelete = 1;

        tasksRepository.delete(taskIdToDelete);
        const tasks = tasksRepository.getAll();

        expect(tasks.length).toBe(1);
        expect(tasks.find(t => t.id === taskIdToDelete)).toBeUndefined();
    });

});