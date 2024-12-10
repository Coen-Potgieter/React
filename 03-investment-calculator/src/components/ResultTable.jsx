
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function ResultTable({ values }) {

    // Returns an array of with values.duration number of elements
    // Each element is an object containing the values we need
    const initialResults = calculateInvestmentResults(values);
    let runningSum = 0;
    const invResults = initialResults.map(elem => {

        runningSum += elem.interest;
        const totalIncome = runningSum;
        const investedCapital = elem.valueEndOfYear - totalIncome;
        elem.valueEndOfYear = formatter.format(elem.valueEndOfYear);
        elem.interest = formatter.format(elem.interest);
        elem.annualInvestment = formatter.format(elem.annualInvestment);
        return {...elem, totalIncome: formatter.format(totalIncome), investedCapital: formatter.format(investedCapital)};
    })


    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Income</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {invResults.map((res) => (
                    <tr key={res.year}>
                        <td>{res.year}</td>
                        <td>{res.valueEndOfYear}</td>
                        <td>{res.interest}</td>
                        <td>{res.totalIncome}</td>
                        <td>{res.investedCapital}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
