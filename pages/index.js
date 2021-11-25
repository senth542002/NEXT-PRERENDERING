import Link from 'next/link'

function Home() {
  return (<>
  <h1>Next JS pre-rendering</h1> <br/>
  <Link href='/users'>Users</Link>
  </>)
}

export default Home