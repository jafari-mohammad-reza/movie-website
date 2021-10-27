import React from 'react'
import { Route } from 'react-router'
import SuggestPage from './SuggestPage'

function MainPage() {
    return (
        <main>
            <Route path='/' component={SuggestPage}/>
        </main>
    )
}

export default MainPage
