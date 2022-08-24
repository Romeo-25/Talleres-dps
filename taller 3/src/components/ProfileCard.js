import React from "react";
import "./ProfileCard.css";
import avatar from "../images/img.jpg";

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src={avatar} alt={props.name} />
			</header>
			<h1 className="bold-text">
				Nombre: 
				<br/>
				Romeo Alejandro Teos Arevalo<span className="normal-text"></span>
			</h1>
			<h2 className="normal-text">Edad: <br/> 21 </h2>
			<h2 className="normal-text">Carerra: <br/> Ingenieria en Sistema </h2>
			<h2 className="normal-text">Skill en: <br/> html, php, css.</h2>
			
		
			</div>
		
	);
}

export default ProfileCard;
