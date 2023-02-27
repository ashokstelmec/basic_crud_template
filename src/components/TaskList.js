import React, { useState, useEffect } from "react";
import { AUTH_TOKEN } from "../utils";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Dialog from "./Dialog";

const TaskList = () => {
  return (
    <div>
      <div className="list-of-tasks">
        <div>List of Tasks</div>
        <div>
          <select>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
          <button className="task-btn">
            <i className="fa fa-plus"></i> Add Task
          </button>
        </div>
      </div>
      {tasks?.map((el, i) => {
        return (
          <table key={i}>
            <tbody>
              <tr className="table-row">
                <td className="message-data">{el.message}</td>
                <td className="message-name table-data">{el.assigned_name}</td>
                <td className="table-data priority">{el.priority}</td>
                <td className="creating-date table-data">{el.created_on}</td>
                <td className="edit-icon table-data">
                  <FiEdit />
                </td>
                <td className="delete-icon table-data">
                  <MdOutlineDelete />
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
      {/* <Dialog
        open={open}
        onCloseModal={onCloseModal}
        handleSubmit={handleSubmit}
        users={users}
        singleTask={task}
      /> */}
    </div>
  );
};

export default TaskList;
