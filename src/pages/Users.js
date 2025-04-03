import React, { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => setUsers(res.data.users))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      <div className="row">
        {users.map(user => (
          <div className="col-md-4 mb-3" key={user.id}>
            <div className="card">
              <img src={user.image} className="card-img-top" alt={user.name} />
              <div className="card-body">
                <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                <p>{user.address.city}, {user.address.state} - {user.address.postalCode}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
