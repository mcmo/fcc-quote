(function ($) {
  var index;
  $(document).ready(function () {
    $('#btnNewQuote').on('click', function () {
      changeQuote();
      addTweetText();
    });
    $('.btn').trigger('click');
  });

  function changeQuote() {
    var tmpIndex = getIndex();
    tmpIndex === index ? changeQuote() : index = tmpIndex;
    var quote = quotes[index][0];
    var by = quotes[index][1];
    $('#quote').text('"' + quote + '"');
    $('#by').text('-' + by);
  }

  function addTweetText() {
    var encodedTweet = encodeURIComponent($('#quote').text() + " " + $('#by').text())
    console.log(encodedTweet);
    $('.btn-danger').attr('href', 'https://twitter.com/intent/tweet?text=' + encodedTweet);
  }

  function getIndex() {
    return Math.floor(Math.random() * quotes.length);
  }

  var quotes = [
    ['Action is the foundational key to all success.', 'Pablo Picasso'],
    ['Thinking will not overcome fear but action will.', 'W. Clement Stone'],
    ['Small deeds done are better than great deeds planned.', 'Peter Marshall'],
    ['You don\'t have to be great to start, but you have to start to be great.', 'Zig Ziglar'],
    ['Doing nothing gets you nothing.', 'Sean Reichle'],
    ['The successful person has the habit of doing the things failures don\'t like to do.', 'Thomas Edison'],
    ['The future depends on what you do today.', 'Gandhi'],
    ['Never confuse movement with action.', 'Ben Franklin/Ernest Hemingway'],
    ['Whether you think you can or think you can\'t, you\'re right.', 'Henry Ford'],
    ['Success seems to be connected with action. Successful people keep moving. They make mistakes but don\'t quit.', 'Conrad Hilton'],
    ['Success is the ability to go from failure to failure without losing your enthusiasm.', 'Winston Churchill'],
    ['You miss 100% of the shots you don\'t take.', 'Wayne Gretzky'],
    ['An idea not coupled with action will never get any bigger than the brain cell it occupied.', 'Arnold Glasow'],
    ['A journey of a thousand miles begins with a single step.', 'Lao Tzu']
  ];

})(jQuery);
