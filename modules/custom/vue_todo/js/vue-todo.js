var markup = `
    <div id="app" class="vue-todo-container">

      <div>
        <span>New:</span><input v-model="newItem.text" name="text" type="text" />
        <span>Due:</span><input v-model="newItem.due" name="due" type="date" />
        <button v-on:click="addNew">Add</button>
      </div>

      <hr/>

      <div v-for="(todo, idx) in todos" class="vue-todo-margins">

        <div class="vue-todo-items">

          <h4 class="vue-todo-margins vue-todo-inline">
            <strike v-if="todo.completed">{{todo.text}}</strike>
            <span v-else>{{todo.text}}</span>
          </h4>

          <p class="vue-todo-inline">
            <small>Due: {{todo.due}}</small>
          </p>

          <div class="vue-todo-inline">
            <button v-if="!todo.completed"
                    v-on:click="done(idx)">
                    Done
            </button>
            <button v-else
                    v-on:click="undone(idx)">
                    Undo
            </button>
            <a v-on:click="remove(idx)" href='#'>
              <span>&times;</span>
            </a>
          </div>

        </div>

      </div>

    </div>
`;

