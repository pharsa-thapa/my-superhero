/* eslint-disable */
import * as React from 'react'
import '@aws-amplify/ui-react/styles.css'

import { View } from '@aws-amplify/ui-react'
import { MySuperHeroList, HeaderView } from './ui-components'

import { Amplify } from 'aws-amplify'
import awsmobile from './aws-exports'
Amplify.configure(awsmobile)

function App() {
    return (
        <View>
            <HeaderView />
            <MySuperHeroList />
        </View>
    )
}

export default App
