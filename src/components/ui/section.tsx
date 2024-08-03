import type { ReactNode } from 'react'

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className='pt-20 px-5 max-w-5xl mx-auto'>
      {children}
    </section>
  )
}

