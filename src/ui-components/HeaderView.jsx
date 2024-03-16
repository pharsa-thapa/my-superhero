/* eslint-disable */
import * as React from 'react'
import { SlArrowDown } from 'react-icons/sl'
import { View, Text, Flex, Badge, Button, Image } from '@aws-amplify/ui-react'

export default function HeaderView(props) {
    console.log(props)
    const username = 'Pharsa'
    return (
        <View
            flex="inherit"
            height="7em"
            backgroundColor="var( --amplify-components-button-primary-hover-background-color"
            padding="2em 4em"
        >
            <Flex alignItems="flex-start">
                <Text
                    width="50%"
                    fontSize="2em"
                    color="white"
                    fontWeight="10em"
                    fontFamily="Arial"
                >
                    MySuperHeroes
                </Text>

                <Text
                    width="50%"
                    fontSize="1em"
                    color="white"
                    fontWeight="10em"
                    fontFamily="Arial"
                    textAlign="right"
                >
                    {' '}
                    <Badge borderRadius="0.5em">
                        {' Hello '} {username}
                        &nbsp;
                        <SlArrowDown />
                    </Badge>
                </Text>
            </Flex>
        </View>
    )
}
