import Image from 'next/image'

async function getData() {
  var myHeaders = new Headers();
  myHeaders.append("APIKEY", "9C82D349FCEB7");

  var requestOptions: any = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  const res = await fetch("http://api.xosocacmien.com/kqxs/xs-mb/last/30", requestOptions)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log('res', res);
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

//getData()

export default async function Home() {
  const data = await getData()
  console.log('data', data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>
          Hi
        </h1>
        {data.data.map((e: any, i: string) => {
          return (
            <>
              <div key={i}>
                <p>{e.name}</p>
                <p className='text-sm'>
                  {e.result0[0]}
                </p>
              </div>
            </>
          )
        })}
      </div>
    </main>
  )
}
