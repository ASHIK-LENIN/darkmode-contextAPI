import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const About = () => {

  const { theme } = useContext(ThemeContext);
  return (
    <div className='pages' style={{ background : theme === 'light' ? 'black' : 'white', color : theme === 'light' ? 'white' : 'black'}} >
      <h2>About Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perspiciatis blanditiis voluptatem error, nemo quidem corporis tenetur qui, eius obcaecati vitae minus. Natus, accusamus aut! Fuga nisi beatae architecto vero cumque tempora laborum minima illo, blanditiis qui placeat earum! Et nostrum omnis vero totam consequatur, ut exercitationem eligendi aperiam dolorem temporibus velit accusamus sunt minus nobis soluta, optio repellendus ab libero laboriosam deserunt. Minus libero, qui ipsam culpa, neque animi iste delectus repellat labore blanditiis ratione nemo voluptatum! Corporis autem soluta accusamus a laborum?</p>
    </div>
  )
}

export default About