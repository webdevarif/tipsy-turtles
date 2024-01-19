import React from 'react';
import GalleryImage1 from '@/assets/images/gallery/1.png';
import GalleryImage2 from '@/assets/images/gallery/2.png';
import GalleryImage3 from '@/assets/images/gallery/3.png';
import GalleryImage4 from '@/assets/images/gallery/4.png';
import GalleryImage5 from '@/assets/images/gallery/5.png';
import GalleryImage6 from '@/assets/images/gallery/6.png';
import GalleryImage7 from '@/assets/images/gallery/7.png';
import GalleryImage8 from '@/assets/images/gallery/8.png';
import Image from 'next/image';

const Gallery = () => {
    const data = {

        list : [
            { thumbnail : GalleryImage1 },
            { thumbnail : GalleryImage2 },
            { thumbnail : GalleryImage3 },
            { thumbnail : GalleryImage4 },
            { thumbnail : GalleryImage5 },
            { thumbnail : GalleryImage6 },
            { thumbnail : GalleryImage7 },
            { thumbnail : GalleryImage8 },
        ]
    }
  return (
    <section className='gallery py-[100px] bg-white' id="section-mini-gallery">
        <div className="container">
            {/* Header */}
            <div className="flex items-center justify-center 2xl:justify-between mb-[50px]">
                <div>
                    <h2 className='mb-3 font-bold text-[40px] xl:text-[50px] 2xl:text-[120px] leading-[1] text-primary-darker'>Mini Gallery</h2>
                    <h5 className='font-bold text-[24px] xl:text-[30px] 2xl:text-[30px] leading-[1] text-primary-darker'>Over 165 traits!</h5>
                </div>
                {/* <div className="hidden 2xl:block">
                    <a href="#" className="button button--primary">View All</a>
                </div> */}
            </div>

            {data.list && 
            <div className="flex flex-wrap gap-x-0 gap-y-4 -mx-2 justify-center">
                {data.list.map((item, i) =>(
                    <div key={i} className="grid-item px-2 w-1/2 sm:w-1/3 xl:w-1/4">
                        <Image src={item.thumbnail} alt="Thumbnail Image" className='w-full rounded-[6px]'/>
                    </div>
                ))}
            </div>}
            {/* <div className='text-center 2xl:hidden pt-10'>
                <a href="#" className="button button--primary">View All</a>
            </div> */}
        </div>
    </section>
  )
}

export default Gallery