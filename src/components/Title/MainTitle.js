import styled from "styled-components";

const MainTitle = () => {
    return <>
    <Title>MUSTANG</Title>
    </>

};

export default MainTitle;

export const Title = styled.h1`
position: absolute;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 8px;
    color: white;
    z-index: 1;
    right: 0;
    left: 0;
    text-align: center;
    opacity: 0.8;
`;