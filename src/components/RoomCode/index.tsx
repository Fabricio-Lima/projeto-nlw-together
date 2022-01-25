import { Button, Content, Text } from './styles'
import copyImg from '../../assets/images/copy.svg'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react';

type RoomCodeProps = {
    code: string
}

const RoomCode = (Props: RoomCodeProps) => {

    const copyRoomCodeToClipboard = () => {
        navigator.clipboard.writeText(Props.code)
    }

    return (
        <Button onClick={copyRoomCodeToClipboard}>   
            <Content>
                <Image src={copyImg} alt="copy-image" />
            </Content>
            <Text> Sala #{Props.code}</Text>
        </Button>
    )
}

export default RoomCode