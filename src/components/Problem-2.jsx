import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const Problem2 = () => {
  const [data, setData] = useState([]);
  const [visibleA, setVisibleA] = useState(false);
  const [visibleB, setVisibleB] = useState(false);
  

  const handleForAll = () => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setData(data?.results);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
    setVisibleA(true);
    setVisibleB(false);
  };
  const handleForUS = () => {
    fetch(
      "https://contact.mediusware.com/api/country-contacts/United%20States/"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setData(data?.results);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
    setVisibleA(false);
    setVisibleB(true);
  };
  const handleClose = () => {
    setVisibleA(false);
    setVisibleB(false);
  };
  const handleEven=()=>{
    const res = data.filter(ele=>(ele.id%2==0));
    setData([...res]);

}

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={handleForAll}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={handleForUS}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>

        {visibleA && (
          <div>
            <h1>All Contacts</h1>
            <Modal
              data={data}
              handleForAll={handleForAll}
              handleForUS={handleForUS}
              handleClose={handleClose}
              handleEven={handleEven}
            />
          </div>
        )}
        {visibleB && (
          <div>
            <h1>US Contacts</h1>
            <Modal
              data={data}
              handleForAll={handleForAll}
              handleForUS={handleForUS}
              handleClose={handleClose}
              handleEven={handleEven}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem2;
