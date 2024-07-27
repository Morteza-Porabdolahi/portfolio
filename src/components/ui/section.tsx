import type { ReactNode } from 'react'

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className='pt-16 px-5'>
      {children}
    </section>
  )
}

