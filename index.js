document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskCounter = document.getElementById('task-counter');
  
    let completedTasks = 0;
  
    const initialTasks = [
      'Implementar tela de listagem de tarefas',
      'Criar endpoint para cadastro de tarefas',
      'Implementar protótipo da listagem de tarefas'
    ];
  
    function updateCounter() {
      taskCounter.textContent = `Tarefas concluídas: ${completedTasks}`;
    }
  
    function createTaskItem(taskName) {
      const li = document.createElement('li');
      li.classList.add('task-item');
  
      const span = document.createElement('span');
      span.classList.add('task-name');
      span.textContent = taskName;
  
      const button = document.createElement('button');
      button.textContent = 'Concluir';
  
      button.addEventListener('click', () => {
        if (!li.classList.contains('completed')) {
          li.classList.add('completed');
          button.textContent = '✔️';
          completedTasks++;
          updateCounter();
        }
      });
  
      li.appendChild(span);
      li.appendChild(button);
      taskList.appendChild(li);
    }
  
    initialTasks.forEach(task => createTaskItem(task));
  
    updateCounter();
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskName = taskInput.value.trim();
      if (taskName !== '') {
        createTaskItem(taskName);
        taskInput.value = '';
      }
    });
  });