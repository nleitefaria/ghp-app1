import React from 'react';

class Loading extends React.Component
{
   render()
   {
      return (
         <div>
            <img src={require('./ajax-loader.gif')} alt="logo" className="brand-logo"/>
            <br></br>
            <br></br>
         </div>
      );
   }
}

export default Loading;