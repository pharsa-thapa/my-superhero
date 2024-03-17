/* eslint-disable */
import * as React from 'react'
import { useEffect, useState } from 'react'
import { FaLine, FaPlus } from 'react-icons/fa6'
import { GrView } from 'react-icons/gr'
import { Modal } from 'react-bootstrap'

import {
    Card,
    Flex,
    Text,
    TextField,
    Button,
    Grid,
    Label,
    Badge,
    Image,
    View,
} from '@aws-amplify/ui-react'
import axios from 'axios'

import { generateClient } from 'aws-amplify/api'
import * as mutations from '../graphql/mutations'
const client = generateClient()

import { PowerStats } from './index'

export default function SearchSuperHero(props) {
    const [foundSuperHeroes, setFoundSuperHeroes] = useState([])
    var [showModal, setShowModal] = useState(false)
    var [viewingSuperHero, setViewingSuperHero] = useState(null)

    useEffect(() => {
        handleKeyUp
    }, [setShowModal])

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
                //filter before setting up
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
        setViewingSuperHero(null)
        toggleModal(false)
    }

    const viewSuperHero = (superHero) => {
        console.log('Now viewing superHero', superHero)
        setViewingSuperHero(superHero)
        toggleModal(true)
    }

    const toggleModal = (flag) => {
        setShowModal(flag)
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
                                            title={'View ' + superHero.name}
                                            onClick={() => {
                                                viewSuperHero(superHero)
                                            }}
                                            key={superHero.id}
                                        >
                                            <GrView />
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
            {showModal && (
                <Card width="80%" backgroundColor="green">
                    <Flex alignItems="flex-start">
                        <Flex alignContent="flex-end">
                            <Modal
                                show={showModal}
                                size="md"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                        <Card>
                                            <Text fontWeight="semibold">
                                                {viewingSuperHero.name}
                                            </Text>
                                        </Card>
                                    </Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Flex alignItems="flex-start">
                                        <Image
                                            src={viewingSuperHero.image.url}
                                            alt={viewingSuperHero.name}
                                            width="10em"
                                        />
                                        <Flex direction="column">
                                            <View
                                                textTransform="capitalize"
                                                fontSize="1.4em"
                                                fontWeight="bold"
                                            >
                                                Power Stats
                                            </View>
                                            <Card
                                                width="30%"
                                                border="thin"
                                                padding="0.5em"
                                                textAlign="center"
                                            >
                                                <Flex alignItems="flex-start">
                                                    <Flex
                                                        direction="column"
                                                        gap="medium"
                                                        width="100%"
                                                    >
                                                        {Object.keys(
                                                            viewingSuperHero.powerstats
                                                        ).map((key) => (
                                                            <Label>
                                                                <Text
                                                                    textTransform="capitalize"
                                                                    fontWeight={
                                                                        'bold'
                                                                    }
                                                                >
                                                                    {' '}
                                                                    {key}
                                                                </Text>
                                                                <Text>
                                                                    {
                                                                        viewingSuperHero
                                                                            .powerstats[
                                                                            key
                                                                        ]
                                                                    }
                                                                </Text>
                                                            </Label>
                                                        ))}
                                                    </Flex>
                                                </Flex>
                                            </Card>

                                            <Text
                                                fontSize="large"
                                                color="secondary"
                                            >
                                                {}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button
                                        className="btn btn-danger"
                                        onClick={() => toggleModal(false)}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="btn btn-success"
                                        onClick={() => {
                                            saveToMyList(viewingSuperHero.id)
                                        }}
                                    >
                                        &nbsp; Save
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Flex>
                    </Flex>
                </Card>
            )}
        </Flex>
    )
}
