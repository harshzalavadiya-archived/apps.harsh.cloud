import Head from "next/head"
import Card from "../components/card"

const applications = [
  {
    name: "Random",
    desc: "Random but memorable passphrase generator",
    link: "https://random.harsh.cloud/",
    style: {},
  },
  {
    name: "JSON Viewer",
    desc: "viewer + formatter with ability to sort json keys",
    link: "https://json.harsh.cloud/",
    style: { background: "linear-gradient(25deg,#202d3a, #5a5c6a)" },
  },
  {
    name: "Diffy",
    desc: "minimalistic diffchecker",
    link: "https://diffy.harsh.cloud/",
    style: { background: "linear-gradient(25deg,#ff9a9e,#fad0c4)" },
  },
  {
    name: "URI",
    desc: "URI encode/decode",
    link: "https://convert.harsh.cloud/uri",
    style: { background: "linear-gradient(25deg,#d64c7f,#ee4758)" },
  },
  {
    name: "Base64",
    desc: "Base64 encode/decode",
    link: "https://convert.harsh.cloud/base64",
    style: { background: "linear-gradient(25deg,#fda085,#f6d365)" },
  },
]

export default function Home() {
  return (
    <div className="grid w-full grid-cols-2 gap-6">
      {applications.map((app) => (
        <Card key={app.name} {...app} />
      ))}
    </div>
  )
}
