import logo from '../res/logo/logo.png';
import pokeball from '../res/logo/pokeball-icon.png';
import classes from '../res/layout/header.module.css';
import Info from './Info';

const Header = () => {
    return(
        <div className={classes.header}>
            <Info />
            <div className={classes.logoIcon}>
                <img src={logo} alt='logo-img'/>
            </div>
            <div className={classes.bokeBallDiv}>
                <img src={pokeball} alt='poleball-img' />
            </div>
        </div>
    )
}

export default Header;