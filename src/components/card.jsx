import React from 'react';


function Cards({ todo, setTodo, onEdit }) {
  let Delete = () => {
    setTodo((prevTodo) =>
      prevTodo.filter((item) => item.id !== todo.id)
    );
  };
  const handleDrop = (e) => {
    let status = e.target.innerText;
    setCompleted(status === 'Completed' ? ' Completed' : 'Not completed');
  };

  return (
    <div className="col-10 col-lg-4 col-md-5 mx-auto">
      <div className="card" style={{ width: '18rem', fontWeight: 500, margin: 10 }}>
        <div className="card-body">
          <h5 className="card-title">Name:{todo.title}</h5>
           <p className="card-text">Description:{todo.description}</p>
            <div className="btn-group">
             Status: {' '}
             <span>
              <div className='btn-group'>
             <button
              className="btn btn-secondary dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true" >
                          {todo.completed ? "completed"  : "Not Completed" }
             </button> 
             <ul className="dropdown-menu">
              <li> <a onClick={handleDrop}>Completed</a> </li>
              <li> <a onClick={handleDrop}>Not Completed</a></li>
             </ul>
          </div>
          </span>
          </div>
          
        </div>
        
        <div className="d-flex justify-content-end w-auto">
          <div>
            <button className="btn btn-success btn-sm w-auto" onClick={onEdit}>
              Edit
            </button>
          </div>
          
          <div>
            <button className="btn btn-danger btn-sm w-auto" onClick={Delete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;