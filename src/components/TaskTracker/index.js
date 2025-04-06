import {useState} from 'react'
import {MdDelete} from 'react-icons/md'
import {TiDeleteOutline} from 'react-icons/ti'
import {CiCircleCheck} from 'react-icons/ci'

import './index.css'

const TaskTracker = () => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])

  const onChecked = id => {
    setTaskList(
      taskList.map(each =>
        each.id === id ? {...each, isCheck: !each.isCheck} : each,
      ),
    )
  }

  const onChangeTask = event => {
    setTask(event.target.value)
  }

  const addTask = event => {
    event.preventDefault()
    const newTask = {
      id: taskList.length + 1,
      title: task,
      ischeck: false,
    }
    setTaskList(prevState => [...prevState, newTask])
    setTask('')
  }

  const deleteTask = id => {
    const updatedList = taskList.filter(each => each.id !== id)
    setTaskList(updatedList)
  }

  return (
    <div className="task-outer-container">
      <div className="task-inner-container">
        <h1 className="task-heading">Task Tracker</h1>
        <form onSubmit={addTask} className="form-container">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={onChangeTask}
            className="task-text"
          />
          <button type="submit" className="add-button">
            Add Task
          </button>
        </form>
        <ul>
          {taskList.length === 0 ? (
            <p className="no-task-heading">
              No tasks yet.Add one to get started!
            </p>
          ) : (
            taskList.map(each => (
              <li className="taskitem-container">
                <div className="button-container">
                  <button
                    type="button"
                    onClick={() => onChecked(each.id)}
                    className="check-button"
                  >
                    {each.isCheck ? (
                      <CiCircleCheck size={25} color="#006400" />
                    ) : (
                      <TiDeleteOutline size={25} color="red" />
                    )}
                  </button>
                  <p
                    className={
                      each.isCheck ? 'task-checked-title' : 'task-title'
                    }
                  >
                    {each.title}
                  </p>
                </div>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => deleteTask(each.id)}
                >
                  <MdDelete size={25} />
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default TaskTracker
