import React from 'react';
import Header from './header/headerComponent';
import MainContent from './MainContent';
import {DataLoad} from '../services/DataLoad';



class App extends React.Component {
  state = {
    isLoaded: false,
    items: [],
  };

  componentDidMount = async () => {
    try {
      const data = await DataLoad();
      console.log(data);
      this.setState({ items: data });
      if (this.state.items.length != 0) {
        this.setState({ isLoaded: true });
      }
    } catch (error) {
      console.log(error)
    }
  };

 

  render() {
    const { isLoaded, items } = this.state;
    if (isLoaded) {
      return (
        <div className="App">
          <Header id="page_header" className="header_cont" />
          <MainContent
            class="main"
            items={items}
          />
         
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default App;
