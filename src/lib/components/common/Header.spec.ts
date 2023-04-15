import { render } from "@testing-library/svelte";
import Header from "./Header.svelte"

describe('Header.svelte', () => {
    it('should render component', () => {
        const { container } = render(Header);

        expect(container).toMatchSnapshot();
    });
});
