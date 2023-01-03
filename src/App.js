import UserCard from './components/UserCard'
import { dataUsers } from './resources/dataSamples/dataUser'

const App = () => {
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
      <button>NEXT</button>
    </div>

  )
}

export default App
