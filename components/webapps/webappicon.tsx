import Image from "next/image"

interface props{
    imageSource: string
    widthSize: number
    heightSize: number
}

export default function WebappIcon({imageSource, widthSize, heightSize}: props){
    return(
        <div className="flex pt-1">
            <div className="flex space-x-2">
                <Image src="/reactLogo.png" alt="" width={30} height={24}/>
                <Image src="/nextjslogo.png" alt="" width={30} height={24}/>
                <Image src="/typescriptlogo.png" alt="" width={28} height={24}/>
                <svg height="30" viewBox=".15 .13 799.7 479.69" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z" fill="#06b6d4"/></svg>
                <Image src={imageSource} alt="" width={widthSize} height={heightSize}/>
            </div>
        </div>
    )
}