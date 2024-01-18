import { useState, useEffect } from 'react'

interface ISkills {
  skills: string[]
}

export const Skills = ({ skills }: ISkills) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1001)
  }, [])
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return (
            <li role="listitem" key={skill}>
              {skill}
            </li>
          )
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
