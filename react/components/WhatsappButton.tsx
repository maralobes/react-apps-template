import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}
const WhatsappButton = ({logo, phone, message, width, height}: Props) => {
    const formatMessage = message.replace(/ /g, "%20")
    return (
        <div className='fixed'>
            <a 
                href={`https://wa.me/${phone}?text=${formatMessage}`}
                target='_blank'
                rel='noreferrer noopener'
                >
                
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
WhatsappButton.propTypes  = {
    logo: PropTypes.string.isRequired, 
    phone: PropTypes.string.isRequired,
    message: PropTypes.string, 
    width: PropTypes.string, 
    height: PropTypes.string
}

WhatsappButton.defaultProps = {
    "logo": "logo.png",
    "phone": "89760045",
    "message": "Hola, necesita ayuda?",
    "width": 50,
    "height": 50
}

WhatsappButton.schema = {
    title: "Whatsapp button",
    type: "object",
    properties: {
        logo: {
            title: "Whatsapp logo",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Whatsapp phone",
            type: "string",
            description: "Please, add a phone number"
        },
        message: {
            title: "Whatsapp welcome message",
            type: "string",
            description: "Please, add a message for your customer",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Whatsapp logo width",
            type: "string",
            description: "Please, add the desire width of the Whatsapp logo"
        },
        height: {
            title: "Whatsapp logo height",
            type: "string",
            description: "Please, add the desire height of the Whatsapp logo"
        }
    }
}

export default WhatsappButton;