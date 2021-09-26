/* eslint-disable react/destructuring-assignment */
import { Button, Center, Flex } from 'native-base'
import { useState, ReactNode } from 'react'

import usePrevious from 'hooks/usePrevious'

type BoxType = {
    children: ReactNode
}

const MAX = 5

const StyledBox = (props: BoxType) => (
    <Center
        width="100%"
        borderWidth={2}
        borderColor="black"
        p={8}
        _text={{ fontWeight: 'bold', fontSize: 'lg' }}
    >
        {props.children}
    </Center>
)

export default function Hello() {
    const [count, setCount] = useState(0)
    const prevCount = usePrevious(count)

    const onClick = () => {
        if (count < MAX) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }

    return (
        <Flex justify="space-around">
            <StyledBox>{`Count=${count}`}</StyledBox>

            <StyledBox>{`PreviousCount=${prevCount}`}</StyledBox>

            <StyledBox>Lorem ipsum dolor sit amet consectetur</StyledBox>

            <Button colorScheme="primary" onPress={onClick}>
                INC
            </Button>
        </Flex>
    )
}
