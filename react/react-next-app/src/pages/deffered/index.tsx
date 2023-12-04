import React, { useDeferredValue, useEffect, useState } from 'react'
import SlowList from './SlowList'
import { Input } from '@/components/styled-components'

const Deffered = () => {

    const [query, setQuery] = useState('')
    const defferedQuery = useDeferredValue(query);

    const onInputChange = (e: any) => {
        setQuery(e.target?.value)
    }

    useEffect(() => {
        console.log('query:: ', query)
        console.log('deffered: ', defferedQuery);
        console.log("END_______")
    }, [query, defferedQuery])

    return (
        <div className='p-5'>
            <div className="flex">
                <Input onChange={onInputChange}/>
            </div>
            <div className="basis-full">
                actual query: {query}, defferedQuery: {defferedQuery}
            </div>
            <SlowList query={query} />
        </div>
    )
}

export default Deffered