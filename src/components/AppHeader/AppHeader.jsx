import style from "./AppHeader.module.css"
import { NavLink } from "react-router-dom"

const AppHeader = () => {
  return (
    <div className={style.headerContainer}>
      <div>Contacts</div>
        <div className={style.linkContainer}>
        <NavLink to="/">Home</NavLink>
        </div>
        <div className={style.divContainer}>
        <NavLink to="/show">
          Contacts
        </NavLink>
        </div>

    </div>
  )
}

export default AppHeader;