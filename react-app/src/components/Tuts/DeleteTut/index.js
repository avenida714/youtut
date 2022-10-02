//DeleteTut
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteTut } from '../../../store/tuts';

function DeleteTut({tutId}) {

  console.log("THIS IS THE {tutId} PASSED INTO DELETE TUT COMPONENT ************>", tutId)


  const dispatch = useDispatch()
  const history = useHistory()
  // const userLoggedIn = useSelector((state) => state.session.user);


  const deleteTut = async (tutId) => {
    const del = await dispatch(deleteTut(tutId));
    if (del) alert("Successfully deleted the post, see you later.");
    // history.push(`/profile/${userLoggedIn.id}`);
    history.push('/')

  };
  return (
    <div>
        <div className="Button_div">

          <button className="delete_Btn" onClick={() => deleteTut(tutId)}>
            <i className="fa-solid fa-trash-can"></i> Delete
          </button>

      </div>
    </div>
  )
}

export default DeleteTut
