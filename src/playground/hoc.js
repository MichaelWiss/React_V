//higher order component
//reuse code
//render hijacking
//prop manipulation
//abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
   <div>
     <h1>info</h1>
     <p>The info is: {props.info}</p>
   </div> 
);

const withAdminWarning = (WrappedComponent) => {
   return (props) => (
   	  <div>
   	  <p>This is private info please don't share</p>
   	  <WrappedComponent />
   	  </div>
   	);
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo info="These are the details" />, document.getElementById('app'));
