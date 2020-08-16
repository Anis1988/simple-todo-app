import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

export default function TodoItem({item, handelDelete,handelEdit}) {

        return (
          <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
              <h6>{item.title}</h6>
              <div className="todo-icon">
                <span className="mx-2 text-success">
                <FaEdit onClick={handelEdit}></FaEdit>
                </span>

                <span className="mx-2 text-danger">
                <FaTrashAlt onClick={handelDelete} className="fas fa-trash"></FaTrashAlt>
                </span>
              </div>
          </li>
        )
    }

