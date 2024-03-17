/* eslint-disable */
import * as React from 'react'
import { useEffect, useState } from 'react'
import { FaLine, FaPlus } from 'react-icons/fa6'

import {
    Card,
    Flex,
    Text,
    TextField,
    Button,
    Grid,
    View,
} from '@aws-amplify/ui-react'
import axios from 'axios'

import { generateClient } from 'aws-amplify/api'
import * as mutations from '../graphql/mutations'
const client = generateClient()

export default function SearchSuperHero(props) {
    const [foundSuperHeroes, setFoundSuperHeroes] = useState([])
    useEffect(() => {
        handleKeyUp
    }, [])

    const handleKeyUp = async (searchKey) => {
        const headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'localhost',
        }
        if (searchKey.length >= 2) {
            const url =
                'https://z8wp2qq7q8.execute-api.us-east-2.amazonaws.com/staging/search/' +
                searchKey
            axios.get(url, headers).then((response) => {
                setFoundSuperHeroes(response.data?.response?.response.results)
            })
        } else {
            setFoundSuperHeroes([])
        }
    }

    const saveToMyList = async (superHeroId) => {
        var copyFoundSuperHeroes = [...foundSuperHeroes]
        var selectedSuperHero = copyFoundSuperHeroes.filter(
            (obj) => obj.id === superHeroId
        )
        selectedSuperHero = selectedSuperHero[0]

        const createdSuperhero = await client.graphql({
            query: mutations.createSuperhero,
            variables: {
                input: {
                    name: selectedSuperHero.name,
                    image: selectedSuperHero.image?.url,
                    externalId: selectedSuperHero.id,
                    powerstats: JSON.stringify(selectedSuperHero.powerstats),
                },
            },
        })
        props.reloadAction(true)
        setFoundSuperHeroes([])
    }

    return (
        <Flex width="30%" border="thin" padding="1em">
            <Card variation="elevated" width="100%" fontSize="1.5em">
                <Card>
                    <Text fontStyle="bold">Search Superhero </Text>
                    <TextField
                        onKeyUp={(event) => handleKeyUp(event.target.value)}
                        onFocus={(event) => handleKeyUp(event.target.value)}
                        placeholder=" Search... "
                    ></TextField>
                </Card>
                {foundSuperHeroes && foundSuperHeroes.length ? (
                    <Card>
                        {foundSuperHeroes.map((superHero) => (
                            <Flex margin="0.3em" key={superHero.id}>
                                <Grid templateColumns="1fr 1fr" gap="small">
                                    <Flex
                                        direction="row"
                                        width="80%"
                                        justifyContent="flex-start"
                                    >
                                        <Text fontSize="0.6em">
                                            {superHero.name}{' '}
                                        </Text>
                                    </Flex>
                                    <Flex justifyContent="flex-end">
                                        <Button
                                            variation="success"
                                            title={'Add ' + superHero.name}
                                            onClick={() => {
                                                saveToMyList(superHero.id)
                                            }}
                                            key={superHero.id}
                                            backgroundColor="green"
                                            color="white"
                                        >
                                            <FaPlus />
                                        </Button>
                                    </Flex>
                                </Grid>
                            </Flex>
                        ))}
                    </Card>
                ) : (
                    ''
                )}
            </Card>
        </Flex>
    )
}
