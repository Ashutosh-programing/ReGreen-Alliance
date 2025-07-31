import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'



const workArr = [
    {
        id:1,
        heading:'Over 1,70,000 dust and garbage issues will be resolved in Delhi (2025-ongoing)',
        text:'We work closely with the Municipal Corporation of Delhi (MCD) and other Urban Local Bodies (ULBs) to address dispersed sources of air pollution. In Delhi, as of July 2025, over 190,000 issues have been identified, of which 89.5%, which is about 170,000  have been resolved!',
        img:<img className='object-cover object-center rounded-t-xl h-60 min-w-full' src='./wk1.jpg' alt='error' />
    },    
    {
        id:2,
        heading:'Encouraging alternatives to stubble burning in Punjab (2025-ongoing)',
        text:'The stubble burning intervention in Punjab is one of our earliest projects.  Since 2025, we have been working with the Punjab Agriculture Department to mitigate air pollution by encouraging farmers to shift from burning stubble to using tractors.',
        img:<img className='object-cover object-center rounded-t-xl h-60 min-w-full' src='./wk2.jpg' alt='error' />
    },
    {
        id:3,
        heading:'Tackling dispersed sources of pollution in Patna, Muzaffarpur, and Gaya(2025-ongoing)',
        text:'We support the Bihar State Pollution Control Board (BSPCB) in identifying and resolving dispersed sources of air pollution. We began our work with a pilot in Patna in 2021. Since then, full-fledged interventions have been launched in Patna, Muzaffarpur, and Gaya. As of July 2025, over 70% of the 15,000 issues identified in these three cities have been resolved.',
        img:<img className='object-cover object-center rounded-t-xl h-60 min-w-full' src='./wk3.jpg' alt='error' />
    },    
    {
        id:4,
        heading:'Expanding our programme to seven cities in Uttar Pradesh (2025-ongoing)',
        text:'In UP, we work on DSP in Ghaziabad, Varanasi, Mathura-Vrindavan, and Prayagraj. Our programme in Lucknow is a unique model that could be adapted to smart cities country wide. This is being run in close coordination with the Uttar Pradesh Pollution Control Board (UPPCB), Smart City ICCC and the Lucknow Municipal Corporation (LMC).',
        img:<img className='object-cover object-center rounded-t-xl h-60 min-w-full' src='./wk4.jpg' alt='error' />
    },
    {
        id:5,
        heading:'Alleviating traffic congestion in Patna (2025-ongoing)',
        text:'In Patna, we have partnered with The Energy and Resources Institute (TERI) to help the Bihar State Pollution Control Board (BSPCB) decongest four traffic hotspots across the city. After a short-term study to assess the cause of the congestion, our work involves working with will be conducted to assess causes of congestion.',
        img:<img className='object-cover object-center rounded-t-xl h-60 min-w-full' src='./wk5.jpg' alt='error' />
    },    
    {
        id:6,
        heading:'Enhancing the effectiveness of NCAP roll out (2025-ongoing)',
        text:'The National Clean Air Programme (NCAP) is India’s flagship programme for improvement of air quality. A-PAG aims to assist the Central Pollution Control Board in ensuring it is effectively implemented.',
        img:<img className='object-cover object-center rounded-t-xl h-60 min-w-full' src='./wk6.jpg' alt='error' />
    },
    {
        id:7,
        heading:'Online: Promoting Air Pollution as a Voter Issue (2019)',
        text:'In August 2025, ReGreen Alliance will launch the #pollutionkakyaplanhai campaign to draw attention to the gravity of the pollution problem and position it as a critical poll issue.',
        img:<img className='object-cover object-center rounded-t-xl h-60 min-w-full' src='./wk7.jpg' alt='error' />
    },
    
]
const OutWork = () => {
    // const[count,setCount] = useState(false);
    function open1(){
        // setCount(!count)
        alert('coming soon')
    }
  return (
    <div>
      <div className="work-wrapper font-Nunito">
        <div className="bg-img h-96 w-full">
        <img className='h-96 w-full object-cover -z-10 ' src="./long-bg-2.jpg" alt="" />
        <span className=' absolute top-10 flex h-96 w-full items-center font-Nunito justify-center text-white text-4xl font-extrabold underline underline-offset-8'>Our Work</span>

        </div>
        <div className="work-container py-10">
            <div className="first-container w-5/6 flex flex-col gap-4 mx-auto">
            <div className="content flex flex-col gap-5 items-center mx-auto py-6 text-xl">
            <p>ReGreen Alliance works with the centre and state governments as well as municipal bodies to assist their implementation efforts in fighting pollution. We run pilot programmes, which if successful, are scaled rapidly across geographies.
            </p>
            <p>Our flagship programme is the Dispersed Sources of Pollution programme (DSP) which is currently running in 10 cities in the state of Odisha. The programme focuses on addressing dispersed sources of air pollution like dust and garbage which contribute significantly to air pollution.</p>
            </div>
            <div className="cards grid lg:grid-cols-2 gap-10">
                {
                    workArr.map((e)=>{
                        return(
                            <div className=' h-auto lg:w-5/6 flex flex-col gap-3 bg-custom-1 rounded-xl hover:shadow-2xl hover:shadow-gray-500' key={e.id}>
                                <div className="img h-60">{e.img}</div>
                                <div className="heading font-extrabold text-2xl p-4">{e.heading}</div>
                                <div className="content p-4">{e.text}</div>
                                <NavLink to='/comingSoon' className='bg-slate-400 hover:bg-slate-500 flex items-center justify-center h-10 w-24 mx-auto rounded-lg mb-2'>Learn More </NavLink>

                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OutWork
