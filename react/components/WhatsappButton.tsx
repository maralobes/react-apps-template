import React from 'react';

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}
const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
    console.log(logo, phone, message, width, height)
    return (
        <div className='fixed'>
            <a href="">
                <img 
                    src={logo}
                    alt={message}
                    width= {width}
                    height= {height}
                />
            </a>
        </div>
    )
}

export default WhatsappButton;