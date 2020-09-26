import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import {members} from "../../members"
import Layout from '../../components/Layout'
import Head from 'next/head'
import Page from '../../components/Page'

export default function MembersPage() {
    const router = useRouter()
    const [memberNickname, setMemberNickname] = useState(null)

    useEffect(() => {
        if (router && router.query){
            setMemberNickname(router.query.member)
        }
    })

    const member = members.filter((p) => p.nickname === memberNickname)[0]
    if(!member) {
        return null;
    }

    return (
        <Layout>
            <Head>
            <title>{member.name} | Team Barssity</title>
            </Head>
            <Page member={member} />
        </Layout>
    )
}