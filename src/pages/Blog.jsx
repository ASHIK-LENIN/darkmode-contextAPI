import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Blog = () => {

  const { theme} = useContext(ThemeContext);

  return (
    <div className='pages' style={{background : theme === 'light' ? 'black' : 'white', color : theme==='light' ? 'white' : 'black'}}>
        <h2>Blog Page</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ipsa praesentium atque voluptatum excepturi ducimus adipisci velit iste. Dolores eius magni hic pariatur ipsum quidem nihil? Sunt est velit maxime?
        Iure cumque neque officia assumenda tenetur, natus earum, pariatur voluptate sint quia rerum impedit alias repellendus minus autem reprehenderit minima quis consequuntur. A explicabo aperiam laboriosam soluta earum vitae rerum.
        Necessitatibus molestias qui voluptatibus odio in magni. Cupiditate fugit quo sed. Aliquid saepe animi sequi officiis ullam, et deleniti, debitis nam ab aut repellendus neque consectetur provident. Odit, maxime! Nisi.
        Cumque, officiis labore reiciendis nemo suscipit nesciunt molestiae vel pariatur culpa adipisci asperiores deleniti provident velit veritatis ex impedit totam atque inventore cum placeat quod architecto nobis. Debitis, aliquid consequuntur?
        Minima praesentium eum necessitatibus, vel doloribus voluptatem dolorum eaque laudantium quaerat debitis consequatur placeat labore rem, ipsum saepe obcaecati officiis nisi quibusdam voluptates similique officia quo earum aliquid expedita. Inventore.</p>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ipsa praesentium atque voluptatum excepturi ducimus adipisci velit iste. Dolores eius magni hic pariatur ipsum quidem nihil? Sunt est velit maxime?
        Iure cumque neque officia assumenda tenetur, natus earum, pariatur voluptate sint quia rerum impedit alias repellendus minus autem reprehenderit minima quis consequuntur. A explicabo aperiam laboriosam soluta earum vitae rerum.
        Necessitatibus molestias qui voluptatibus odio in magni. Cupiditate fugit quo sed. Aliquid saepe animi sequi officiis ullam, et deleniti, debitis nam ab aut repellendus neque consectetur provident. Odit, maxime! Nisi.
        Cumque, officiis labore reiciendis nemo suscipit nesciunt molestiae vel pariatur culpa adipisci asperiores deleniti provident velit veritatis ex impedit totam atque inventore cum placeat quod architecto nobis. Debitis, aliquid consequuntur?
        Minima praesentium eum necessitatibus, vel doloribus voluptatem dolorum eaque laudantium quaerat debitis consequatur placeat labore rem, ipsum saepe obcaecati officiis nisi quibusdam voluptates similique officia quo earum aliquid expedita. Inventore.</p>
    </div>
  )
}

export default Blog