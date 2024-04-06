import pencilImage from '../src/images/pencil-outline.svg';
import { projects as projectLibrary } from './projects';
import { tasks as taskLibrary } from './tasks';

class DOMController {
    mainContent = document.querySelector('.main-container');

    initMainPage() {
        const projectDiv = document.createElement('div');
        const listDiv = document.createElement('div');
        const newProjectDiv = document.createElement('div');
        const newTaskDiv = document.createElement('div');
        const projectButton = document.createElement('button');
        const taskButton = document.createElement('button');
        const projectListDiv = document.createElement('div');
        const taskListDiv = document.createElement('div');
    
        projectDiv.className = 'projects';
        listDiv.className = 'list';
        newProjectDiv.className = 'new-project';
        newTaskDiv.className = 'new-task';
        projectButton.className = 'add-button';
        taskButton.className = 'add-button';
        projectListDiv.className = 'project-list';
        taskListDiv.className = 'task-list';
    
        this.mainContent.appendChild(projectDiv);
        this.mainContent.appendChild(listDiv);
        projectDiv.appendChild(newProjectDiv);
        listDiv.appendChild(newTaskDiv);
        newProjectDiv.appendChild(projectButton);
        newTaskDiv.appendChild(taskButton);
        projectDiv.appendChild(projectListDiv);
        listDiv.appendChild(taskListDiv);

        projectButton.textContent = 'Add Project';
        taskButton.textContent = 'Add Task';

        projectButton.onclick = this.displayProjectForm.bind(this);
        taskButton.onclick = this.displayTaskForm.bind(this);
    }

    displayProjectForm() {
        const projectListDiv = document.querySelector('.project-list')
        const formDiv = document.createElement('div');
        const formInput = document.createElement('input');
        const formButton = document.createElement('button');

        projectListDiv.prepend(formDiv);
        formDiv.appendChild(formInput);
        formDiv.appendChild(formButton);

        formDiv.className = 'input-project';

        formInput.placeholder = 'Project';
        formInput.type = 'text';
        formInput.ariaLabel = 'project';

        formButton.textContent = 'Done';
        formButton.addEventListener('click', () => {
            formDiv.remove();
            this.addProjectItem(formInput.value);
            projectLibrary.push(formInput.value);
        });
    }

    displayTaskForm() {
        const taskListDiv = document.querySelector('.task-list')
        const formDiv = document.createElement('div');
        const titleInput = document.createElement('input');
        const descriptionInput = document.createElement('input');
        const dueDateInput = document.createElement('input');
        const projectSelect = document.createElement('select');
        const prioritySelect = document.createElement('select');
        const normalPriority = document.createElement('option');
        const importantPriority = document.createElement('option');
        const optionalPriority = document.createElement('option');
        const doneButton = document.createElement('button');
        const cancelButton = document.createElement('button');

        taskListDiv.prepend(formDiv);
        formDiv.appendChild(titleInput);
        formDiv.appendChild(descriptionInput);
        formDiv.appendChild(dueDateInput);
        formDiv.appendChild(projectSelect);
        formDiv.appendChild(prioritySelect);
        formDiv.appendChild(doneButton);
        formDiv.appendChild(cancelButton);
        prioritySelect.appendChild(normalPriority);
        prioritySelect.appendChild(importantPriority);
        prioritySelect.appendChild(optionalPriority);

        titleInput.ariaLabel = 'title';
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleInput.placeholder = 'Title';

        descriptionInput.ariaLabel = 'description';
        descriptionInput.type = 'text';
        descriptionInput.name = 'description';
        descriptionInput.placeholder = 'Description';

        dueDateInput.ariaLabel = 'due-date';
        dueDateInput.type = 'date';

        projectSelect.title = 'project';
        projectSelect.id = 'project';

        prioritySelect.title = 'priority';
        prioritySelect.id = 'priority';

        doneButton.textContent = 'Done';
        doneButton.type = 'button';

        cancelButton.textContent = 'Cancel';
        cancelButton.type = 'button';

        importantPriority.value = 'important';
        importantPriority.textContent = 'Important';

        normalPriority.value = 'normal';
        normalPriority.textContent = 'Normal';

        optionalPriority.value = 'optional';
        optionalPriority.textContent = 'Optional';

        formDiv.className = 'task-form';

        cancelButton.addEventListener('click', () => {formDiv.remove()})
        doneButton.addEventListener('click', () => {
            formDiv.remove();
            this.addTaskItem(titleInput.value, descriptionInput.value, dueDateInput.value, projectSelect.value, prioritySelect.value);
            taskLibrary.push({
                'title' : titleInput.value,
                'description' : descriptionInput.value,
                'dueDateInput' : dueDateInput.value,
                'projectSelected' : projectSelect.value,
                'prioritySelected' : prioritySelect.value,
                'check' : false
            });
            console.log(taskLibrary)
        })
    }

    addProjectItem(project) {
        const projectListDiv = document.querySelector('.project-list');
        const projectItemDiv = document.createElement('div');

        projectItemDiv.className = 'project-item';
        projectItemDiv.textContent = project;

        projectListDiv.prepend(projectItemDiv);
    }

    addTaskItem(title, description, dueDate, project, priority) {
        const taskListDiv = document.querySelector('.task-list');
        const taskItemDiv = document.createElement('div');
        const titleP = document.createElement('p');
        const descriptionP = document.createElement('p');
        const dueDateP = document.createElement('p');
        const projectP = document.createElement('p');
        const priorityP = document.createElement('p');
        const checkbox = document.createElement('input');
        const editSvg = document.createElement('img');

        taskItemDiv.className = 'task';

        titleP.textContent = title;
        titleP.className = 'title';

        descriptionP.textContent = description;
        descriptionP.className = 'description';

        dueDateP.textContent = dueDate;
        dueDateP.className = 'due-date';

        projectP.textContent = project;
        projectP.className = 'project';

        priorityP.textContent = priority;
        priorityP.className = 'priority';

        checkbox.type = 'checkbox';
        checkbox.ariaLabel = 'check';
        checkbox.className = 'checkbox';

        editSvg.src = pencilImage;
        editSvg.alt = 'pencil';

        taskItemDiv.appendChild(titleP);
        taskItemDiv.appendChild(descriptionP);
        taskItemDiv.appendChild(dueDateP);
        taskItemDiv.appendChild(projectP);
        taskItemDiv.appendChild(priorityP);
        taskItemDiv.appendChild(checkbox);
        taskItemDiv.appendChild(editSvg);

        taskListDiv.prepend(taskItemDiv);
    }
}




export {DOMController}