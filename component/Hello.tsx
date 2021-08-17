import { useEffect, useState } from 'react'
import { View, Text, Button} from 'react-native'




export default function Hello() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count > 5) setCount(0)
    }, [count]);

    const onClick = () => {
        setCount(count + 1)
    }



    return (
        <View><Text>HELLO {count}</Text>
            <Button title="btn" onPress={onClick} />
        </View>
    )
}
