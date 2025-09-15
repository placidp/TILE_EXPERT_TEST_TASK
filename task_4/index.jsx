import { useState } from 'react'

// универсальный блок
const BaseBlock = ({ mouseEnterCallbak, children }) => {
  const [isActive, setActive] = useState(false)

  const mouseEnterHandler = () => {
    setActive(true)
    mouseEnterCallbak()
  }

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? 'active' : ''}>
      {children}
    </div>
  )
}

// специализированные блоки
export const Block1 = ({ mouseEnterCallbak, imgSrc, imgAlt }) => (
  <BaseBlock mouseEnterCallbak={mouseEnterCallbak}>
    <img src={imgSrc} alt={imgAlt} />
  </BaseBlock>
)

export const Block2 = ({ mouseEnterCallbak, content }) => (
  <BaseBlock mouseEnterCallbak={mouseEnterCallbak}>
    <p>{content}</p>
  </BaseBlock>
)

export const Block3 = ({ mouseEnterCallbak, userData }) => (
  <BaseBlock mouseEnterCallbak={mouseEnterCallbak}>
    <address>
      country: {userData.country}, street: {userData.street}
    </address>
  </BaseBlock>
)
