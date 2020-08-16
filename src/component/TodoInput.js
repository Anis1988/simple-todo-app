import React from 'react'
import {FcTodoList} from 'react-icons/fc'

export default function TodoInput ({item,handelChange,handleSubmit, editItem}) {

        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit} >
                  <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-red text-white">
                            <FcTodoList/>
                        </div>
                     </div>
                    <input type="text" className="form-control"
                    placeholder="Add Todo Item" onChange={handelChange} value= {item}  />
                 </div>
                   <button type="submit" className="btn btn-block btn-primary mt-3">
                         {editItem ? "Edit item" : "Add item"}</button>
               </form>
            </div>
        )
    }

