/* eslint-disable */
import * as React from 'react'
import { useEffect, useState } from 'react'
import { CiCircleAlert } from 'react-icons/ci'

import {
    Button,
    Flex,
    Card,
    Image,
    Badge,
    Text,
    StepperField,
    Label,
} from '@aws-amplify/ui-react'
import { SearchSuperHero } from './index'
import { PowerStats } from './index'

import { generateClient } from 'aws-amplify/api'
import { listSuperheroes } from '../graphql/queries'
import * as mutations from '../graphql/mutations'
import userEvent from '@testing-library/user-event'
const client = generateClient()

export default function MySuperHeroList(props) {
    const [mySuperHeroes, setMySuperHeroes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchSuperHeroes()
    }, [])

    async function fetchSuperHeroes() {
        try {
            const superHeroes = await client.graphql({
                query: listSuperheroes,
            })
            const superHeroesItems = superHeroes.data.listSuperheroes.items
            setMySuperHeroes(superHeroesItems)
            setLoading(false)
        } catch (err) {
            console.log(err)
            console.log('error fetching superheroes')
        }
    }

    const reload = (reloadAction) => {
        if (reloadAction) {
            fetchSuperHeroes()
        }
    }

    return (
        <Card direction="row" gap="medium">
            <Flex alignItems="flex-start">
                <SearchSuperHero
                    reloadAction={(reloadFlag) => reload(reloadFlag)}
                />

                {!loading ? (
                    <Flex
                        direction="column"
                        gap="medium"
                        width="100%"
                        border="thin"
                    >
                        {mySuperHeroes && mySuperHeroes.length ? (
                            <Card width="75%">
                                {mySuperHeroes.map((superHero) => (
                                    <Card
                                        variation="elevated"
                                        marginBottom="0.5em"
                                        key={superHero.id}
                                    >
                                        <Flex alignItems="flex-start">
                                            <Image
                                                src={superHero.image}
                                                alt={superHero.name}
                                                width="10em"
                                            />
                                            <Flex direction="column">
                                                <Text
                                                    fontSize="2em"
                                                    fontWeight="semibold"
                                                >
                                                    {superHero.name}
                                                </Text>

                                                <PowerStats
                                                    powerstats={
                                                        superHero.powerstats
                                                    }
                                                    superHero={superHero}
                                                    reloadAction={reload}
                                                />

                                                <Text
                                                    fontSize="large"
                                                    color="secondary"
                                                >
                                                    {}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Card>
                                ))}
                            </Card>
                        ) : (
                            <Card width="75%">
                                <Flex alignItems="flex-start">
                                    <Flex direction="row">
                                        <Label fontSize="2em">
                                            <CiCircleAlert color="red" />
                                        </Label>
                                    </Flex>
                                    <Flex direction="row">
                                        <Label fontSize="1.5em" color="red">
                                            Super Heroes Found{' '}
                                        </Label>
                                    </Flex>
                                </Flex>
                            </Card>
                        )}
                    </Flex>
                ) : (
                    <Flex
                        direction="column"
                        gap="medium"
                        width="100%"
                        border="thin"
                    >
                        <Card width="75%">
                            {' '}
                            <Flex direction="row">
                                <Label fontSize="1.5em">Loading . . . .</Label>
                            </Flex>
                        </Card>
                    </Flex>
                )}
                <Flex direction="column" gap="medium">
                    {' '}
                </Flex>
            </Flex>
        </Card>
    )
}
