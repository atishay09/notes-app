import React, { useContext , useState } from 'react'
import contextvalue from '../context/notes/noteContext'


const Addnote = ({showAlert}) => {
    const [newNote, setnewNote] = useState({
        title:"",description:"",tag:""
    })
    const context = useContext(contextvalue);
    const {addNote} = context;

    const handleclick = (e)=>{
        e.preventDefault();
        addNote(newNote.title,newNote.description,newNote.tag)
        debugger
        showAlert("Note Added Sucessfully",'success')
        setnewNote({title:"",description:"",tag:""})
    }

    const onChange = (e)=>{
        setnewNote({...newNote,[e.target.name]:e.target.value})
    }

  return (
    <div className="d-flex justify-content-center">

    <div className="col-12 col-md-6 col-lg-4 box-login mt-4 p-5">
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
              required
              value={newNote.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              required
              value={newNote.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              value={newNote.tag}
            />
          </div>
          
          <button onClick={handleclick} className="btn btn-primary">
            Add Note
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Addnote;
