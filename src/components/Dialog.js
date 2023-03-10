import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState, useEffect } from "react";

const Dialog = ({ open, onCloseModal, handleSubmit, users, singleTask }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        classNames={{
          modal: "customModal",
        }}
        center
      >
        <p className="create-task">Create/Edit Task</p>
        <form>
          <input
            type="text"
            name="message"
            placeholder="Enter Your Message"
            className="enter-your-message"
          />
          <div className="dropdown">
            <div className="dropdown-1">
              <label>Assign To</label>
              <select name="assignedTo">
                <option value="">Choose User</option>

                {users?.map((user) => (
                  <option value={user?.id} key={user?.id}>
                    {user?.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="dropdown-1">
              <label>Priority</label>
              <select name="priority">
                <option value="">Choose Priority</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
          </div>
          <div className="date-group">
            <label>Due Date</label>
            <input type="date" name="dueDate" />
          </div>
          <button className="add-task-btn">Submit Task</button>
        </form>
      </Modal>
    </div>
  );
};
export default Dialog;
