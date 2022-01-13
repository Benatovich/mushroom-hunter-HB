/* eslint-disable no-useless-escape */
// IMPORT MODULES under test here:
import { renderMushroom } from '../render-utils.js';

const test = QUnit.test;

test('renderMushroom should return a DOM node for a mushroom', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class=\"mushroom\"></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMushroom();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected, 'should return DOM node for mushroom');
});
