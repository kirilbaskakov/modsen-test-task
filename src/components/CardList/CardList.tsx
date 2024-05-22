import React from 'react';
import styled from 'styled-components';
import CardDescription from '../CardDescription/CardDescription';

const CardListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

const CardList = () => {
    return (
        <CardListWrapper>
            <CardDescription title="Charles V" author="Giovanni Bruto"/>
            <CardDescription title="Charles V" author="Giovanni Bruto"/>
            <CardDescription title="Charles V" author="Giovanni Bruto"/>
            <CardDescription title="Charles V" author="Giovanni Bruto"/>
            <CardDescription title="Charles V" author="Giovanni Bruto"/>
            <CardDescription title="Charles V" author="Giovanni Bruto"/>
            <CardDescription title="Charles V" author="Giovanni Bruto"/>
            <CardDescription title="Charles V" author="Giovanni Bruto"/>
            <CardDescription title="Charles V" author="Giovanni Bruto"/>
        </CardListWrapper>
    );
};

export default CardList;