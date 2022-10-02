//DeleteTut
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteTut } from '../../../store/tuts';

function DeleteTut({tutId}) {

  // console.log("THIS IS THE {tutId} PASSED INTO DELETE TUT COMPONENT ************>", tutId)


  const dispatch = useDispatch()
  const history = useHistory()
  // const userLoggedIn = useSelector((state) => state.session.user);


  const dispatchDeleteTut = async (tutId) => {
    const del = await dispatch(deleteTut(tutId));
    if (del) alert("Tut has been deleted sucessfully");
    // history.push(`/profile/${userLoggedIn.id}`);
    history.push('/')

    };




  return (
    <div>
        <div className="Button_div">

          <button className="delete_Btn" onClick={() => dispatchDeleteTut(tutId)}>
            <i className="fa-solid fa-trash-can"></i> Delete
          </button>

      </div>
    </div>
  )
}

export default DeleteTut