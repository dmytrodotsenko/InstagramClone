import React from 'react';
import {Header} from './header/headerComponent';
import MainContent from './MainContent';
import {DataLoad} from '../services/DataLoad';



class App extends React.Component {
  state = {
    isLoaded: false,
    items: [],
  };

  componentDidMount = async ()  =>{
    const data =  await DataLoad();
    console.log('data', data);
    if (data) {
      this.setState({ items: data });
      if (this.state.items.length !== 0) {
        this.setState({ isLoaded: true });
      }
    }
  };

 

  render() {
    const { isLoaded, items } = this.state;
    return( 
    <>
      {
        isLoaded 
        ? 
          (<div className="App">
            <Header id="page_header" className="header_cont" />
            <MainContent
              class="main"
              items={items}
            />
          </div>) 
        : <p>Loading...</p>
      }
    </>
    )
    
  }
}

export default App;
