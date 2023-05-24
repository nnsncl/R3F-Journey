import React from "react"
import styled from "styled-components"

const Container = styled.section`
    bottom: 24px;
    padding: 24px 36px;
    width: 375px;
    margin: 0 auto;
    align-self: flex-end;

    background: #FFFFFF;
    color: #0E0E0E;
    border-radius: 16px;
`
export const Configurator = () => {
    return (
        <Container>
            <div>

            </div>
            {/* <Menu>
                <h3>Beak Params</h3>
            </Menu>
            <Menu>
                <h3>Colors params</h3>
                <p>Eyes</p>
                <p>Pupils</p>
                <p>Beak</p>
                <p>Body</p>
                <p>Wings</p>
                <p>Legs</p>
            </Menu> */}
        </Container>
    )
}