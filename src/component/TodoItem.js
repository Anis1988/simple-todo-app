import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import "../index.css";

export default function TodoItem({ item, handelDelete, handelEdit }) {
  const [done, setDone] = useState(false);
  return (
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
      <h6 className={done ? "done" : ""}>{item.title}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success">
          <FaEdit onClick={handelEdit}></FaEdit>
        </span>

        <span className="mx-2 text-danger">
          <FaTrashAlt
            onClick={handelDelete}
            className="fas fa-trash"
          ></FaTrashAlt>
        </span>

        <span className="mx-2 text-success">
          <MdDone onClick={() => setDone(!done)}></MdDone>
        </span>
      </div>
    </li>
  );
}
