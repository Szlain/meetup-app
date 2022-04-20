import { render, screen } from '@testing-library/react';

import Add from './add';

describe('App tests', () => {

  test('renders MainNavigation', () => {
    render(<Add/>);

    // TODO: add this back in as a stretch
    // const titleElement = screen.getByText(/My Meetups/i);
    // expect(titleElement).toBeInTheDocument();

    // const allMeetupsElement = screen.getByText(/All Meetups/i);
    // expect(allMeetupsElement).toBeInTheDocument();

    // const addNewMeetupElement = screen.getByText(/Add New Meetup/i);
    // expect(addNewMeetupElement).toBeInTheDocument();

    // const myFavouritesElement = screen.getByText(/My Favourites/i);
    // expect(myFavouritesElement).toBeInTheDocument();
  });

});