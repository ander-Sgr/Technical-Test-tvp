import UserCard from "./components/UserCard"
import { dataUsers } from "./resources/dataSamples/dataUser"

const App = () => {

    return (
        dataUsers().map((element, index) => (
            <UserCard
                key={index}
                userName={element.name.first}
                emailUser={element.email}
                userImage={element.picture.medium}
            />
        ))
    )
}

export default App