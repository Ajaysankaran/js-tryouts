// 'use client'
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useState } from 'react';

const NList = dynamic(() => import('./NameList'), {
    ssr: false
})


const index = () => {


    return (
        <div className='p-10'>
            <button className='p-3 bg-purple-950' >Load Names</button>
            <ul>
                <Suspense fallback={<span className='text-lg'> `⏳` Loading...</span>}>
                    <NList />
                </Suspense>
            </ul>
        </div>
    )
}

export default index