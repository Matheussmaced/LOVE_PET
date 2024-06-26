import { ReactNode } from 'react'
import Header from '../../components/header'

import type { Metadata } from 'next'
// eslint-disable-next-line
import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className={bebasNeue.className}>
      <Header />
      {children}
    </div>
  )
}
