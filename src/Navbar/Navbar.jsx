import React from 'react';
import "./navbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


export const Navbar = () => {


    const handleOnClick = () => {
    
    alert("work in progress")
    
    }


    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="input_wrapper">
                    <div className="search">
                        <input placeholder="Suchen..." type="search" />
                        <SearchOutlinedIcon />
                    </div>                    
                </div>                
                <div className="items">                    
                        <div className="item">                          
                            <PersonIcon className="icon" onClick={handleOnClick}/>
                            <MenuIcon className="icon" />                                                     
                        </div>                                 
                </div>
            </div>

        </div>
            
        
    );
};

