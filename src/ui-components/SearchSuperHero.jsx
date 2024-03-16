/* eslint-disable */
import * as React from 'react'
import { Card, Flex, TextField } from '@aws-amplify/ui-react'
import axios from 'axios'

export default function SearchSuperHero(props) {
    const handleKeyDown = async (event) => {
        console.log('Event >>', event.target.value)
        var textVal = event.target.value
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'localhost',
        }
        if (textVal.length >= 3) {
            const url =
                'https://tnx4qwi6hy55gxlfwvo5hydc4i0jlcqm.lambda-url.us-east-2.on.aws/'
            console.log('url', url)
            console.log(headers)
            axios.get(url, headers).then((response) => {
                // response.json()
                console.log('here>> ', response.data)
            })
        }
    }
    console.log(props)
    return (
        <Flex width="30%" border="thin" padding="1em">
            <Card variation="elevated" margin="0.2em" width="100%">
                <TextField
                    onKeyUp={(event) => handleKeyDown(event)}
                    placeholder=" Search... "
                ></TextField>
            </Card>
        </Flex>
    )
}
