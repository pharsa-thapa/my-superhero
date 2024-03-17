/* eslint-disable */
import * as React from 'react'
import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'

import {
    Card,
    Flex,
    Badge,
    Text,
    View,
    Button,
    Label,
    Icon,
    StepperField,
} from '@aws-amplify/ui-react'
import axios from 'axios'

import { generateClient } from 'aws-amplify/api'
import * as mutations from '../graphql/mutations'
const client = generateClient()

export default function PowerStats(props) {
    var powerstatsObj = JSON.parse(props.powerstats)
    var superHero = props.superHero
    var superHeroId = superHero.id
    var superHeroName = superHero.name
    var recordVersion = superHero._version

    var [showModal, setShowModal] = useState(false)
    var [powerStats, setPowerStats] = useState(powerstatsObj)

    useEffect(() => {}, [setShowModal])

    const modifyPowerStats = () => {
        toggleModal(true)
    }

    const savePowerStats = async () => {
        var powerStatVal = JSON.stringify(powerStats)
        console.log(powerStatVal)
        console.log(superHeroId)
        const updatedSuperhero = await client.graphql({
            query: mutations.updateSuperhero,
            variables: {
                input: {
                    id: superHeroId,
                    powerstats: powerStatVal,
                    _version: recordVersion,
                },
            },
        })
        props.reloadAction(true)
        console.log(updatedSuperhero)
        toggleModal(false)
    }

    const toggleModal = (flag) => {
        setShowModal(flag)
    }
    const handleOnStepChange = (value, fieldName) => {
        powerStats[fieldName] = value + ''
        setPowerStats(powerStats)
    }

    return (
        <Label>
            <Badge
                textTransform="capitalize"
                borderRadius="0.2em"
                fontSize="1em"
            >
                Power Stats
            </Badge>
            <Card width="30%" border="thin" padding="0.5em" textAlign="center">
                <Flex alignItems="flex-start">
                    <Flex direction="row" gap="medium" width="100%">
                        {Object.keys(powerstatsObj).map((key) => (
                            <Label>
                                <Text
                                    textTransform="capitalize"
                                    fontWeight={'bold'}
                                >
                                    {' '}
                                    {key}
                                </Text>
                                <Text>{powerstatsObj[key]}</Text>
                            </Label>
                        ))}
                    </Flex>
                </Flex>
            </Card>
            <Flex alignContent="flex-end">
                <Button
                    variation="primary"
                    fontSize="0.8em"
                    onClick={() => {
                        modifyPowerStats(powerstatsObj, superHeroId, true)
                    }}
                >
                    Edit Stats
                </Button>
            </Flex>
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
                                                Update Power Stats for{' '}
                                                {superHeroName}
                                            </Text>
                                        </Card>
                                    </Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Card width="100%" justifyContent="center">
                                        {Object.keys(powerstatsObj).map(
                                            (key) => (
                                                <Flex
                                                    direction="column"
                                                    gap="small"
                                                >
                                                    <Flex
                                                        alignItems="flex-start"
                                                        margin="0.5em"
                                                    >
                                                        <Label
                                                            textTransform="capitalize"
                                                            fontWeight="bold"
                                                            width="20em"
                                                        >
                                                            {key}
                                                        </Label>
                                                        <StepperField
                                                            label={key}
                                                            defaultValue={
                                                                powerstatsObj[
                                                                    key
                                                                ]
                                                            }
                                                            min={0}
                                                            step={1}
                                                            labelHidden
                                                            onStepChange={(
                                                                val
                                                            ) =>
                                                                handleOnStepChange(
                                                                    val,
                                                                    key
                                                                )
                                                            }
                                                        />
                                                    </Flex>
                                                </Flex>
                                            )
                                        )}
                                    </Card>
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
                                        onClick={() => savePowerStats()}
                                    >
                                        &nbsp; Save
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Flex>
                    </Flex>
                </Card>
            )}
        </Label>
    )
}
