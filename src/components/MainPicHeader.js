import styled from "styled-components";
import MustangPicture from "./images/low-key-Mustang-Toy-1423495-pxhere.com.jpg";
import MustangPicture2 from "./images/low-key-Mustang-Toy-1423495.jpg";

const MainPicHeader = () => {
  return (
    <>
      <Container>
        <h1>MUSTANG</h1>
        <p>Photo by Amos Michael form PxHere</p>
      </Container>
    </>
  );
};

export default MainPicHeader;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: black url(${MustangPicture}) center no-repeat;
  background-size: contain;

  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    background: black url(${MustangPicture2}) center no-repeat;
    background-size: contain;
    opacity: 0;
  }

  & h1 {
    display: block;
    color: white;
    font-size: 32px;
    position: absolute;
    top: 120px;
    margin: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    letter-spacing: 8px;

    &::after {
      position: absolute;
      display: block;
      content: "";
      width: calc(100% - 8px);
      height: 4px;
      background-color: rebeccapurple;
      transform: translateY(16px);
    }
  }

  & p {
    font-size: 10px;
    color: white;
    position: absolute;
    bottom: 8px;
    right: 16px;
  }
`;
