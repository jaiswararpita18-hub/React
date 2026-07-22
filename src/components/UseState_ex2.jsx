import React, { useState } from "react";

const UseState_ex2 = () => {

  const [user, setUser] = useState({
    uname: "",
    upass: ""
  });

  return (
    <div>

      Username:
      <input
        type="text"
        onChange={(e) =>
          setUser({ ...user, uname: e.target.value })
        }
      />

      <br /><br />

      Password:
      <input
        type="password"
        onChange={(e) =>
          setUser({ ...user, upass: e.target.value })
        }
      />

      <h1>
        {user.uname} -- {user.upass}
      </h1>

    </div>
  );
};

export default UseState_ex2;