import {useRouter} from 'next/router'
import { useEffect, useState } from "react"
import Modal from 'react-modal'
import Link from 'next/link'
import {members} from '../members'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import Page from './Page'

Modal.setAppElement("#__next");

export default function Members() {
    const router= useRouter()

    return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member) => (
            <Link key={member.id} href={`/?member=${member.nickname}`} as={`/members/${member.nickname}`}>
                <a type="button" className="transform transition-all duration-500 hover:scale-110 h-64 flex items-center justify-center bg-gray-100 rounded-md">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <img src={`/members/${member.image}`} className="h-28 w-28 xl:h-40 xl:w-40 rounded-full object-cover" />
                        <div className="w-full pt-3 lg:pt-0 lg:pl-6 text-center lg:text-left">
                            <h3 className="text-2xl xl:text-3xl font-black tracking-wide text-persian-green">{member.name}</h3>
                            <p className="text-xl font-light tracking-wide text-gray-700 italic">"{member.qoute}"</p>
                            <div className="mt-2 text-gray-800 flex items-center justify-center lg:justify-start">
                                <button type="button" onClick={(e) => {e.preventDefault(); window.open(`${member.social.facebook}`, '_blank') }} className="text-lg flex items-center tracking-wide hover:text-persian-green"><FontAwesomeIcon icon={faFacebookSquare} size="lg" /><span className="ml-1">@{member.fbSlug}</span></button>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        ))}
    </div>

    <Modal
     isOpen={!!router.query.member}
     className="overflow-auto rounded-lg outline-none absolute transition-all duration-500"
     overlayClassName="bg-bland fixed inset-0 h-screen"
     >
        <div className="rounded-md flex flex-col items-center justify-center h-screen" onClick={(e) => handleClick(e) ? router.push("/") : ""}>
        <Page member={checkMember()} />
        </div>
    </Modal>
    </>
    )
}

function handleClick(e) {
    const modal = document.getElementById('modal');

    if (!modal.contains(e.target)){
        return true
    }
    return false
}

function checkMember() {
    const router = useRouter()
    const [memberNickname, setMemberNickname] = useState(null)

    useEffect(() => {
        if (router && router.query){
            setMemberNickname(router.query.member)
        }
    })

    const pm = members.filter((p) => p.nickname === memberNickname)[0]
    if(!pm) {
        return null;
    }
    return pm
}