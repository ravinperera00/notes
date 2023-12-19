import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from './(marketing)/_components/Navbar'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import { EdgeStoreProvider } from '@/lib/edgestore'
import { ModalProvider } from '@/components/providers/modal-provider'
const poppins = Poppins({subsets:["latin"],weight:["400","600"]});

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Note taking made simpler...',
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo_dark.svg",
        href: "/logo_dark.svg",
      },
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-full ${poppins.className}`}>
        <EdgeStoreProvider>
        <ConvexClientProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          disableTransitionOnChange={true}
          storageKey='notes-theme'
        >
          <Toaster />
          <ModalProvider />
          {children}
        </ThemeProvider>
        </ConvexClientProvider>
        </EdgeStoreProvider>
      </body>
    </html>
  )
}
