import React from "react";
import { NavLink, Route } from "react-router-dom";
import Profile from "./Profile";
import RouterHookSample from "./RouterHookSample";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/heeyoung"
            activeStyle={{ background: "black", color: "white" }}
          >
            heeyoung
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gooroomii"
            activeStyle={{ background: "black", color: "white" }}
          >
            gooroomii
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해주세요</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      <RouterHookSample />
    </div>
  );
};

export default Profiles;
