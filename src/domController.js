class DOMController {
    mainContent = document.querySelector('.main-container');

    initMainPage() {
        const projectDiv = document.createElement('div');
        const listDiv = document.createElement('div');
    
        projectDiv.className = 'project';
        listDiv.className = 'list';
    
        this.mainContent.appendChild(projectDiv);
        this.mainContent.appendChild(listDiv);
    }
}




export {DOMController}