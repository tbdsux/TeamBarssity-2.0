import Head from 'next/Head'
export const siteName = 'Team Barssity'

function Layout({ children }) {
    return (
        <div className="antialiased w-full h-full">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" type="image/png" href="/logo.png" />
                <link href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
                <script 
                    dangerouslySetInnerHTML={{
                        __html:`<!-- Global site tag (gtag.js) - Google Analytics -->
                        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126683170-2"></script>
                        <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        
                        gtag('config', 'UA-126683170-2');
                        </script>
                        `,
                    }} 
                />
            </Head>
            <body>
            { children }
            </body>
        </div>
    )
}

export default Layout