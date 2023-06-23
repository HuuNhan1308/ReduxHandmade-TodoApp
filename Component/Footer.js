import html from "../core.js";
import { connect } from "../store.js";


function Footer({ todos, filters, filter }) {
    return html`
    <footer class="footer">
        <span class="todo-count">
            <strong>${todos.filter(todo => !todo.completed).length}</strong>
            item left
        </span>
        <ul class="filters">
            ${Object.keys(filters).map(type => html`
                <li>
                    <a 
                        class="${filter === type && 'selected'}" 
                        href="#/"
                        onclick="dispatch('CHANGE_FILTER', '${type}')"
                    >
                        ${type[0].toUpperCase() + type.slice(1)}
                    </a>
                </li>` 
            )}
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        ${todos.some(filters.completed) && html `
            <button 
                class="clear-completed"
                onclick="dispatch('CLEAR_COMPLETED')"
            >Clear completed</button>
        `}
    </footer>
    `;
}

export default connect()(Footer);