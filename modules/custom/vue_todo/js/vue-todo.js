var markup = `
    <div id="app">

      <div>
        <span>New:</span><input v-model="newItem.text" name="text" type="text" />
        <span>Due:</span><input v-model="newItem.due" name="due" type="date" />
        <button v-on:click="addNew">Add</button>
      </div>

      <hr/>

      <div v-for="(todo, idx) in todos">

        <div>

          <h4>
            <strike v-if="todo.completed">{{todo.text}}</strike>
            <span v-else>{{todo.text}}</span>
          </h4>

          <p><small>Due: {{todo.due}}</small></p>

          <div>
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

