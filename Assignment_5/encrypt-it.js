/*
 * Starter file 
 */
// alert("Just a test");
// console.log("testing");

(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    //selecting encrupt-it button for handling clicking on button
    const encrypt_button = document.querySelector('#encrypt-it');

    const reset_button = document.querySelector('#reset');

    const fontSize12 = document.querySelector('#twelve_pts');

    const fontSize24 = document.querySelector('#twenty_four_pts');

    const all_caps = document.querySelector('#all-caps');

    //Handling clicking on button
    encrypt_button.addEventListener("click", handleClick);

    reset_button.addEventListener('click', reset);

    fontSize12.addEventListener('click', ()=> {
      const text_area = document.querySelector('textarea');
      text_area.style.fontSize = "12pt";
    })


    fontSize24.addEventListener('click', ()=> {
      const text_area = document.querySelector('textarea');
      text_area.style.fontSize = "24pt";
    })

    all_caps.addEventListener('click', ()=> {
      const text_area = document.querySelector('textarea');
      text_area.value = text_area.value.toUpperCase();
    })
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function handleClick() {
    // console.log("Button clicked");

    //queryselector is for getting access to the text
    const text_area = document.querySelector('textarea');

    var mystr = text_area.value;
    text_area.value = shiftCipher(text_area.value);

  }

  function reset() {
    const text_area = document.querySelector('textarea');
    text_area.value = "";
  }

  

  function shiftCipher(text) {

    text = text.toLowerCase();
    let result = "";  

    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else {
        result += String.fromCharCode(text.charCodeAt(i) + 1);
      }
    }
    return result;
  }

})();