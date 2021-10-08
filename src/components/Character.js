// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterStyle = styled.div `
    border: 3px solid #d2b48c;
    background-color: ##d3d3d3;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    margin-left: 12.5%;
    width: 75%;
    

    &:hover {
        background: #000000;
        color: #f8f8ff;
    }
`

const Header = styled.h2`
    font-family: 'Press Start 2P', cursive;
`

const HeaderThree = styled.h3`
    font-family: 'Exo 2', sans-serif;
    font-size: 2rem;
`

const ButtonStyling = styled.button`
    font-family: 'Press Start 2P', cursive;
    font-size: 2rem;
    padding: 1rem;
    background-color: #d2b48c;
    border-radius: 2rem;
    display: flex;
    
`

export default function Character({info}) {
    const [visible, setVisible] = React.useState(false);

    return (

        
        <CharacterStyle>
            <Header>
                <h2>{info.name}</h2>
            </Header>
                <ButtonStyling onClick={() => setVisible(!visible)}>
                {visible ? 'Hide' : 'Show Information'}
                </ButtonStyling>
                {visible && <div>


            <HeaderThree>
                <h3>Gender: {info.gender}</h3>
                <h3>Height: {info.height}</h3>
                <h3>Mass: {info.mass}</h3>
                <h3>Birth Year: {info.birth_year}</h3>
                <h3>Eye Color: {info.eye_color}</h3>
                <h3>Hair Color: {info.hair_color}</h3>
                <h3>Skin Color: {info.skin_color}</h3>
            </HeaderThree>
        </div>}
        </CharacterStyle>
    )
}