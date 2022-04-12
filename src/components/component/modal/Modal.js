import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useState } from 'react';

import './modal.css';
import todosOperations from '../../../redux/todos/todos-operations';

const ModalWindow = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const dispatch = useDispatch();
  const addTodo = value => dispatch(todosOperations.addTodo(value));

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const value = e.target.todo.value;

    if (!value) {
      return toast.error('Add todo');
    }

    addTodo(value);
    form.reset();
    toast.success('Successfully added!');
    toggleModal();
  };

  return (
    <>
      <div className="addNewTodoContainer">
        <p>Add ToDo</p>
        <Button onClick={toggleModal} className="add-button ">
          +
        </Button>
      </div>
      <Modal
        show={showModal}
        onHide={toggleModal}
        backdrop={true}
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="form" onSubmit={handleSubmit}>
            <input
              autoFocus={true}
              placeholder="type something"
              className="input"
              type="text"
              name="todo"
            />
            <Button className="save-button" type="submit">
              Save
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalWindow;
