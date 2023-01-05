import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RootProvider } from '../context/root.provider'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const { isReady } = useRouter();
  const [cartInfo, setcartInfo] = useState([])
  useEffect(() => {
    if (isReady) {
      setcartInfo(JSON.parse(localStorage.getItem("cart")) ?? [])
    }
  }, [])
  

  return (
    <RootProvider initialData={cartInfo}>
      <Component {...pageProps}  />
    </RootProvider>
  )
}

