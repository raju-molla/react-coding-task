import React from "react";
import { useState } from "react";

const Modal = ({ data, handleForAll,handleForUS,handleClose,handleEven}) => {
   
    
  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
          <button type="button" style={{backgroundColor:"white", color:'#46139f'}} onClick={handleForAll}>Modal A</button>
          <button type="button" style={{ color:'#ff7f50'}}   onClick={handleForUS}>Modal B</button>
         <button type="button" style={{backgroundColor:"white", borderColor:'#46139f'}}  onClick={handleClose}>Close</button>
          </div>
          <div className="modal-body">
            <ul>
              {data.map((contact, index) => (
                <p className="cursor-pointer bg-light text-dark p-2 mt-3 rounded">
                  Country: {contact.country.name}<br />
                  ID: {contact.id}<br />
                  Phone: {contact.phone}
                </p>
              ))}
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleEven}>
              Only even
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
