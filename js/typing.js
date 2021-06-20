$(function () {
  $(".typewriter").typed({
    strings: [
      "Hello!🖐",
      ' My name is <a  class="me-type" style="color: #EE5A24">Ruya</a>.',
      "I am a flutist",
      "coder",
      "enjoy!😘",
    ],

    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 2000,
    // backspacing speed
    backSpeed: 40,
    // time before backspacing
    backDelay: 1500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
});
