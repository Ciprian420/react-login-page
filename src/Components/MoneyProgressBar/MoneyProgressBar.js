import React from "react";
import { Square, OrizontalLine, OrizontalLineIC, VerticalLine, VerticalLineIC, Container, Price } from "./MoneyProgressBarStyle";
import {findAllByDisplayValue} from "@testing-library/react";


const MoneyProgressBar = () => {
    return (
        <Container>

            <Square>
                <Price>$10,000</Price>
            </Square>

            <div>
                <OrizontalLine>
                    <VerticalLine>
                        <Price>$50,000</Price>
                    </VerticalLine>
                </OrizontalLine>
            </div>

            <div>
                <OrizontalLine>
                    <VerticalLine>
                        <Price>$100,000</Price>
                    </VerticalLine>
                </OrizontalLine>
            </div>

            <div>
                <OrizontalLine>
                    <VerticalLine>
                        <Price>$200,000</Price>
                    </VerticalLine>
                </OrizontalLine>
            </div>

            <div>
                <OrizontalLine>
                    <VerticalLine>
                        <Price>ㅤ</Price>
                    </VerticalLine>
                </OrizontalLine>
            </div>

            <Square><Price>$500,000</Price></Square>

            <div>
                <OrizontalLineIC>
                    <VerticalLineIC>
                        <Price>$1,000,000+</Price>
                    </VerticalLineIC>
                </OrizontalLineIC>
            </div>
        </Container>
    )
}

export default MoneyProgressBar;