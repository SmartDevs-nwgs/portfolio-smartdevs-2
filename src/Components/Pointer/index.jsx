import { useState } from 'react'
import paperplaneImg from '../../assets/images/paperplane.png'
import { useEffect } from 'react'
import { useRef } from 'react'

const Pointer = () => {
  const [start, setStart] = useState(false)
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const refTranslateX = useRef(0)
  const refTranslateY = useRef(0)

  useEffect(() => {
    let map = {}
    let limit = {
      right: true,
      left: true,
      up: true,
      down: true,
    }
    window.addEventListener('keydown', (e) => {
      const paperplane = document.getElementsByClassName('paperplane')[0]
      const root = {
        width: document.getElementById('root').offsetWidth,
        height: document.getElementById('root').offsetHeight,
      }
      const paperObject = {
        x: paperplane.getBoundingClientRect().x,
        y: paperplane.getBoundingClientRect().y,
        size: 50,
      }
      // CONDICIONAL LIMITES DO POINTER
      if (paperObject.x >= root.width - 150) {
        limit['right'] = false
      }
      if (paperObject.y >= root.height - 500) {
        limit['down'] = false
      }
      if (paperObject.y < -100) {
        limit['up'] = false
      }
      if (paperObject.x < 30) {
        limit['left'] = false
      }
      // CONDICIONAL TIRAR LIMITES DO POINTER
      if (paperObject.x <= root.width - 200) {
        limit['right'] = true
      }
      if (paperObject.y <= root.height - 550) {
        limit['down'] = true
      }
      if (paperObject.y > 0) {
        limit['up'] = true
      }
      if (paperObject.x > 55) {
        limit['left'] = true
      }
      //CONDICIONAIS DE MOVIMENTAÇÃO RETAS
      map[e.key] = true
      if (map['Enter'] && start === false) {
        setStart(true)
      }
      if (map['ArrowUp'] && start && limit['up']) {
        refTranslateY.current = refTranslateY.current - 10
        setTranslateY(refTranslateY.current)
      }
      if (map['ArrowDown'] && start && limit['down']) {
        refTranslateY.current = refTranslateY.current + 10
        setTranslateY(refTranslateY.current)
      }
      if (map['ArrowLeft'] && start && limit['left']) {
        refTranslateX.current = refTranslateX.current - 10
        setTranslateX(refTranslateX.current)
      }
      if (map['ArrowRight'] && start && limit['right']) {
        refTranslateX.current = refTranslateX.current + 10
        setTranslateX(refTranslateX.current)
      }
    })
    window.addEventListener('keyup', (e) => {
      map = {}
    })
  }, [start, refTranslateX, refTranslateY])

  return (
    <div
      className='paperplane w-[50px] h-[50px] absolute z-50'
      style={{
        transform: `translateX(${translateX}px) translateY(${translateY}px)`,
        transitionDuration: '0ms',
        transitionDelay: '0ms',
      }}
    >
      <img
        src={paperplaneImg}
        alt='paperplane'
        className='relative top-[300px] lg:top-[150px] lg:left-[30px]'
      />
    </div>
  )
}
export default Pointer
