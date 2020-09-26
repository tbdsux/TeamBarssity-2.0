import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import Layout, { siteName } from '../components/Layout'
import Gallery from '../components/Gallery'
import Members from '../components/Members'

const today = new Date()

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Welcome | {siteName}</title>
                <meta name="description" content="This is the official website of Team Barssity. A group built from friendship consisting of members of the same school and from the Philippines. We are from Informatics Institute Baguio consisting of Gamers, Athletes and Intellegent members." />
                <meta property="og:type" content="website" />
                <meta name="og:title" property="og:title" content="Welcome | Team Barssity" />
                <meta name="og:description" property="og:description" content="This is the official website of Team Barssity. A group built from friendship consisting of members of the same school and from the Philippines. We are from Informatics Institute Baguio consisting of Gamers, Athletes and Intellegent members." />
                <meta property="og:site_name" content="Team Barssity" />
                <meta property="og:url" content="team-barssity.cf" />
                {/* Global site tag (gtag.js) - Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126683170-2"></script>
                <script 
                    dangerouslySetInnerHTML={{
                        __html:`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        
                        gtag('config', 'UA-126683170-2');
                        `,
                    }} 
                />
            </Head>

            {/* Main Showcase Section */}
            <div className="main-showcase h-screen">
                <div className="bg-bland">
                    <nav className="w-11/12 mx-auto py-2 flex flex-col md:flex-row items-center justify-between">
                        <div className="w-full md:w-auto flex items-center justify-center">
                            <div className="flex items-center">
                                <img src="/logo.png" className="h-10 w-10 object-cover"/> <h1 className="font-cursive ml-1 text-white tracking-wide text-xl font">Team Barssity</h1>
                            </div>
                        </div>
                        <ul className="flex mt-2 md:mt-0 text-center">
                            <li className="px-4"><a href="#who-we-are" className="font-light text-gray-300 tracking-widest text-sm uppercase hover:text-persian-green">About Us</a></li>
                            <li className="px-4"><a href="#our-members" className="font-light text-gray-300 tracking-widest text-sm uppercase hover:text-persian-green">Our Members</a></li>
                            <li className="px-4"><a href="#contact-us" className="font-light text-gray-300 tracking-widest text-sm uppercase hover:text-persian-green">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="w-11/12 mx-auto flex items-center justify-center mt-4 sm:mt-12 xl:mt-24 lg:mt-20 md:mt-16">
                    <div className="text-center">
                        <h1 className="font-black text-3xl lg:text-4xl tracking-wide text-white">Hi! @person</h1>
                        <div className="mt-3 md:mt-6 text-white">
                            <p className="font-light tracking-wide text-xl lg:text-2xl">We are a Group built from friendship. "Die with Memories, not Dreams".</p>
                            <p className="text-xl lg:text-2xl font-light tracking-wide">We are<br /><span className="font-bold underline text-3xl md:text-4xl font-cursive tracking-wide">Team Barssity</span></p>
                        </div>
                        <div className="mt-4 text-gray-300">
                            <a href="#who-we-are" type="button" className="font-bold uppercase tracking-wide m-1 py-2 px-6 border-4 rounded-full border-persian-green hover:bg-persian-green"><FontAwesomeIcon icon={faInfoCircle} /> Who we Are</a>
                            <a href="#our-members" type="button" className="font-bold uppercase tracking-wide m-1 py-2 px-6 border-4 rounded-full border-persian-green bg-persian-green hover:text-white"><FontAwesomeIcon icon={faUsers} /> Our Members</a>
                        </div>
                        <div className="mt-4">
                            <Gallery />
                        </div>
                    </div>
                </div>
            </div>

            {/* Who We Are */}
            <div className="my-8 w-5/6 mx-auto text-center" id="who-we-are">
                <div>
                    <h1 className="text-3xl font-semibold tracking-wide">Who We are?</h1>
                    <p>As stated above, we are made and built from friendship. We are students of the same school, Informatics Institute Baguio. Our group consists of mainly male Gamers, Athletes, and Students with different skills from the said school. Together, we have fun and strive in our studies as we all graduate. To have a memorable Senior high school life is what we want to have.</p>
                </div>
                <div className="mt-2 flex justify-center">
                    <img src="/group.svg" className="h-48 w-auto"/>
                </div>
            </div>

            <hr></hr>

            {/* Our Amazing Members */}
            <div className="bg-members" id="our-members">
                <div className="py-8 w-5/6 xl:w-4/5 mx-auto">
                    <h1 className="text-3xl font-semibold tracking-wide mb-3 text-center text-white">Our Amazing Members</h1>
                    <Members />
                </div>
            </div>

            {/* Other Buttons */}
            <div className="bg-gray-100 py-8 flex items-center justify-center">
                <div>
                    <h1 className="text-2xl font-semibold tracking-wide text-center">Our Messaging Groups</h1>
                    <div className="mt-2 text-white text-lg font-smibold">
                        <a href="https://discord.gg/E6EK9By" type="button" className="mx-1 py-3 px-6 bg-purple-600 hover:bg-purple-700 tracking-wide rounded-full"><FontAwesomeIcon icon={faDiscord} /><span className="ml-1">Discord</span></a>
                        <a href="#" title="Not Available" type="button" className="mx-1 py-3 px-6 bg-blue-600 opacity-75 cursor-not-allowed tracking-wide rounded-full"><FontAwesomeIcon icon={faFacebookMessenger} /><span className="ml-1">Messenger</span></a>
                    </div>
                </div>
            </div>

            <hr></hr>

            {/* Send Us a Message */}
            <div className="my-8 w-5/6 mx-auto text-center" id="contact-us">
                <h1 className="text-3xl font-semibold tracking-wide">Contact Us</h1>
                <p className="font-light text-lg">Want to send us some message?</p>
                <div className="w-11/12 lg:w-2/3 xl:w-1/2 mx-auto mt-4">
                    <form name="contact" method="post" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col mb-1">
                                <label className="text-left tracking-wider text-gray-700 text-sm uppercase">Full Name:</label>
                                <input className="py-2 px-3 font-light tracking-wide bg-gray-200 border-2 rounded focus:outline-none focus:border-persian-green" type="text" placeholder="Enter your fullname" name="Full Name" />
                            </div>
                            <div className="flex flex-col mb-1">
                                <label className="text-left tracking-wider text-gray-700 text-sm uppercase">Email Address:</label>
                                <input className="py-2 px-3 font-light tracking-wide bg-gray-200 border-2 rounded focus:outline-none focus:border-persian-green" type="email" placeholder="Enter your email address" name="Email Address" />
                            </div>
                        </div>
                        <div className="flex flex-col mt-1">
                            <label className="text-left tracking-wider text-gray-700 text-sm uppercase">Message:</label>
                            <textarea className="py-2 px-3 h-32 font-light tracking-wide bg-gray-200 border-2 rounded focus:outline-none focus:border-persian-green" placeholder="Enter your message" name="Message"></textarea>
                        </div>
                        <button type="submit" className="py-2 px-8 bg-persian-green text-gray-100 mt-2">Send Message</button>
                    </form>
                </div>
            </div>

            <footer className="bg-persian-green py-4 text-center">
                <p className="tracking-wide font-light text-gray-200">Copyrights &copy; {today.getFullYear()} | Team Barssity - <small>Design by <a href="https://github.com/TheBoringDude" className="underline">TheBoringDude</a></small></p>
            </footer>
        </Layout>
    )
}