/* eslint-disable */
import * as React from 'react'
import {
    Button,
    Flex,
    Card,
    Image,
    Badge,
    Text,
    StepperField,
} from '@aws-amplify/ui-react'

import { SearchSuperHero } from './index'

export default function MySuperHeroList(props) {
    const myHeroesList = [
        {
            name: 'hero 1',
            stats: {
                stat1: 'stat 1',
            },
            description: 'Description',
            image: 'https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg',
        },
    ]
    return (
        <Card direction="row" gap="medium">
            <Flex alignItems="flex-start">
                <SearchSuperHero />
                <Flex direction="column" gap="medium" width="100%">
                    <Card width="75%">
                        {/* loop start here */}
                        <Card variation="elevated" marginBottom="0.5em">
                            <Flex alignItems="flex-start">
                                <Image
                                    src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
                                    alt="Amplify"
                                    width="10em"
                                />
                                <Flex direction="column">
                                    <Flex>
                                        <Badge variation="success">New</Badge>
                                    </Flex>
                                    <Text
                                        fontSize="large"
                                        fontWeight="semibold"
                                    >
                                        Product title
                                    </Text>
                                    <Text color="font.tertiary">
                                        Product description
                                    </Text>
                                    <Text fontSize="large" color="secondary">
                                        $199.99
                                    </Text>
                                    <Flex>
                                        <Button variation="primary">
                                            Edit Stats
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Card>

                        <Card variation="elevated">
                            <Flex alignItems="flex-start">
                                <Image
                                    src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
                                    alt="Amplify"
                                    width="10em"
                                />
                                <Flex direction="column">
                                    <Flex>
                                        <Badge variation="success">New</Badge>
                                    </Flex>
                                    <Text
                                        fontSize="large"
                                        fontWeight="semibold"
                                    >
                                        Product title
                                    </Text>
                                    <Text color="font.tertiary">
                                        Product description
                                    </Text>
                                    <Text fontSize="large" color="secondary">
                                        $199.99
                                    </Text>
                                    <Flex>
                                        <Button variation="primary">
                                            Edit Stats
                                        </Button>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Card>
                    </Card>
                </Flex>
                <Flex direction="column" gap="medium">
                    {' '}
                </Flex>
            </Flex>
        </Card>
    )
}
