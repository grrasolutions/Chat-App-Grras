import { IoHomeOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


const SideBar = () => {
    return(
      <div className="w-full border-r h-full">
        <div className="w-10 h-10 mx-auto bg-white flex justify-center items-center my-4 rounded-full shadow-inner">
          <p className="text-2xl"><IoHomeOutline /></p>
        
        </div>
      <div className="w-10 h-10 mx-auto bg-white flex justify-center items-center my-4 rounded-full shadow-inner">
        <p className="text-2xl"><IoIosLogOut /></p>
      
      </div> 
      <div className="w-10 h-10 mx-auto bg-white flex justify-center items-center my-4 rounded-full shadow-inner">
        <p className="text-2xl">
        <CgProfile />
        </p>
      
      </div>
      
    </div>
    )
    
  };

  export default SideBar;