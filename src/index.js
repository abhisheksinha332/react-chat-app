import React from 'react';
import ReactDOM from 'react-dom';


//Components

import Chat from './chat';

//End Components

const App = () => {
  return(
    <div>
      <Chat />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));