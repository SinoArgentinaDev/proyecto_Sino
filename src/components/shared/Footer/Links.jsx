import React from 'react'

export const Links = ({titulo, link1, link2, link3, link4, link5}) => {
  return (
    <div>
        <h3 className='text-white font-bold'>{titulo}</h3>
        <ul>
            <li>
                {link1}
            </li>
            <li>
                {link2}
            </li>
            <li>
                {link3}
            </li>
            <li>
                {link4}
            </li>
            <li>
                {link5}
            </li>
        </ul>
    </div>
  )
}
