import React, { useState } from 'react';

const Problem1 = () => {
    const [show, setShow] = useState('all');
    const [items, setItems] = useState([
        // set it default for more understanding 
        { name: 'Item 1', status: 'active' },
        { name: 'Item 2', status: 'completed' },
        { name: 'Item 3', status: 'active' },
    ]);

    const [nameInput, setNameInput] = useState('');
    const [statusInput, setStatusInput] = useState('');

    const handleClick = (val) => {
        setShow(val);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newItem = { name: nameInput, status: statusInput };
        setItems([...items, newItem]);
        setNameInput('');
        setStatusInput('');
    }

    const sortedItems = items.sort((a, b) => {
        if (a.status === 'active' && b.status !== 'active') {
            return -1; 
        }else {
            return 0;
        }
    });
    const sortedItems1 = sortedItems.sort((a, b) => {
        if (a.status === 'completed' && b.status !== 'completed' && b.status !== 'active') {
            return -1; 
        } else {
            return 0;
        }
    });

    const filteredItems1 = show === 'all' ? sortedItems1 : sortedItems1.filter(item => item.status === show);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleFormSubmit}>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                value={nameInput}
                                onChange={(e) => setNameInput(e.target.value)}
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Status"
                                value={statusInput}
                                onChange={(e) => setStatusInput(e.target.value)}
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems1.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
