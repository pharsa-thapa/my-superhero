/* eslint-disable */
import * as React from 'react'
import { Card, Flex, TextField } from '@aws-amplify/ui-react'
import axios from 'axios'

export default function SearchSuperHero(props) {
    const handleKeyDown = async (event) => {
        console.log('Event >>', event.target.value)
        var textVal = event.target.value
        const headers = {
            'Access-Control-Allow-Origin': '•',
        }
        if (textVal.length >= 3) {
            const url =
                'https://superheroapi.com/api/' +
                '7541687979216866' +
                '/search/' +
                textVal
            const response = axios.get(url, headers)
            const data = await response.json()
            console.log('here>> ', data)
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
