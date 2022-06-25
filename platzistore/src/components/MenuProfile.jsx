import React from 'react'

//Styles
import styles from "@styles/MenuProfile.module.scss";

const MenuProfile = () => {
    return (
        <div className={styles.MenuProfile}>
			<ul>
				<li>
					<a href="/" className="title">My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
    );
}

export default MenuProfile;