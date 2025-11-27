import { Flame } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {Link as ViewTransitionsLink} from 'next-view-transitions'
import {ModeToggle}    from '@/components/ui/theme-toggle'
const Header = () => {
    return (
        <>
            {/* header for mobile */}
            <div className='sticky top-0 left-0 right-0 z-50'>
                <div className='bg-white dark:bg-black/5 w-full '>
                    {/* rest of header components */}
                    <div className='flex items-center justify-between w-full flex-col'>
                        <div className={`flex items-center justify-between bg-linear-to-b from-white/90 via-gray-50/90 to-white/90 dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90 shadow-[0_2px_20px_-2px_rgba(0,0,0,0.1)] backdrop-blur-md border-x border-b border-[rgba(230, 230, 230, 0.7)] dark:border-[rgba(70,70,70,0.7)] w-full  sm:min-w-[800px] sm:max-w-[1200px] rounded-b-[28px] px-4 py-2.5 relative transition-all duration-300 ease-in-out `}>
                            <div className='relative z-10 flex items-center justify-between w-full gap-2'>
                                {/* logo */}
                                <Link href='/'><Flame /> <span className='text-2xl font-bold'>Com</span></Link>
                            </div>

                            <div className='hidden sm:flex items-center  gap-4'>
                            <ViewTransitionsLink 
                            href={'/docs/components/background-paths'}
                            className='text-sm text-zinc-600 hover:text-zinc-900'
                            >
                                Components
                            </ViewTransitionsLink>
                            <ViewTransitionsLink 
                            href={'/pricing'}
                            className='text-sm text-zinc-600 hover:text-zinc-900'
                            >
                                Pricing
                            </ViewTransitionsLink>
                            </div>
                        </div>
                        <ModeToggle />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header