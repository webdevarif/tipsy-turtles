import React from 'react';
import LOGO from '@/assets/images/footer-logo.svg';
import twitter from '@/assets/icons/twitter.svg';
import Discord from '@/assets/icons/discord.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const data = {
        widget_1: {
            logo: LOGO,
            list: [
                {
                    name: "Terms & Conditions",
                    slug: "/pdf/tipsy-turtles-terms-of-use.pdf",
                }
            ]
        },
        widget_2: {
            heading: "Affiliates",
            list: [
                {
                    name: "TripHut",
                    slug: "#",
                    title: 'Coming soon...',
                },
                {
                    name: "AniMints",
                    slug: "#",
                    title: 'Coming soon...',
                    
                },
                {
                    name: "Yaad Labs",
                    slug: "https://yaadlabs.io/",
                }
            ]
        },
        widget_3: {
            heading: "Connects",
            list: [
                {
                    heading: "Email us at",
                    label: "tipsyturtles_by@yaadlabs.io",
                    slug: "mailto:tipsyturtles_by@yaadlabs.io",
                }
            ],
            socials: [
                {
                    icon: twitter,
                    slug: "https://twitter.com/tipsy__turtles",
                },
                {
                    icon: Discord,
                    slug: "https://discord.gg/evHwMmW3RN",
                },
            ],
        }
    }
  return (
    <footer className='footer overflow-hidden bg-[#2F321D] text-white pt-[100px] pb-[50px] text-[22px]'>
        <div className="container">
            <div className="grid sm:grid-cols-[3fr_2fr_3fr] md:grid-cols-3 sm:gap-x-[30px] xl:gap-x-[60px] 2xl:gap-x-[120px]">
                { data?.widget_1 && 
                    <div className="footer-widget">
                        { data?.widget_1?.logo && 
                            <div className="mb-5">
                                <Link href="/" className='inline-block'><Image src={data.widget_1.logo} alt="Footer Logo" /></Link>
                            </div>
                        }
                        { data?.widget_1?.list && 
                            <ul className="list-menu flex flex-col gap-5 mb-[30px] text-[18px] 2xl:text-[22px]">
                                {data?.widget_1?.list?.map((item, i) =>(
                                    <li key={i}><a href={item.slug} target='_blank'>{item.name}</a></li>
                                ))}
                            </ul>
                        }
                    </div>
                }
                {
                    data?.widget_2 && 
                    <div className="footer-widget">
                        { data.widget_2.heading && <h4 className="widget-title text-[30px] 2xl:text-[40px] leading-[36px] border-b border-white pb-[20px] mb-[30px] font-bold">{ data.widget_2.heading }</h4> }
                        {
                            data.widget_2.list &&
                            <ul className="list-menu flex flex-col gap-5 mb-[30px] text-[18px] 2xl:text-[22px]">
                                {
                                    data.widget_2.list.map((item, i) =>(
                                        item.title ? 
                                        <li key={i}>
                                            <div className="inline-block relative group/item">
                                                <a href={item.slug} className=''>{item.name}</a>
                                                <div className="bg-primary text-white p-2 inline-flex items-center justify-center w-full min-w-[8rem] text-center absolute top-1/2 -translate-y-1/2 start-[calc(100%+1rem)] opacity-0 invisible group-hover/item:visible group-hover/item:opacity-100 group-hover/item:start-[calc(100%+0.5rem)] rounded transition-all duration-200 text-sm">{item.title}</div>
                                            </div>
                                        </li>
                                        :
                                        <li key={i}><a href={item.slug} className=''>{item.name}</a></li>
                                    ))
                                }
                            </ul>
                        }
                    </div>
                }
                {
                    data?.widget_3 && 
                    <div className="footer-widget">
                        { data.widget_3.heading && <h4 className="widget-title text-[30px] 2xl:text-[40px] leading-[36px] border-b border-white pb-[20px] mb-[30px] font-bold">{ data.widget_3.heading }</h4> }
                        {
                            data.widget_3.list &&
                            <ul className="list-menu flex flex-col gap-5 mb-[30px] text-[18px] 2xl:text-[22px]">
                                {
                                    data.widget_3.list.map((item, i) =>(
                                        <li key={i}>
                                            { item.heading && <h6 className='font-bold'>{ item.heading }</h6>}
                                            <a href={item.slug}>{item.label}</a></li>
                                    ))
                                }
                            </ul>
                        }
                        {
                            data.widget_3.socials &&
                            <ul className="list-socials flex gap-x-6">
                                {
                                    data.widget_3.socials.map((item, i) =>(
                                        <li key={i}>
                                            <a href={item.slug} className='min-w-[40px] w-[40px] h-[40px] 2xl:min-w-[62px] 2xl:w-[62px] 2xl:h-[62px] p-2 bg-white text-black inline-flex items-center justify-center rounded-full'>
                                                <Image src={ item.icon } alt="Social Icons" />
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        }
                    </div>
                }
            </div>

            <hr className='border-t border-slate-50 mt-[60px] mb-[40px]'/>

            <div className="copyright-content  text-[18px] xl:text-[20px] leading-[1.5]">
                <p>© Copyright 2024 by Yaad Labs Limited. All rights Reserved. </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer