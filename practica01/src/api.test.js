const request = require('supertest');
const app = require('./api');  // Asegúrate de que esta ruta sea correcta y que tu aplicación Express esté configurada correctamente

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
  expect(response.body.title).toBe('nueva tarea');  // Corregí la comparación del título con el valor enviado en la solicitud
});

test('PUT /tasks/:id updates an existing task', async () => {
  // Antes de ejecutar esta prueba, asegúrate de que haya una tarea con el ID 'task_id_here' en tu sistema
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
});

test('DELETE /tasks/:id deletes an existing task', async () => {
  // Antes de ejecutar esta prueba, asegúrate de que haya una tarea con el ID 'task_id_here' en tu sistema
  const taskId = 'task_id_here';

  const response = await request(app)
    .delete(`/tasks/${taskId}`);

  expect(response.status).toBe(204);
  // Puedes agregar más afirmaciones según sea necesario
});
