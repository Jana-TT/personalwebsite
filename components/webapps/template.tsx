import Link from "next/link"
import Image from "next/image"
import HeaderInfo from "../animations/headerinfo"
import WebappIcon from "./webappicon"

interface props{
    text: string[]
    imageSource: string
    widthSize: number
    heightSize: number
    linkPage: string

    header2 : string
    d12: string
    d22: string
    d32: string 

    logoSource: string
    widthLogo: number
    heightLogo: number
}

export default function Template({text, imageSource, widthSize, heightSize, linkPage, header2, d12, d22, d32, logoSource, widthLogo, heightLogo}: props) {
    return(
        <Link href={linkPage}>
            <div className="flex pb-4 pt-6 pl-6">
                
                <div className="rounded">
                    <Image src={imageSource} alt="" width={widthSize} height={heightSize} className="rounded"/> 
                </div>

                <div className="pl-6 text-md max-w-prose font-robot overflow-visible">
                    <HeaderInfo header={header2} d1={d12} d2={d22} d3={d32}/>
                    {text.map((e) => 
                        <ul key={e}>
                            {e}
                        </ul>
                   )}
                   <WebappIcon imageSource={logoSource} widthSize={widthLogo} heightSize={heightLogo}/>
                </div>

            </div>
            
        </Link>
    )
}