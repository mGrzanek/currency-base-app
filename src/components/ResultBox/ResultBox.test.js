import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';


  describe('Component ResultBox', () => {
    it("should render without crashing", () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });
    it("should render proper info about conversion when PLN -> USD", () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
        const result = screen.getByTestId('result');
        expect(result).toHaveTextContent("PLN 100.00 = $28.57");
    });
});