import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Content from './components/content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'ad72d43689c9d3809a2152986bc4adc4', // ! Add your API key here
};

const App = () => {
  return (
    <div>
      {/* Nav Component */}
      <Nav />
      {/* Header background image with buttons and title */}
      <Header />
      {/* Content with movies */}
      <Content />
    </div>
  );
};

export default App;
