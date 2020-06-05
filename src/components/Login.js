import React from 'react';

const Login = ({authenticate}) => {
  return (
    <div className='login'>
      <h2>Connectes toi pour créer ton book de recettes !</h2>
    <button onClick={authenticate} className="facebook-button">Me connecter avec Facebook</button>
    </div>
  );
};

export default Login;