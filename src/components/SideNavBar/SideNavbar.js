import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = ({children}) => {

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
			text: "About Us",
			icon: "icons/chatbot-icon.svg",
            path: "/about",
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
            path: "/user",
			target: "",
		},
		// {
		// 	text: "Settings",
		// 	icon: "icons/settings.svg",
		// 	path: "/setting",
        //     target: "",
		// },
		// {
		// 	text: "Login",
		// 	icon: "icons/login-icon.svg",
        //     path: "/login",
		// 	target: "",
		// },
	];
	return (
        <div className="side-nav-container"> 
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
								<p className="nav-footer-user-name">Rohit Kumar</p>
								{/* <p className="nav-footer-user-position">rohit09619@gmail.com</p> */}
							</div>
						</div>
					)}
					<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
				</div>
	      	</div>
			<main>
				{children}
			</main>
		</div>
	);
};

export default SideNavbar;