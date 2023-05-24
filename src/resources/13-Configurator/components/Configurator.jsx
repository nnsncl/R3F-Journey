import React from "react"
import styled from "styled-components"
import useConfigurator from "../stores/useConfigurator"
import { HexColorPicker } from "react-colorful";

const Container = styled.section`
    bottom: 24px;
    gap: 12px;
    margin: 0 auto;
    align-self: flex-end;
    color: #0E0E0E;
    border-radius: 16px;
    transition: all ease-in-out 0.2s;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 14px;
    font-size: 12px;
    color: #000000;
    /* border-bottom: 2px solid #00000010; */

    h3 {
        text-transform: capitalize;
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
`
const Frame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 6px;
    text-transform: capitalize;
    color: #00000060;
`
const PickerTrigger = styled.button`
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    padding: 0;

    background: #FFFFFF;
    border: none;
    border-radius: 36px;
    background: linear-gradient(135deg, transparent 0%, #00000010 100%);
    cursor: pointer;
`

export const Configurator = () => {
    const colors = useConfigurator((state) => state.colors)
    const updateColor = useConfigurator((state) => state.updateColor)
    const [displayedPicker, setDisplayedPicker] = React.useState(null)


    const handleDisplayPicker = (target) => {
        if (displayedPicker === target)
            return setDisplayedPicker(null)

        return setDisplayedPicker(target)
    }

    return (
        <div>
            <Header><h3>{displayedPicker}&nbsp;colors</h3></Header>

            {displayedPicker && (
                <HexColorPicker
                    style={{ marginBottom: 16 }}
                    color={colors[displayedPicker]}
                    onChange={(value) => updateColor(displayedPicker, value)}
                />
            )}

            <Container>
                <Wrapper>
                    {Object.keys(colors).map((color, key) => (
                        <Frame key={key} >
                            <PickerTrigger
                                style={{ backgroundColor: colors[color] }}
                                onClick={() => handleDisplayPicker(color)}
                            />
                            <small>{color}</small>
                        </Frame>
                    ))}
                </Wrapper>
            </Container>
        </div>

    )
}