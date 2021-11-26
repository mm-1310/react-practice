import { render, waitFor, screen } from "@testing-library/react";
import { ComicsData } from "../pages/comics-home/ComicsData";
import fetchData from "../utils/fetchData";

// create mock test for fetch
const fakeResponse = [{title: 'Mock1', format: 'Comic', imgObj: {path: 'path/to/image', extension: '.jpg'}, modified: '-0001-11-30T00:00:00-0500'}];
const mockAPI = jest.spyOn(fetchData, 'getApiData').mockImplementationOnce(() => {
    return Promise.resolve({
        json: () => Promise.resolve(fakeResponse)
    });
});

// mock test API calls
it("should call api at least once", async () => {
    render(<ComicsData />);
    
    waitFor(() => {
        expect(mockAPI).toHaveBeenCalledTimes(1);
        fakeResponse.forEach((i) => {
            expect(screen.getByText(i.title)).toBeInTheDocument();
            expect(screen.getByText(i.format)).toBeInTheDocument();
            expect(screen.getByText(i.imgObj)).toBeInTheDocument();
            expect(screen.getByText(i.modified)).toBeInTheDocument();
        });
    });
});

// after everything done, we destroy mocks
mockAPI.mockReset();
mockAPI.mockRestore();