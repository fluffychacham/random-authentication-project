import * as React from 'react';

import * as C from './components';

import './style/style.scss';

export default function App() {
  return (
    <div className="main-container">
      <C.Logo />
      <C.AuthHeader />
      <C.LoginForm />
    </div>
  );
}

