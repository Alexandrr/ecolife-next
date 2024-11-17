import React from 'react'
import Link from "next/link";

export default function AppLink(pageparam) {
  return (
    <Link href={{pathname: '/name', query: {param: pageparam}}}>
    </Link>
  )
}
