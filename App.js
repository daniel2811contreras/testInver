import React from 'react'
// context
import { HomeProvider } from './src/context/home'
import { MenuProvider } from './src/context/menu'
// component
import App from './src/component'

const Aplication = () => {
  return (
    <MenuProvider>
      <HomeProvider>
        <App />
      </HomeProvider>
    </MenuProvider>
  );
}

export default Aplication

