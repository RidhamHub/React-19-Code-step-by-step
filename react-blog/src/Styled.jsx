import styled from "styled-components"
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";

const Heading = styled.h1`
color : red;
border : 1px solid #ddd;

`;

function Styled() {

    return (
        <div>
            <h1>Hello Ridham Kakadiya</h1>
            <Heading>Hello HEllo HELLO</Heading>

            <button>okok</button>
            <Button>okok </Button>


            <Alert>HEllo User </Alert>

        </div>
    )


}

export default Styled