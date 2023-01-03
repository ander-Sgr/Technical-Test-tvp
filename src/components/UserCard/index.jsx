import { FrameUsers, EmailUser } from "./style";

const UserCard = ({userImage, userName, emailUser}) =>{
    return (
    <FrameUsers className='main-container'>
        <div>
            <img src={userImage} alt="" />
        </div>
        <div className='data-container'>
            <div className='user-name'>
                {userName}
            </div>
            <EmailUser className='email-user'>
                {emailUser}
            </EmailUser>
        </div>
    </FrameUsers>
    )
}

export default UserCard;
