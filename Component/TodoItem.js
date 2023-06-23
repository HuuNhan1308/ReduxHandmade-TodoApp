import html from "../core.js";

function TodoItem(task, index, editIndex) {
    return html`
    <li class="${task.completed && 'completed'} ${index == editIndex && 'editing'}">
        <div class="view">
            <input class="toggle" 
                ${task.completed && 'checked'} 
                type="checkbox"
                onclick="console.log([this])"
                onchange="dispatch('TOGGLE', ${index})"
            >
            <label
                ondblclick="dispatch('EDIT', ${index})"    
            >
            ${task.title}
            </label>
            <button 
                class="destroy" 
                onclick="dispatch('DELETE', ${index})">
            </button>
        </div>
        <input 
            class="edit" 
            value="${task.title}"
            onkeyup="event.keyCode === 13 && dispatch('FINISH_EDIT', this.value.trim())"
            onblur="dispatch('FINISH_EDIT', this.value.trim())"
        >
    </li>
    `;
}

export default TodoItem;