import React from "react";
import 'C:/Users/lakha/my_reactapp/src/style.css';

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="data:image/png;base64,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"
        alt="Loaading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="project column3">
          {console.log(user)}
          <div className="profile">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
            <p>User ID: {user.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;