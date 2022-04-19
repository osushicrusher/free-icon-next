import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ImageWithDetails from '@/components/ImageWithDetails'
import SimpleCards from '@/components/SimpleCards'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <div className="mt-14">
              <ImageWithDetails />
            </div>
            <div className="mt-14">
              <SimpleCards />
            </div>
            <div className="mt-14">
              <Faq />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}