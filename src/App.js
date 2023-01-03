import { useState } from 'react'
import UserCard from './components/UserCard'
import { dataUsers } from './resources/dataSamples/dataUser'

const ListUsers = () => {
  return (
    <div>
      {dataUsers().map((element, index) => (
        <UserCard
          key={index}
          userName={element.name.first + ' ' + element.name.last}
          emailUser={element.email}
          userImage={element.picture.medium}
        />
      ))}
    </div>
  )
}

const App = () => {
  const [userCard, setUserCard] = useState([])
}

export default App
