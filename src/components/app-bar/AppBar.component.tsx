import styles from './AppBar.module.scss';
import logo from 'images/logo.svg';
import {ReactComponent as ArrowDown} from 'images/icon-arrow-down.svg';
import remindersIcon from 'images/icon-reminders.svg';
import planningIcon from 'images/icon-planning.svg';
import calendarIcon from 'images/icon-calendar.svg';
import todoIcon  from 'images/icon-todo.svg';
import menuIcon  from 'images/icon-menu.svg';

type Props = {
    openMobileMenu: () => void
}

export default function AppBar(props: Props) {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} alt="logo" />
            <nav className={styles.navigation}>
                <div className={styles['dropdown-button']}>
                    <span>Features</span>
                    {/* <img src={arrowDown} alt="arrow icon" /> */}
                    <ArrowDown/>
                    <div className={styles.dropdown}>
                        <div className={styles['dropdown-item']} >
                            <img src={todoIcon} alt="icon" />
                            <span>Todo List</span>
                        </div>
                        <div className={styles['dropdown-item']} >
                            <img src={calendarIcon} alt="icon" />
                            <span>Calendar</span>
                        </div>
                        <div className={styles['dropdown-item']} >
                            <img src={remindersIcon} alt="icon" />
                            <span>Reminders</span>
                        </div>
                        <div className={styles['dropdown-item']} >
                            <img src={planningIcon} alt="icon" />
                            <span>Planning</span>
                        </div>
                    </div>
                </div>
                <div className={styles['dropdown-button']}>
                    <span>Company</span>
                    <ArrowDown/>
                    {/* <img src={arrowDown} alt="arrow icon" /> */}
                    <div className={styles.dropdown}>
                        <div className={styles['dropdown-item']} >
                            <span>History</span>
                        </div>
                        <div className={styles['dropdown-item']} >
                            <span>Our Team</span>
                        </div>
                        <div className={styles['dropdown-item']} >
                            <span>Blog</span>
                        </div>
                    </div>
                </div>
                <a href='google'>Careers</a>
                <a href='google'>About</a>
            </nav>

            <nav className={styles.authentication}>
                <a href='google'>Login</a>
                <a href='google' className={styles.register} >Register</a>
            </nav>

            <img src={menuIcon} alt="menu icon" className={styles['menu-icon']} onClick={props.openMobileMenu}/>
        </div>
    )
}