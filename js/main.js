$(document).ready(function(){

// grabbing the class names from the data attributes
var navBar = $('.navbar'),
    data = navBar.data();

// booleans used to tame the scroll event listening a little..
var scrolling = false,
    scrolledPast = false;

// transition Into
function switchInto() {
  // update `scrolledPast` bool
  scrolledPast = true;
  // add/remove CSS classes
  navBar.removeClass(data.startcolor);
  navBar.removeClass(data.startsize);
  navBar.addClass(data.intocolor);
  navBar.addClass(data.intosize);
  console.log('into transition triggered!');
};

// transition Start
function switchStart() {
  // update `scrolledPast` bool
  scrolledPast = false;
  // add/remove CSS classes
  navBar.addClass(data.startcolor);
  navBar.addClass(data.startsize);
  navBar.removeClass(data.intocolor);
  navBar.removeClass(data.intosize);
  console.log('start transition triggered!');
}

// set `scrolling` to true when user scrolls
$(window).scroll(function () {
  return scrolling = true;
});

setInterval(function () {
  // when `scrolling` becomes true...
  if (scrolling) {
    // set it back to false
    scrolling = false;
    // check scroll position
    if ($(window).scrollTop() > 100) {
      // user has scrolled > 100px from top since last check
      if (!scrolledPast) {
        switchInto();
      }
    } else {
      // user has scrolled back <= 100px from top since last check
      if (scrolledPast) {
        switchStart();
      }
    }
  }
  // take a breath.. hold event listener from firing for 100ms
}, 100);

// Initiate WOW Plugin
    wow = new WOW ({
        mobile: false
    });

    wow.init();

// Typed.js
    $(".site-desc").typed({
    strings: ["We write your user instructions.", "We create your product manuals."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 50,
    // backspacing speed
    backSpeed: 0,
    // shuffle the strings
    shuffle: false,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: false,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function() {},
    // starting callback function before each string
    preStringTyped: function() {},
    //callback for every typed string
    onStringTyped: function() {},
    // callback for reset
    resetCallback: function() {}
    });


});
