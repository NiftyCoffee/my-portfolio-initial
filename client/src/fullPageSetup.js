import fullpage from 'fullpage.js';

export function initializeFullPageScroll() {
  new fullpage('#fullpage', {
    // Set options and callbacks as needed
    sectionsColor: ['#000', '#111', '#222', '#333'],
    navigation: true,
    navigationPosition: 'right',
    onLeave: (origin, destination, direction) => {
      // Handle slide change events
      console.log('Leaving section ' + origin.index + ' to section ' + destination.index);
    }
  });
}