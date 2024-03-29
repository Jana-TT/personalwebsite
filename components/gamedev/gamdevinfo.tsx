import Link from "next/link"
import Image from "next/image"
import HeaderInfo from "../animations/headerinfo"

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
}

export default function Gamedevinfo({text, imageSource, widthSize, heightSize, linkPage, header2, d12, d22, d32}: props) {
    return(
        <Link href={linkPage}>
            <div className="flex justify-center pt-8">

                <div>
                    <Image src={imageSource} alt="" width={widthSize} height={heightSize}/> 
                </div>

                <div className="justify-center pl-6 text-md font-robot">
                    <HeaderInfo header={header2} d1={d12} d2={d22} d3={d32}/>
                    {text.map((e) => 
                        <ul key={e}>
                            {e}
                        </ul>
                   )}
                </div>
            </div>
        </Link>
    )
}