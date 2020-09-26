import {useRouter} from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { members } from '../members'

export default function Page({member}) {
    const router = useRouter()

    return (
        <div id="modal" className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto flex items-center justify-center bg-white rounded-md">
            <div className="relative pb-8">
                <button onClick={() => router.push("/")} className="absolute top-0 right-0 text-gray-100 hover:scale-125 transition-transform transform duration-500 z-50 -mt-2 -mr-2"><FontAwesomeIcon icon={faWindowClose} size="2x" /></button>
                <div className="relative flex items-end justify-center z-40">
                    <img src={`/background/${member.background}`} alt="" className="h-64 md:h-56 rounded-t-md w-full object-cover object-top" />
                    <img src={`/members/${member.image}`} alt="" className="h-32 md:h-40 w-32 md:w-40 object-cover rounded-full absolute -bottom-1 md:-bottom-2"/>
                </div>
                <div className="px-4 text-center mt-10 md:mt-16">
                    <h1 className="text-2xl md:text-2xl font-black tracking-wide text-persian-green">{member.name}</h1>
                    <p className="text-xl font-light tracking-wide text-gray-800 italic">"{member.qoute}"</p>
                    <hr className="my-3 mx-8" />
                    <div>
                        <h3 className="text-gray-700 uppercase text-sm">Social Network Accounts</h3>
                        <ul className="flex flex-col justify-center items-center">
                            <SocialFacebook fb={member.social.facebook} member={member} />
                            <SocialInstagram insta={member.social.instagram} member={member} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SocialFacebook({fb, member}) {
    if (fb) {
        return (
            <li className="my-1">
                <a href={`${member.social.facebook}`} className="hover:text-blue-800 text-gray-600 font-light tracking-wide flex items-center text-lg"><FontAwesomeIcon icon={faFacebookSquare} size="lg" /><span className="ml-1">@{member.social.facebook.replace("https://www.facebook.com/", "")}</span></a>
            </li>
        )
    }
    return null
}

function SocialInstagram({insta, member}) {
    if (insta) {
        return (
            <li className="my-1">
                <a href={`${member.social.instagram}`} className="hover:text-red-600 text-gray-600 font-light tracking-wide flex items-center text-lg"><FontAwesomeIcon icon={faInstagramSquare} size="lg" /><span className="ml-1">@{member.social.instagram.replace("https://www.instagram.com/", "")}</span></a>
            </li>
        )
    }
    return null
}