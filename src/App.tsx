import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Users from './Components/Users/Users';
import Footer from './Components/Footer/Footer';
import FooterMobile from './Components/Footer/FootMobile';
import { store } from './App/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  const [posts, setPosts] = React.useState<any>([])

  React.useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const [name, setName] = React.useState<string>('')

  const [email, setEmail] = React.useState<string>('')

  const ArraNewData = {
    email: email,
    gender: "all",
    id: 1,
    name: name,
    status: "all",
  }

  const [searchInput, setSearchInput] = React.useState("")

  const [filteredDataToggle, setFilteredDataToggle] = React.useState(null)

  const [newUser, setNewUser] = React.useState<any>([])

  const addNewUser = () => {
    setNewUser((posts: any) => [...posts, ArraNewData])
  }

  const newData = newUser.concat(posts)

  const inputHandler = (e: any) => {
    e.preventDefault()
    var lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase)
  }

  const filteredData = newData.filter((el: any) => {
    if (searchInput === '') {
      return el;
    }
    else {
      return el.name.toLowerCase().includes(searchInput) || el.email.toLowerCase().includes(searchInput)
    }
  })

  const filterDataToogle = (selectStatus: any) => {
    let filtredData = newData.filter((status: { status: any; }) => status.status === selectStatus)
    return filtredData
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    setFilteredDataToggle(newData)
  }, [newData])

  const handleData = (e: any) => {
    let status = e.target.value
    status !== "all"
      ? setFilteredDataToggle(filterDataToogle(status))
      : setFilteredDataToggle(filteredDataToggle)
  }

  return (
    <Provider store={store}>
      <NavBar inputHandler={inputHandler} />
      <div className="App">
        <Users
          data={searchInput !== '' ? filteredData : filteredDataToggle}
          handleData={handleData}
          addNewUser={addNewUser}
          setName={setName}
          setEmail={setEmail}
        />
      </div>
      <Footer data={newData} />
      <FooterMobile />
    </Provider>
  )
}

export default App
