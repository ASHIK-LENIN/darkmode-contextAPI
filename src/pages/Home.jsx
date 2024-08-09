import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const Home = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='pages' style={{background : theme === 'light' ? 'black' : 'white', color : theme === 'light' ? 'white' : 'black'}}>
      <h1>Welcome to Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aliquid incidunt esse, natus voluptates veniam mollitia accusamus neque alias facere commodi dolorum accusantium repellendus inventore, aperiam nisi facilis? Dolorum, pariatur?
        Quidem, dolor veniam soluta ut earum accusantium ipsam sed illum, aspernatur quas architecto aperiam accusamus cupiditate at, autem consequuntur? In beatae neque quasi ullam soluta earum magni harum sunt! Iusto.
        Ipsum numquam laborum animi? Repellat cupiditate possimus tempora debitis officiis quisquam non qui similique mollitia excepturi eligendi nisi nostrum impedit magnam sed incidunt, nam voluptas. Atque dignissimos consequuntur iure laudantium.</p>
    </div>
  )
}

export default Home