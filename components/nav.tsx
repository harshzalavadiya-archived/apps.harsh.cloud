import Link from "next/link"
import React from "react"

export default function Nav() {
  return (
    <nav className="mb-4 border-b border-gray-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between p-4">
        <Link href="/" passHref={true}>
          <a className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800">
            👋
          </a>
        </Link>

        <ul className="flex items-center space-x-2">
          <li>
            <a className="rounded-lg px-3 py-2" href="">
              {" "}
              Projects{" "}
            </a>
          </li>

          <li>
            <a
              className="inline-flex items-center rounded-lg px-3 py-2"
              href=""
              target="_blank"
            >
              External
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
