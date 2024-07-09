import React from 'react'
import { Headings } from '../../core/headings/headings'
import './style.css'

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-section">
      {/* 🎯 Display the section title and subtitle */}
      <Headings title="About" subtitle="Hi, I'm Steven." />{' '}
      {/* 📝 Edit the biography below to reflect your own journey and interests */}
      <p className="about-text">
        Full Stack Software Developer with 8 years of experience designing,
        implementing, and maintaining robust web applications. Proficient in
        both front-end and back-end development technologies, including HTML5,
        CSS3, JavaScript, React.js, Node.js, and Express.js, Ruby and Ruby on
        Rails. Skilled in database management systems such as MySQL, MongoDB,
        and PostgreSQL. Follow my
        <a
          className="about-link"
          href="https://www.instagram.com/stvnplm/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
          {/* 🔄 Change 'Instagram' to your preferred social media or remove if not applicable */}
        </a>{' '}
        to see my journey!
      </p>
    </div>
  )
})

About.displayName = 'About'

export { About }
