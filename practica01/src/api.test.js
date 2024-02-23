const request = require('supertest');
const app = require('./api'); 

test('POST /tasks creates a new task', async () => {
  const newTask = {
    title: 'nueva tarea',
    description: 'esta es una nueva tarea',
    completed: false
  };

  const response = await request(app)
    .post('/tasks')
    .send(newTask);

  expect(response.status).toBe(201);
  expect(response.body.title).toBe('New Task');
  
});

test('PUT /tasks/:id updates an existing task', async () => {
  // 
  const taskId = 'task_id_here';
  const updatedTask = {
    title: 'Updated Task',
    description: 'This task has been updated',
    completed: true
  };

  const response = await request(app)
    .put(`/tasks/${taskId}`)
    .send(updatedTask);

  expect(response.status).toBe(200);
  expect(response.body.title).toBe('Updated Task');
  // 
});

test('DELETE /tasks/:id deletes an existing task', async () => {
  // 
  const taskId = 'task_id_here';

  const response = await request(app)
    .delete(`/tasks/${taskId}`);

  expect(response.status).toBe(204);
  // Add more assertions as needed
});