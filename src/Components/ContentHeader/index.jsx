import Lottie from 'lottie-react'
import birds from '../../assets/animation/birds2.json'

const ContentHeader = () => {
  return (
    <div className='w-full h-[400px] flex bg-blue1 md:h-[700px]'>
      <div className='w-[15%]'>
        <Lottie
          animationData={birds}
          style={{
            transform: 'scaleX(-1)',
          }}
        />
      </div>
      <div className='w-[70%] flex flex-col items-center relative bottom-10 text-center md:justify-around md:flex-row md:text-start md:items-start z-20 md:bottom-0'>
        <div>
          <h1 className='text-black font-koulen text-4xl sm:text-6xl lg:text-8xl'>
            SMARTDEVS
          </h1>
          <h2 className='text-black font-koulen text-2xl sm:text-3xl lg:text-4xl'>
            ENTRE NA EXPERIENCIA
          </h2>
        </div>
        <div>
          <h1 className='text-black font-koulen text-xl sm:text-2xl lg:text-3xl text-center mt-7'>
            PRESSIONE ENTER<br></br> OU <br></br>CLIQUE AQUI
          </h1>
        </div>
      </div>
      <div className='w-[15%]'>
        <Lottie animationData={birds} />
      </div>
    </div>
  )
}
export default ContentHeader
