import { useState } from 'react'
import UserCard from './components/UserCard'
import { dataUsers } from './resources/dataSamples/dataUser'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userCard, setUserCard] = useState([])

  const handleNextButton = () => {
    if (currentIndex >= dataUsers().length - 1) {
      setCurrentIndex(0)
      setUserCard([])
    } else {
      setCurrentIndex(currentIndex + 1)
      setUserCard([...userCard, dataUsers().map((element, index) => (
        currentIndex === index
          ? <UserCard
              key={index}
              userName={element.name.first + ' ' + element.name.last}
              emailUser={element.email}
              userImage={element.picture.medium}
            />
          : null
      ))])

      console.log(dataUsers()[currentIndex])
    }
    console.log(currentIndex)
  }

  return (
    <div>
      <button onClick={handleNextButton}>Next</button>
      {userCard}
    </div>
  )
}

export default App
