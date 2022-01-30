import gradient from "random-gradient"
import React from "react"

interface CardProps {
  name: string
  link: string
  desc: string
  style?: any
}

export default function Card({ name, link, desc, style }: CardProps) {
  return (
    <a
      href={link}
      className="relative block w-full overflow-hidden rounded-xl bg-yellow-600"
      // style={{ background: "linear-gradient(25deg,#202d3a, #5a5c6a)" }}
    >
      <div className="flex h-60 items-center justify-center bg-yellow-400">
        <img src="/icons/key.png" className="h-40 w-40" />
      </div>
      <div className="relative flex h-36 flex-col justify-end p-6">
        <h5 className="mb-3 text-2xl font-semibold">{name}</h5>

        <p className="m-0">{desc}</p>
      </div>
    </a>

    // <a
    //   href={link}
    //   className="relative block rounded-md border-2 border-gray-200 bg-white p-6 shadow-xl"
    // >
    //   <h5 className="text-3xl font-light">
    //     {icon} {name}
    //   </h5>
    //   <p className="mt-4 text-lg font-medium text-gray-500">{desc}</p>
    //   {/* <span className="absolute top-6 right-6">{icon}</span> */}
    // </a>
  )
}
