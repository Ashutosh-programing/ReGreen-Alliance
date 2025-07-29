import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { CiPen } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";


const homeArr = [
    {
        id:1,
        heading:'What ReGreen Alliance Hopes to Achieve',
        text:'A-PAG aims to reduce air pollution by 20-30% by 2025. Our initial focus is on the Indo-Gangetic plain, given that the issue here is even more acute than it is around the country. Unlike a number of other civic organisations that work on broader environmental issues, our emphasis is entirely on air pollution.',
        img:<img className='object-cover object-center h-96 w-full' src='./img8.jpg' alt='error' />
    },
        {
        id:2,
        heading:'Why Air Pollution',
        text:'Air pollution has debilitating effects on human life. Globally, it ranks 4th among leading risk factors causing deaths. In India, the situation is more critical. We stand as the second-most polluted country in the world. Living in Delhi shortens lifespans by 10 years, and the statistics are equally bleak for most cities in India.',
        img:<img className='object-cover object-center h-96 w-full' src='img6.jpg' alt='error' />
    },
    {
        id:3,
        heading:'Why Water Pollution',
        text:'Water pollution poses a severe threat to both human health and the environment. Globally, it is one of the leading causes of disease and death, affecting over 2 billion people who lack access to safe drinking water. In India, the crisis is especially alarming—over 70% of surface water is contaminated. Rivers like the Ganga, a lifeline for millions, are burdened with industrial waste, sewage, and plastic. Consuming polluted water leads to deadly illnesses such as cholera, typhoid, and cancer.',
        img:<img className='object-cover object-center h-96 w-full' src='img5.jpg' alt='error' />
    },
        {
        id:4,
        heading:'Why Land Pollution',
        text:'Land pollution is a growing environmental hazard that often goes unnoticed but has far-reaching consequences. It occurs when human activities—like improper waste disposal, deforestation, industrial dumping, and excessive use of pesticides—contaminate the soil. In India, the problem is escalating rapidly, with urban areas generating over 60 million tons of solid waste annually, much of which ends up in open landfills.',
        img:<img className='object-cover object-center h-96 w-full' src='img4.jpg' alt='error' />
    },
]

const homeArr2 = [
    {
        id:1,
        heading:'Program Implementation Support',
        text:'We deploy Project Management Units (PMUs) at Center, State and municipal levels of government to ensure appropriate enforcement and implementation.',
        icon:<IoSettingsOutline size={60}/>
    },
    {
        id:2,
        heading:'Creation of Knowledge Resources',
        text:'We produce toolkits and resources that help address key issues, and can be used by governments, intermediaries, and civil society organisations (CSO’s)',
        icon:<CiPen size={60}/>
    },        {
        id:3,
        heading:'Policy Research and Advocacy',
        text:'We are working toward supporting decision-making at the executive and legislature, and ensuring that air pollution gets the focus it merits.',
        icon:<GrGroup size={60}/>
    },
    
]
const Home = () => {
  return (
    <div>
      <div className="home-wrapper font-Nunito">
        <div className="bg-img w-full h-96 ">
        <img src='./img7.jpg' className='h-96 w-full object-center box-border object-cover -z-10' alt="" />
        </div>
        <div className="home-container w-5/6 py-20 mx-auto z-10 bg-white">
        <div className="first-content">
            {homeArr.map((e)=>{
                return (
                <div className='flex justify-between lg:flex-nowrap flex-wrap gap-10 p-4' key={e.id}>
                    <div className="text flex flex-col gap-6 w-full lg:w-1/2">
                        <p className='text-4xl underline-offset-8 underline decoration-green-500 font-extrabold'>{e.heading}</p>
                        <p className=''>{e.text}</p>
                    </div>
                    <div className="image w-full lg:w-1/2">
                        <p className=' h-96 w-full'>{e.img}</p>
                    </div>
                </div>
                )
            })}
        </div>
        <div className="second-container flex flex-col gap-10">
            <div className="heading underline underline-offset-8 decoration-green-500 text-4xl font-extrabold p-4">Our Approach</div>
            <div className="content-1 md:w-1/2">
                <p>Our approach involves supporting the government to reduce pollution. We work with them at all levels, and have a strong focus on making things happen on the ground. We are sector-agnostic and  work across all 5 sources of pollution, i.e. dust, industrial, domestic, biomass, and vehicular. Our focus is on piloting programs in small geographies, learning from them, and scaling them in ways that ensure maximum impact. Our approach is three-pronged:</p>
            </div>
            <div className="content-2 flex lg:flex-nowrap flex-wrap gap-4 justify-between">
            {homeArr2.map((e)=>{
                return(
                    <div className='p-5 flex flex-col items-center justify-center gap-6 lg:h-96 lg:w-96 rounded-xl shadow-md bg-custom-1' key={e.id}>
                        <p>{e.icon}</p>
                        <p className='text-2xl font-extrabold flex justify-center items-center'>{e.heading}</p>
                        <p>{e.text}</p>
                    </div>
                )
            })}
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home
