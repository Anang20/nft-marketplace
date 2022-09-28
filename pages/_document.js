import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-[#1B1E2A]" style={{ fontFamily: 'Poppins, sans-serif', }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}