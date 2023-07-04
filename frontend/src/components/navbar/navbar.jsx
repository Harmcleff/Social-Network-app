import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import "./navbar.scss"
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { Link } from 'react-router-dom';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ProfImg from "../../assets/img/prof.jpeg"
import { useContext } from 'react';
import { DarkModeContext } from "../../context/darkModeContext";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { AuthContext } from "../../context/authContext"; 


const navbar = () => {
  
  const { darkMode, toggle } = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="leftbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span >2geda</span>
        </Link>

        <div className="icon">{darkMode ? <LightModeRoundedIcon onClick={toggle} /> : <DarkModeRoundedIcon onClick={toggle} />}</div>
        <div className="icon"><GridViewRoundedIcon /></div>


      </div>
      <div className="centerbar">
        <div className="search">
          <SearchRoundedIcon />
          <input type="text" placeholder='Search 2geda' />
        </div>

      </div>
      <div className="rightbar">
        <div className="icon"><PersonRoundedIcon /></div>
        <div className="icon"><MessageRoundedIcon /></div>
        <div className="icon"><NotificationsRoundedIcon /></div>
        <div className="user">
          <img src={currentUser.profilePic} alt=''/>
            
        </div>
      </div>
    </div>
  )
}

export default navbar