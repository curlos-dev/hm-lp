import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Plan from '@/components/Plan'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import SavingsQuizLink from '@/components/SavingsQuizLink'
import SelectYourLinesAndPlan from '@/components/SelectYourLinesAndPlan';
import AnimatedIcon from '@/components/AnimatedIcon'
import BuyOrBringPhoneList from '@/components/BuyOrBringPhoneList'
import Footer from '@/components/Footer';
import Bogo from '@/components/Bogo'
import ComparisonChart from '@/components/ComparisonChart'
import { PLANS, ANIMATED_ICONS } from '../../utils/plans'
import styles from './Savings.module.css'
import FAQSection from '@/components/FAQSection';

export default function SavingsLandingPage() {
  return (
    <>
      <Head>
        <title>Hello Mobile | Say Hello To The Very Best Of Wireless.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        {/* Header Component */}
        <Header />
        
        {/* BOGO Component */}
        <Bogo />

        {/* Banner Component */}
        <div className={`${styles.bannerContainer}`}>
          <Container className="d-flex">
            <div className={`${styles.bannerContainerLeft}`}>
              <div className={`${styles.title}`}>
                <div>
                  <span className={`${styles.strikethrough}`}>CUT</span> Your Phone Bill
                </div>

                <div className="">In <span className="text-yellow-1">HALF & SAVE</span></div>
              </div>

              <div className={`${styles.subTitle}`}>
                <div>Get UNLIMITED Data, Text & Talk</div>
                <div>For Only $25</div>
              </div>

              <div className="d-flex justify-content-start">
                <a href="https://dev.hellomobile.com/shop/plans" className="button yellowRoundedButton mt-5">Switch Now</a>
              </div>
            </div>

            <div className={`${styles.bannerContainerRight}`}></div>
          </Container>
        </div>

        {/* 4 Icons */}
        <Container>
          <div className={`${styles.animatedIconsWrapper}`}>
            {ANIMATED_ICONS.map((iconDetails) => (
              <AnimatedIcon key={iconDetails.descriptions[0]} iconDetails={iconDetails} />
            ))}
          </div>
        </Container>

        {/* Plans */}
        <div className={`${styles.plansContainer}`}>
            <Container className="d-flex flex-column justify-content-center align-items-center">
              <h2 className={`${styles.plansTitle}`}>America&apos;s Fastest & Most Affordable Wireless Provider<span style={{
                fontSize: '20px',
                marginTop: '10px'
              }}>™</span></h2>

              <div className={`${styles.plansWrapper}`}>
                {PLANS.map((planDetails, index) => (
                  <Plan key={index} planDetails={planDetails} />
                ))}
              </div>

              <a href="https://dev.hellomobile.com/shop/plans" className="button yellowRoundedButton mt-5">Start Saving Now</a>
            </Container>
        </div>
        
        {/* Select Your Lines & Your Plan */}
        <SelectYourLinesAndPlan />


        {/* Take Our Savings Quiz */}
        <SavingsQuizLink />


        {/* Buy or Bring Your Own Phone */}
        <BuyOrBringPhoneList />

        {/* Compare And See Why We're The Best Deal */}
        <ComparisonChart />

        {/* Ready to experience the benefits of our wireless service at no risk? */}
        <FAQSection />

        {/* Footer */}
        <Footer />

      </main>
    </>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {

  return {
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    props: {},
    revalidate: 10, // In seconds
  }
}