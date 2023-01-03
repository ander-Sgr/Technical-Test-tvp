import { FrameUsers, EmailUser, DataFrameUser, NameUser } from './style'

const UserCard = ({ userImage, userName, emailUser }) => {
  return (
    <div>
      <FrameUsers className='main-container'>
        <div>
          <img src={userImage} alt='userpicture' />
        </div>
        <DataFrameUser className='data-container'>
          <NameUser className='user-name'>
            {userName}
          </NameUser>
          <EmailUser className='email-user'>
            {emailUser}
          </EmailUser>
        </DataFrameUser>
      </FrameUsers>
    </div>

  )
}

export default UserCard
