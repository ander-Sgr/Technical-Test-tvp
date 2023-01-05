import { useState } from 'react'
import UserCard from './components/UserCard'
import { Request } from './helpers/api.helper'

const baseURL = 'https://randomuser.me/api?results=5'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userCard, setUserCard] = useState([])
  const getRequest = Request(baseURL)

  const handleNextButton = () => {
    if (currentIndex >= getRequest.results.length - 1) {
      setCurrentIndex(0)
      setUserCard([])
    } else {
      setCurrentIndex(currentIndex + 1)
      setUserCard([...userCard, getRequest.results.map((element, index) => (
        currentIndex === index
          ? <UserCard
              key={index}
              userName={element.name.first + ' ' + element.name.last}
              emailUser={element.email}
              userImage={element.picture.medium}
            />
          : null
      ))])
    }
  }

  return (
    <div>
      <button onClick={handleNextButton}>Next</button>
      {userCard}
    </div>
  )
}

export default App
