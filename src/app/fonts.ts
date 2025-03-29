import { Inter, Sarabun, Kanit } from 'next/font/google'

export const sarabun = Sarabun({
    subsets: ['thai'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-sarabun'
}); 

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-boomza'
})

export const kanit = Kanit({
    subsets: ['thai'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-kanit'
}); 