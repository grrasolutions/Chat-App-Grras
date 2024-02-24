import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Cookies from "universal-cookie";


const SideBar = () => {

  const cookies = new Cookies();
  const handleLogOut =  ()=>{
    cookies.remove("token");
    cookies.remove("userName");
    cookies.remove("fullName");
    cookies.remove("phoneNumber");
    cookies.remove("hashedPassword");
    cookies.remove("avatarUrl");
    window.location.reload();
  }
  
    return(
      <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
          <div className='icon1__inner'><IoHomeOutline /></div>
        
        </div>
      <div className='channel-list__sidebar__icon2' >
        <div className='icon2__inner' onClick={handleLogOut}><IoIosLogOut /></div>
        
      
      </div> 
      <div className='channel-list__sidebar__icon2'>
        <div className='icon2__inner'>
        <CgProfile />
        </div>
      
      </div>
      
    </div>
    )
    
  };

  export default SideBar;