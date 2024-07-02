import React, { useState } from 'react';
import Card from './card';
import Edit from './Edit';

function TopBar({ todo, setTodo, completed, setCompleted }) {
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [selectedTodo, setSelectedTodo] = useState(null);

  const handleDrop = (e) => {
    let filter = e.target.innerText;
    setCompleted(filter === 'Completed' ? ' Completed' : 'Not completed');
  };

  const handleClick = () => {
    if (selectedTodo) {
      setTodo((prevTodos) =>
        prevTodos.map((t) =>
          t.id === selectedTodo.id ? { ...t, title, description } : t
        )
      );
      setSelectedTodo(null);
    } else {
      let id = todo.length ? todo[todo.length - 1].id + 1 : 1;
      let newArray = [...todo];
      newArray.push({
        id,
        title,
        description,
      });
      setTodo(newArray);
    }

    setTitle('');
    setDescription('');
  };
  

  return (
    <>
      <h1 className="text-center HeaderColor">My Todo</h1>
      <div className="container overflow-hidden text-center">
        <div className="row gx-5">
          <div className="col-3.5">
            <div className="p-3">
              <input
                placeholder="Name"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '30%', padding: '8px', marginBottom: 10 }}
              />
            </div>
          </div>
          <div className="col-3.5">
            <div className="p-3">
              <input
                placeholder="Todo Description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ width: '30%', padding: '8px', marginBottom: 10 }}
              />
            </div>
          </div>
          <div className="col-3.5">
            <div className="">
              <button onClick={handleClick}>Add</button>
            </div>
          </div>
        </div>
      </div>
      {selectedTodo && (
        <Edit
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          onClick={handleClick}
        />
      )}
      <hr ></hr>
      <div className="d-flex justify-content-between align-items-center p-5">
        <div>
          <h2 className="fw-bold text-decoration-underline">My Todo's</h2>
        </div>
        <div>
          <h4 className="fw-bold">
            Status Filter :{' '}
            
            <span>
              {' '}
              <div className="btn-group">
                <button
                  className="btn btn-success dropdown-toggle"
                  type=""
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  {completed}
                </button>
                <ul className="dropdown-menu">
                 <li> <a onClick={handleDrop}>Completed</a> </li>
                 <hr></hr>
                 <li> <a onClick={handleDrop}>NOT Completed</a> </li>
                </ul>
              </div>
            </span>
          </h4>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {todo.map((e, i) => (
            <Card
              key={i}
              completed={completed}
              setCompleted={setCompleted}
              todo={e}
              setTodo={setTodo}
              onEdit={() => {
                setSelectedTodo(e);
                setTitle(e.title);
                setDescription(e.description);
              }}
            />
          ))}
        </div>
      </div>
      
    
    </>
  );
}

export default TopBar;