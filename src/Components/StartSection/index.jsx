import {
  FaLongArrowAltUp,
  FaLongArrowAltDown,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from 'react-icons/fa'

import { GoUnmute, GoMute } from 'react-icons/go'

// eslint-disable-next-line react/prop-types
const StartSection = ({ sound, setSound }) => {
  return (
    <section className='h-[600px] w-full bg-blue1 flex  md:flex-nowrap justify-center text-center '>
      <div className='flex flex-wrap lg:w-[1000px] xl:w-[1200px] justify-around'>
        <div
          name='navigate'
          className='w-[350px] lg:w-[33.3%] flex flex-col gap-4 '
        >
          <h2 className='text-black font-koulen text-xl sm:text-3xl lg:text-4xl'>
            pressione para navegar:
          </h2>
          <div name='arrows' className='flex justify-center text-center '>
            <div name='arrow-up' className='mr-[10px] lg:mr-[12px]'>
              <h2 className='text-black font-koulen text-xl sm:text-3xl lg:text-4xl '>
                Up
              </h2>
              <FaLongArrowAltUp fill='#000000' className='text-5xl' />
            </div>
          </div>
          <div className='flex justify-center  gap-4 '>
            <div name='arrow-left' className='flex  gap-2'>
              <h2 className='text-black font-koulen text-xl sm:text-3xl lg:text-4xl mt-[10px] lg:mt-[5px]'>
                left
              </h2>
              <FaLongArrowAltLeft fill='#000000' className='text-5xl' />
            </div>
            <div
              name='arrow-down'
              className='flex flex-col justify-center items-center gap-2 '
            >
              <FaLongArrowAltDown fill='#000000' className='text-5xl' />

              <h2 className='text-black font-koulen text-xl sm:text-3xl lg:text-4xl'>
                down
              </h2>
            </div>

            <div name='arrow-right' className='flex gap-2 text-center'>
              <FaLongArrowAltRight fill='#000000' className='text-5xl' />
              <h2 className='text-black font-koulen text-xl sm:text-3xl lg:text-4xl  mt-[10px] lg:mt-[5px]'>
                right
              </h2>
            </div>
          </div>
        </div>
        <section
          name='sound'
          className='w-[350px] lg:w-[33.3%] flex flex-col gap-4 items-center'
        >
          <div>
            {' '}
            <h2 className='text-black font-koulen text-xl sm:text-3xl lg:text-4xl'>
              Som:
            </h2>
          </div>

          <div>
            {sound ? (
              <>
                <GoMute
                  fill='#000000'
                  className='text-5xl cursor-pointer'
                  onClick={() => {
                    setSound(false)
                  }}
                />
              </>
            ) : (
              <>
                <GoUnmute
                  fill='#000000'
                  className='text-5xl cursor-pointer'
                  onClick={() => {
                    setSound(true)
                  }}
                />
              </>
            )}
          </div>
        </section>
      </div>
    </section>
  )
}
export default StartSection
