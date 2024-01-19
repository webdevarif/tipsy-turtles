import React from 'react';
import Team1 from '@/assets/images/Team/1.png';
import Team2 from '@/assets/images/Team/2.png';
import Team3 from '@/assets/images/Team/3.png';
import Team4 from '@/assets/images/Team/4.png';
import Team5 from '@/assets/images/Team/5.png';
import Team6 from '@/assets/images/Team/6.png';
import Team7 from '@/assets/images/Team/7.png';
import Image from 'next/image';


const Team = () => {
    const data = {

        list: [
            {
                thumbnail: Team1,
                name: "Jaymeon Jones",
                position: "Head of Project",
            },
            {
                thumbnail: Team2,
                name: "Alwayne White",
                position: "Head of Animation ",
            },
            {
                thumbnail: Team3,
                name: "Randy Burrell",
                position: "Head of Engineering",
            },
            {
                thumbnail: Team4,
                name: "Gashwayne Hudson",
                position: "Head of Art",
            },
            {
                thumbnail: Team5,
                name: "David Harris",
                position: "Head of Operations",
            },
            {
                thumbnail: Team6,
                name: "Richard Burnett",
                position: "Head of Community",
            },
            {
                thumbnail: Team7,
                name: "Minting Partner",
                position: "Saturn",
            }
        ]
    }
  return (
    <section className='team bg-[#FFC709] bg-opacity-25 text-dark py-[100px]'  id="section-team">
        <div className="container">
            
            {/* Header */}
            <div className="mb-[50px] border-b border-dark pb-[30px] text-center">
                <h2 className='font-bold text-[40px] xl:text-[50px] 2xl:text-[120px] leading-[1.1] text-primary-darker'>Team</h2>
                <h6 className="font-bold text-[30px]">We’re sober… promise?</h6>
            </div>

            {data.list && 
            <div className="flex flex-wrap gap-y-[70px] gap-x-[0px] justify-center">
                {data.list.map((item, i) => (
                    <div key={i} className="grid-item sm:w-1/2 xl:w-1/3 2xl:w-1/4 px-4">
                        <div className="text-center">
                            <div className="relative inline-block">
                                <Image src={item.thumbnail} alt={item.name} className='w-[250px] aspect-1 rounded-full'/>
                                <span className="absolute top-5 end-3"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="18" fill="#67AC47"/><path d="M12 17L17 22L25 14" stroke="white" strokeWidth="2"/></svg></span>
                                <h6 className='bg-white text-primary text-[18px] inline-block px-5 2xl:px-7 -translate-y-5 py-3 rounded-full'>{ item.position }</h6>
                            </div>
                            <h3 className='text-[28px] font-medium text-dark'>{item.name}</h3>
                        </div>
                    </div>
                ))}
            </div>}

        </div>
    </section>
  )
}

export default Team