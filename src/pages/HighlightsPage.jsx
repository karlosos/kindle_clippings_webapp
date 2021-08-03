import React from 'react'
import styled from 'styled-components'

import { Header } from 'semantic-ui-react'
import HighlightItem from '../components/Highlights/HighlightItem'

import { useSelector, useDispatch } from 'react-redux'

const HighlightsWrapper = styled.div`

`

const HighlightsPage = () => {
    // const highlights = [
    //     {
    //         book: 'The 5 A.M. Revolution: Why High Achievers Wake Up Early and How You Can Do It, Too',
    //         author: 'Dan Luca',
    //         quote: 'I discovered the fact that almost all great leaders in a wide range of fields wake up early in the morning. From Richard Branson to Tim Cook to Howard Schultz to Oprah Winfrey to Michael Phelps and Serena Williams, they all are early risers, mostly waking up before 6 a.m.',
    //         date: '14 May 2021 1:15AM',
    //         location: '115-17',
    //         favourite: true,
    //     },
    //     {
    //         book: 'The 5 A.M. Revolution: Why High Achievers Wake Up Early and How You Can Do It, Too',
    //         author: 'Dan Luca',
    //         quote: 'As a general idea, the American Academy of Sleep Medicine suggests: think of the bedroom as a cave; it should be cool, quiet and dark.',
    //         date: '14 May 2021 1:15AM',
    //         location: '115-17',
    //         favourite: true,
    //     },
    //     {
    //         book: 'The 5 A.M. Revolution: Why High Achievers Wake Up Early and How You Can Do It, Too',
    //         author: 'Dan Luca',
    //         quote: '‘There is no need to go to India or anywhere else to find peace. You will find that deep place of silence right in your room, your garden or even your bathtub.’ —Elisabeth Kübler-Ross',
    //         date: '14 May 2021 1:15AM',
    //         location: '115-17',
    //         favourite: false,
    //     },
    //     {
    //         book: 'The 5 A.M. Revolution: Why High Achievers Wake Up Early and How You Can Do It, Too',
    //         author: 'Dan Luca',
    //         quote: 'Most people who have trouble sleeping or experience restless sleep have completely counterproductive bedtime habits like watching news or highly stimulating shows on TV just before bed, trying to solve the unfinished businesses from that day or going to bed feeling upset about a conversation with their spouse or their child.',
    //         date: '14 May 2021 1:15AM',
    //         location: '115-17',
    //         favourite: false,
    //     },
    //     {
    //         book: 'Homo Deus: A Brief History of Tomorrow',
    //         author: 'Yuval Noah Harari',
    //         quote: 'In 1900 global life expectancy was no higher than forty because many people died young from malnutrition, infectious diseases and violence. Yet those who escaped famine, plague and war could live well into their seventies and eighties, which is the natural life span of Homo sapiens. Contrary to common notions, seventy-year-olds weren’t considered rare freaks of nature in previous centuries. Galileo Galilei died at seventy-seven, Isaac Newton at eighty-four, and Michelangelo lived to the ripe age of eighty-eight, without any help from antibiotics, vaccinations or organ transplants. Indeed, even chimpanzees in the jungle sometimes live into their sixties.',
    //         date: '14 Nov 2021 11:47',
    //         location: '433-37',
    //         favourite: true,
    //     },
    // ]


    const highlights = useSelector((state) => Object.entries(state.clippings.quotes).slice(0, 20).map((q=> (
        {
            id: q[0],
            book: q[1].book,
            author: q[1].author,
            quote: q[1].quote,
            time: q[1].time,
            location: q[1].location,
            favourite: q[1].favourite
        }
    ))))
    return (
        <>
            <Header as='h1'>Highlights</Header>

            <HighlightsWrapper>
            { 
            highlights.map((highlightInfo) => (
                <HighlightItem highlightInfo={highlightInfo} />
            ))
            }
            </HighlightsWrapper>
        </>
    )
}

export default HighlightsPage
