import Wave from 'react-wavify'
import sunshade from '../../assets/images/sunshade.png'

const SandHeader = () => {
  return (
    <>
      <header
        name='sand'
        className='w-screen flex-col flex h-[450px] bg-sand1 z-0  justify-end'
      >
        <div className='absolute w-full top-0'>
          <img
            src={sunshade}
            alt='Guarda-sol'
            className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute left-10 md:left-3/4 top-[20px]'
          />
          <img
            src={sunshade}
            alt='Guarda-sol'
            className='w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute right-10 md:right-3/4 top-[50px]'
          />
          <div className='absolute w-3 h-3 lg:w-4 lg:h-4 bg-sand2 top-2 lg:top-7 left-3/4 rounded-md '></div>
          <div className='absolute w-3 h-3 lg:w-4 lg:h-4 bg-sand2 top-1  lg:top-3 left-2/3 rounded-md'></div>
          <div className='absolute w-3 h-3 lg:w-4 lg:h-4 bg-sand2  top-3 lg:top-6 left-1/3 rounded-md'></div>
          <div className='absolute w-3 h-3 lg:w-4 lg:h-4 bg-sand2 top-4 lg:top-14 left-2/4 rounded-md'></div>
        </div>
        <Wave
          className='relative top-[50px] '
          fill='#6ad2ff'
          paused={false}
          options={{
            height: 10,
            amplitude: 30,
            speed: 0.2,
            points: 5,
          }}
        />
        <Wave
          className='z-10'
          fill='#2cbffe'
          paused={false}
          options={{
            height: 10,
            amplitude: 20,
            speed: 0.3,
            points: 5,
          }}
        />
      </header>
    </>
  )
}
export default SandHeader
