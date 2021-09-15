import { Box, Button} from 'native-base'
import { useEffect, useState } from 'react'


export default function Hello() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count > 5) setCount(0)
    }, []);



    return (
        <Box>Count =  {count}
            <Button onPress={() => setCount(count + 1)}>INC</Button>
        </Box>
    )
}
