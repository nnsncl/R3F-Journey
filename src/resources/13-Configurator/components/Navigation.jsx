import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 48px;
`;
export const Navigation = () => {
    return (
        <Nav>
            <p>Burb</p>
            <button>Skip</button>
        </Nav>
    )
}