import React, { useState, useEffect } from "react";
import { NavLink, Navigate } from "react-router-dom";
import "./SideNavbar.css";
import ChatBox from "../ChatBot2/ChatBox";
import { doLogout, getCurrentUserDetails, isLoggedIn } from "../../auth";

const SideNavbar = ({children}) => {
	
	const[login, setLogin] = useState(false);
	const[user, setUser] = useState(undefined);

	useEffect(()=>{
		setLogin(isLoggedIn);
		setUser(getCurrentUserDetails);
	},[login])

	const logout = () =>{
		doLogout(()=>{
			//logout
			setLogin(false);
			<Navigate redirect to="/" />;
		})
	}


	// Setting Hovering effect
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

	
	

	const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
            path: "/",
			target: "",
		},
		{
			text: "Job Portal",
			icon: "icons/job-icon.svg",
            path: "/jobs/all-jbs",
			target: "",
		},
		{
			text: "Post Job",
			icon: "icons/job-icon.svg",
            path: "/jobs/post-job",
			target: "",
		},
		{
			text: "Applied Jobs",
			icon: "icons/heart.svg",
            path: "/save-item",
			target: "",
		},
		{
			text: "Chatbot",
			icon: "icons/chatbot-icon.svg",
            path: "/chatbot",
			target: "",
		},
		{
			text: "Live Doubts",
			icon: "icons/chatbot-icon.svg",
            path: "/live-doubts",
			target: "",
		},
		{
			text: "Soft Skills",
			icon: "icons/pie-chart.svg",
            path: "/user/soft-skill",
			target: "",
		},	
		{
			text: "Calender",
			icon: "icons/pie-chart.svg",
            path: "/calender",
			target: "",
		},
		{
			text: "Whatsapp Me",
			icon: "icons/whatsapp-icon.svg",
            path: "https://api.whatsapp.com/send?phone=917766864331&text=Hello,I'm interested",
			target: "_blank",
		},
		{
			text: "Profile",
			icon: "icons/user.svg",
            path: "/user/profile",
			target: "",
		},
		{
			text: "Settings",
			icon: "icons/settings.svg",
			path: "/setting",
            target: "",
		},
		// {
		// 	text: "Login",
		// 	icon: "icons/login-icon.svg",
        //     path: "/login",
		// 	target: "",
		// },
	];
	return (
        <div className="side-nav-container">
			<ChatBox /> 
			<div className={`navbar-container `}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<div className="nav-upper">
					<div className="nav-heading">
						{ (
							<div className="nav-brand">
								<img src="icons/Logo.svg" alt="" srcset="" />
								{isHovered && <h2>CodingBZ</h2>}
							</div>
						)}
					</div>
					<div className="nav-menu">
						{menuItems.map(( val ,key ) => (
							<NavLink
								className={isHovered ? "menu-item" : "menu-item menu-item-NX"}
								to={val.path} target={val.target} key = {key} activeclassName="active"
							>
								<img className="menu-item-icon" src={val.icon} alt="" srcset="" />
								{isHovered && <p>{val.text}</p>}
							</NavLink>
						))}
					</div>
				</div>

				<div className="nav-footer">
					{isHovered && (
						<div className="nav-details">
							<img
								className="nav-footer-avatar"
								src="icons/admin-avatar.svg"
								alt=""
								srcset=""
							/>
							<div className="nav-footer-info">
								{
									login && (
										<p className="nav-footer-user-name">{user.name}</p>
								 	) 
								}
								
								{/* <p className="nav-footer-user-position">rohit09619@gmail.com</p> */}
							</div>
						</div>
					)}
			
					<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" onClick={logout} />
						
					
					
				</div>
	      	</div>
			<main>
				{children}
			</main>
		</div>
	);
};

export default SideNavbar;