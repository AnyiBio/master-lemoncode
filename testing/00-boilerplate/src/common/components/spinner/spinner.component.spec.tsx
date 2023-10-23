import React from 'react';
import {
    act,
    render,
    screen,
  } from '@testing-library/react';
import { usePromiseTracker } from 'react-promise-tracker';
import { SpinnerComponent } from './spinner.component';

jest.mock('react-promise-tracker');

describe('common/components/spinner.component', () => {
    it('Should render spinner component when promise has not been resolved', () => {
        const mockUsePromiseTracker = usePromiseTracker as jest.MockedFunction<typeof usePromiseTracker>;
        mockUsePromiseTracker.mockReturnValue({
            promiseInProgress: true
        });

        render(<SpinnerComponent />);
        expect(screen.getByRole("presentation")).toBeVisible();
    });

    it('Should not render spinner component when promise is resolved', () => {
        const mockUsePromiseTracker = usePromiseTracker as jest.MockedFunction<typeof usePromiseTracker>;
        mockUsePromiseTracker.mockReturnValue({
            promiseInProgress: false
        });

        render(<SpinnerComponent />);
        expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
    });
});