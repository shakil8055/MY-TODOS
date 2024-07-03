import React, { useState } from 'react'
import Cards from './card'

function Header({ data, setData }) {
    let [title, setTitle] = useState("")
    let [description, setDescription] = useState("")
    let [filter, setFilter] = useState("All")

    const handleFilter = (option) => {
        setFilter(option);
    }
    const filteredData = data.filter((ele) =>
        filter === "All" ? true : ele.status === (filter === "Completed" ? "Completed" : "Not Completed")
    );


    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleAddData = () => {
        const newAddedData = {
            id: data.length ? data[data.length - 1].id + 1 : 1,
            title,
            description,
            status: 'Not Completed'
        }
        setData([...data, newAddedData])
        setTitle("")
        setDescription("")
    }

    return (
        <div className="container ">
            <div className='title'>
            <h1 className="text-center HeaderColor">MY TODO</h1>
            </div>
    <div className="container overflow-hidden text-center">
        <div className="row gx-5">
            <div className="col">
                <div className="p-3">
                
                    <input type="text" value={title} onChange={handleTitleChange} placeholder="Name" />
                </div>
                <div className="col">
                <div className="p-3">
                    <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Description" />
                </div>
                </div>
                <div className="col">
                <div className="p-3">
                    <button type="submit" className="btn btn-success" onClick={handleAddData}>Add Todo</button>
                </div>
                </div>
                </div>
                </div>
            </div>


            <div className="d-flex justify-content-between align-items-center p-5">
                <div >
                    <h3 className="fw-bold">TODOs LIST:</h3>
                </div>
                <div>
                <h4 className="fw-bold">
                   Status Filter :{' '}
                  <span>
                   {' '}
                 <div className="btn-group">
                        <button className="btn btn-info btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {filter}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#" onClick={() => handleFilter("All")}>All</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleFilter("Completed")}>Completed</a></li>
                            <li><a className="dropdown-item" href="#" onClick={() => handleFilter("Not Completed")}>Not completed</a></li>
                        </ul>
                    </div>
                    </span>
                    </h4>
                </div>
            </div>



            <div className="row mt-3">
                <div className="col">
                    <Cards data={filteredData} setData={setData} />
                </div>
            </div>



        </div>
    )
}

export default Header