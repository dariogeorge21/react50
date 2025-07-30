import styles from './UserStatus.module.css'


const UserStatus = ({loggedIn, isAdmin}: {loggedIn: boolean, isAdmin: boolean}) => {

  const Admin:string = "Welcome Admin";
  const Standard:string = "Welcome User"
  const loginRequest:string = "Please Login!!"

return (
    <div className={styles.UserStatus}>
        {loggedIn && isAdmin
            ? Admin
            : loggedIn && !isAdmin
                ? Standard
                : loginRequest
        }
    </div>
  )
}

export default UserStatus
