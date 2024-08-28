import { useContext } from "react";
import { MoneyContext } from "../components/Context";

function Money() {
    const { money } = useContext(MoneyContext);

    return (
        <div className="total-money">
            <h1>${money}</h1>
        </div>
    );
}

export default Money;