import "./newUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john"></input>
        </div>
        <div className="newUserItem">
          <label>FullName</label>
          <input type="text" placeholder="john Smith"></input>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="john@gmail.com"></input>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password"></input>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+66 9009786603"></input>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Phathumthani | Thailand"></input>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"></input>
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
            ></input>
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"></input>
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select name="active" id="active" className="newUserSelect">
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form> 
    </div>
  );
};

export default NewUser;
