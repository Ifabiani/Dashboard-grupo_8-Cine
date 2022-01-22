import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { configure } from '@testing-library/react';
function App() {
  return (
    <React.Fragment>
      	<div  id="wrapper"  >
          <SideBar />
        </div>
    </React.Fragment>
  );
}

export default App;
