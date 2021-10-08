// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterStyle = styled.div `
    border: 3px solid #00c700;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    margin-top 2rem;
    width: 50%;

    &:hover {
        background: #000000;

    }
`

export default function Character({info}) {

    return (

        <CharacterStyle>
            <h2>{info.name}</h2>
            <h3>Gender: {info.gender}</h3>
            <h3>Height: {info.height}</h3>
            <h3>Mass: {info.mass}</h3>
            <h3>Birth Year: {info.birth_year}</h3>
            <h3>Eye Color: {info.eye_color}</h3>
            <h3>Hair Color: {info.hair_color}</h3>
            <h3>Skin Color: {info.skin_color}</h3>
        </CharacterStyle>
    )
}