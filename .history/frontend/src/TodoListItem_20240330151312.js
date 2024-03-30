class TodoItem {
    constructor(title = '', priority = '', description = '', dueDate = '') {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
    }

    editTitle(title) {
        this.title = title;
    }

    editPriority(priority) {
        this.priority = priority;
    }

    editDescription(description) {
        this.description = description;
    }

    editDueDate(dueDate) {
        this.dueDate = dueDate;
    }
}

export default TodoItem;
