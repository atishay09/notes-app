import React, { useContext } from 'react'
import contextvalue from '../context/notes/noteContext'


const Noteitem = (props) => {
    const context = useContext(contextvalue);
    const {deleteNote} = context;
  const {_id, title, description, tag, date } = props.note;
const deleteThisNote = (id)=>{
  deleteNote(id);
  props.showAlert("Note Deleted Sucessfully",'success')
}
  return (
    <div className="col-md-3 my-3 ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{tag}</h6>
          <p className="card-text">{description}</p>
          <div className="card-footer text-muted">{date}</div>
          <i className="fa-solid fa-trash-can mx-3" onClick={()=>deleteThisNote(_id)}></i>
          <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{props.updateNote(props.note)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
