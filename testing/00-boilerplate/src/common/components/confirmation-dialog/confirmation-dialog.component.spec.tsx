import React from 'react';
import {findAllByText, getByText, render, screen} from '@testing-library/react';
import { ConfirmationDialogComponent, Props } from './confirmation-dialog.component';

describe('common/confirmationDialogComponent', () => {
    it('Should dialog be render and has a title', () => {
        // Arrange
        const props: Props = {
          isOpen: true,
          onAccept: jest.fn(),
          onClose: jest.fn(),
          title: "Confirmation Title",
          labels: {
            acceptButton: "Accept",
            closeButton:"Close"
          },
          children:""
        }
        // Act
          render(<ConfirmationDialogComponent {...props} />)
        // Assert
        const h2Element = screen.getByRole("heading", { level: 2 });
        expect(h2Element.textContent).toEqual('Confirmation Title');
    })

    it('Should dialog not be render in the screen where isOpen is false', () => {
      // Arrange
      const props: Props = {
        isOpen: false,
        onAccept: jest.fn(),
        onClose: jest.fn(),
        title: "Confirmation Title",
        labels: {
          acceptButton: "Accept",
          closeButton:"Close"
        },
        children:""
      }
      // Act
        render(<ConfirmationDialogComponent {...props} />)
      // Assert
      const h2Element = screen.queryAllByRole("heading", { level: 2 });
      expect(h2Element).toHaveLength(0);
  })
});