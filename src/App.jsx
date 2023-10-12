import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
       <div
    class=" d-flex align-items-center justify-content-center flex-column"
   
  >
    <h3>Todo App</h3>
    <div class="d-flex align-items-center mb-3">
      <div class="form-group mr-3 mb-0">
        <input
          type="text"
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Enter a task here"
        />
      </div>
      <button
        type="button"
        class="btn btn-primary mr-3"
      >
        Save
      </button>
      <button type="button" class="btn btn-warning" >
        Get Tasks
      </button>
    </div>
   
  </div>
    </>
  )
}

export default App
