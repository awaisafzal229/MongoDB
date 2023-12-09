import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Link href={'/products'}>PRODUCTS</Link>
    <br />
    <hr />
    <p>Hello World</p>

    </>
  )
}
