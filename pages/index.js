import React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons'
import Layout, { WebsiteName } from '../components/Layout'
import Gallery from '../components/Gallery'
import Members from '../components/Members'
import Header from '../components/Header'

const today = new Date()

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Welcome | {WebsiteName}</title>
        <meta
          name="keywords"
          content="team barssity, teambarssity, barssityteam, teambarssity baguio"
        />
        <meta
          name="description"
          content="This is the official website of Team Barssity. A group built from friendship consisting of members of the same school and from the Philippines. We are from Informatics Institute Baguio consisting of Gamers, Athletes and Intellegent members."
        />
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content="Welcome | Team Barssity"
        />
        <meta
          name="og:description"
          property="og:description"
          content="This is the official website of Team Barssity. A group built from friendship consisting of members of the same school and from the Philippines. We are from Informatics Institute Baguio consisting of Gamers, Athletes and Intellegent members."
        />
        <meta property="og:site_name" content="Team Barssity" />
        <meta property="og:url" content="team-barssity.cf" />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-126683170-2"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        
                        gtag('config', 'UA-126683170-2');
                        `,
          }}
        />
      </Head>

      <Header />

      {/* Who We Are */}
      <div className="my-8 w-5/6 mx-auto text-center" id="who-we-are">
        <div>
          <h1 className="text-3xl font-semibold tracking-wide">Who We are?</h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light mt-2 tracking-wide">
            As stated above, we are made and built from friendship. We are
            students of the same school, Informatics Institute Baguio. Our group
            consists of mainly male Gamers, Athletes, and Students with
            different skills from the said school. Together, we have fun and
            strive in our studies as we all graduate. To have a memorable Senior
            high school life is what we want to have.
          </p>
        </div>
        <div className="mt-2 flex justify-center">
          <img src="/group.svg" className="h-48 w-auto" />
        </div>
      </div>

      <hr></hr>

      {/* Our Amazing Members */}
      <div className="bg-members" id="our-members">
        <div className="py-8 w-5/6 xl:w-4/5 mx-auto">
          <h1 className="text-3xl font-semibold tracking-wide mb-3 text-center text-white">
            Our Amazing Members
          </h1>
          <Members />
        </div>
      </div>

      {/* Gallery Container */}
      <Gallery />

      {/* Other Buttons */}
      <hr />
      <div className="bg-gray-100 py-8 flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-wide text-center">
            Our Messaging Groups
          </h1>
          <div className="mt-2 text-white text-lg font-smibold">
            <a
              href="https://discord.gg/E6EK9By"
              type="button"
              className="mx-1 py-3 px-6 bg-purple-600 hover:bg-purple-700 tracking-wide rounded-full"
            >
              <FontAwesomeIcon icon={faDiscord} />
              <span className="ml-1">Discord</span>
            </a>
            <a
              href="#"
              title="Not Available"
              type="button"
              className="mx-1 py-3 px-6 bg-blue-600 opacity-75 cursor-not-allowed tracking-wide rounded-full"
            >
              <FontAwesomeIcon icon={faFacebookMessenger} />
              <span className="ml-1">Messenger</span>
            </a>
          </div>
        </div>
      </div>
      <hr />

      {/* Send Us a Message */}
      <div className="my-8 w-5/6 mx-auto text-center" id="contact-us">
        <h1 className="text-3xl font-semibold tracking-wide">Contact Us</h1>
        <p className="font-light text-lg">Want to send us some message?</p>
        <div className="w-11/12 lg:w-2/3 xl:w-1/2 mx-auto mt-4">
          <form name="contact" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col mb-1">
                <label className="text-left tracking-wider text-gray-700 text-sm uppercase">
                  Full Name:
                </label>
                <input
                  required
                  className="py-2 px-3 font-light tracking-wide bg-gray-200 placeholder-gray-600 border-2 border-gray-300 rounded-md focus:outline-none focus:border-persian-green"
                  type="text"
                  placeholder="Enter your fullname"
                  name="Full Name"
                />
              </div>
              <div className="flex flex-col mb-1">
                <label className="text-left tracking-wider text-gray-700 text-sm uppercase">
                  Email Address:
                </label>
                <input
                  required
                  className="py-2 px-3 font-light tracking-wide bg-gray-200 placeholder-gray-600 border-2 border-gray-300 rounded-md focus:outline-none focus:border-persian-green"
                  type="email"
                  placeholder="Enter your email address"
                  name="Email Address"
                />
              </div>
            </div>
            <div className="flex flex-col mt-1">
              <label className="text-left tracking-wider text-gray-700 text-sm uppercase">
                Message:
              </label>
              <textarea
                required
                className="py-2 px-3 h-32 font-light tracking-wide bg-gray-200 placeholder-gray-600 border-2 border-gray-300 rounded-md focus:outline-none focus:border-persian-green"
                placeholder="Enter your message"
                name="Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-2 px-8 bg-persian-green text-gray-100 mt-2 opacity-75 hover:opacity-100 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-persian-green py-4 text-center">
        <p className="tracking-wide font-light text-gray-200">
          Copyrights &copy; {today.getFullYear()} | Team Barssity -{' '}
          <small>
            Design by{' '}
            <a href="https://github.com/TheBoringDude" className="underline">
              TheBoringDude
            </a>
          </small>
        </p>
      </footer>
    </Layout>
  )
}
