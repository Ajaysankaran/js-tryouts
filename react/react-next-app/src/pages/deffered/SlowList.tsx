import React, { Suspense, useEffect, useState } from 'react'

const fetchData = (setNames: any, setFilteredNames: any) => {

}


const SlowList = (props: { query: string }) => {
    const [names, setNames] = useState<string[]>([]);
    const [filteredNames, setFilteredNames] = useState<string[]>([])

    useEffect(() => {
        console.log("executing use effect")

        setTimeout(() => fetch("http://localhost:3000/data/names.json").then(res => res.json())
            .then(data => {
                console.log(data)
                setNames(data)
                setFilteredNames(data)
            }), 3000)
        return () => {
            console.log("CLEANUP function")
        }
    }, [])

    useEffect(() => {
        if (props.query) {
            const n = names.filter(name => name.toLowerCase().includes(props.query)) as string[];
            setFilteredNames(n)
        }
    }, [props.query])

    return (
        <div>
            <Suspense fallback={<span className='text-lg'> `⏳` Loading...</span>}>
                <ul className='columns-10'>
                    {filteredNames.map((name, index) => <li key={index}>{name}</li>)}
                </ul>
            </Suspense>
        </div>
    )
}

export default React.memo(SlowList)