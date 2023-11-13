import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Users from './Components/Users/Users';
import Footer from './Components/Footer/Footer';
import FooterMobile from './Components/Footer/FootMobile';
import { store } from './App/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    fetch('https://gorest.co.in/public/v2/users')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Provider store={store}>
      <NavBar />
      <div className="App">
        <Header />
        <Users data={posts} />
      </div>
      <Footer />
      <FooterMobile />
    </Provider>
  )
}

export default App
