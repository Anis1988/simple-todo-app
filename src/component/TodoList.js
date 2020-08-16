import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({list, clearList,handelDelete, handelEdit}) {

       return (
           <ul className="list-group my-5">

                 <h3 className="text-capitalize text-center">todo list</h3>
                        {list.map(item => {
                           return <TodoItem handelDelete={()=>handelDelete(item.id)}
                           handelEdit={()=>handelEdit(item.id)}  key={item.id} item={item} />
                        })}

                    <button onClick={clearList}type="button" className="btn btn-danger btn-block text-capitalize mt-5"> clear list</button>
           </ul>
        )
    }

