import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import './menu.css'
function NavigationTabs() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(getActiveTab());

  function getActiveTab() {
    const path = location.pathname;
    if (path.startsWith("/")) {
      return "count";
    } else if (path.startsWith("/todolist")) {
      return "todolist";
    } else if (path.startsWith("/user")) {
      return "user";
    }else if(path.startsWith("/productList")){
        return "productList";
    }else if(path.startsWith("/moviesList")){
      return "moviesList";
  }
    return "count"; 
  }

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink
              to="/"
              isActive={() => activeTab === "count"}
              onClick={() => handleTabClick("count")}
            >
              count
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todolist"
              isActive={() => activeTab === "todolist"}
              onClick={() => handleTabClick("todolist")}
            >
              todolist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userList"
              isActive={() => activeTab === "user"}
              onClick={() => handleTabClick("user")}
            >
              user
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productList"
              isActive={() => activeTab === "productList"}
              onClick={() => handleTabClick("productList")}
            >
              productList
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/moviesList"
              isActive={() => activeTab === "moviesList"}
              onClick={() => handleTabClick("moviesList")}
            >
              moviesList
            </NavLink>
          </li>

          
        </ul>
      </nav>
    </div>
  );
}
export default NavigationTabs; 