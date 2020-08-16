import React, { useState,useEffect } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid'

function App () {

  const [state, setState] = useState('')
  const [list, setList] = useState([])
  const LOCAL_STORAGE_KEY = "whateverman"



  const handelChange = e => {
      setState(
        e.target.value
      )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!state.trim()) return;
        setList([...list,{id:uuidv4(),title:state,editItem:false}]
        )
        setState('')
      }
      const clearList = ()=> {
        setList([]);
      }
      const handelDelete = (id) => {
          const filtredItems = [...list];
          const updatedList = filtredItems.filter(item => item.id !== id)
          setList(updatedList);

      }
      const handelEdit = (id) => {
        const filtredItems = [...list];
        const updatedList = filtredItems.filter(item => item.id !== id)
        const selectedItem = list.find(item =>item.id ===id)
        selectedItem.editItem =true;
        // selectedItem.id =id;
        setState(selectedItem.title)
        setList(updatedList,)

      }
      useEffect(() => {
        const storedItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedItem) setList(storedItem)
      }, [])
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list))
      }, [list])
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center"> todo Input </h3>
          <TodoInput item={state} handelChange={handelChange}
          handleSubmit={handleSubmit} editItem={list.editItem}
          />
          <TodoList list={list} clearList={clearList} handelDelete={handelDelete}
          handelEdit={handelEdit}/>
        </div>
      </div>

    </div>
  );
}

export default App;
