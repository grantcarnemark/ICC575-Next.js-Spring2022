import styles from './navoverlay.module.scss'
import ButtonUI from './ButtonUI'



const NavOverlay = ({closeHandler}) => {
    return <div className={styles.navoverlay}> 
    <ButtonUI
icon="close"
color="white"
clickHandler={closeHandler}



/> </div>
}

export default NavOverlay;