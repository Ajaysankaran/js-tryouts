// 'use client'


function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function loadNames() {
    const res = await fetch("http://localhost:3000/data/names.json");
    await timeout(3000);
    return res;
}

export default async function NamesList(props: any) {

    const res = await loadNames();
    const data = await res.json()

    return (
        <ul className='columns-10'>
            {data.map((name: any, index: any) => <li key={index}>{name}</li>)}
        </ul>
    )
}

