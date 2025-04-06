import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todos, deleteTodo, onEditTask} = props
  const {id, title} = todos

  const [isEdit, setIsEdit] = useState(false)
  const [editTitle, setEditTitle] = useState(title)
  const [isCheck, setIsCheck] = useState(false)

  const onDelete = () => {
    deleteTodo(id)
  }

  const onChangeTitle = event => {
    setEditTitle(event.target.value)
  }

  const saveTodo = () => {
    setIsEdit(false)
    onEditTask(id, editTitle)
  }

  const editTodo = () => {
    setIsEdit(true)
  }

  const onClickCheckbox = event => {
    setIsCheck(event.target.checked)
  }

  const isChecked = isCheck ? 'check-item' : ''

  return (
    <li className="li-container">
      {isEdit ? (
        <div className="button-container">
          <input type="text" value={editTitle} onChange={onChangeTitle} />
          <button type="button" className="button" onClick={saveTodo}>
            Save
          </button>
        </div>
      ) : (
        <div className="button-container">
          <input
            className="check-box"
            checked={isCheck}
            onChange={onClickCheckbox}
            type="checkbox"
            id={id}
          />
          <p className={`title ${isChecked}`}>{title}</p>
          <button type="button" className="button" onClick={editTodo}>
            Edit
          </button>
        </div>
      )}
      <button type="button" onClick={onDelete} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
