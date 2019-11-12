$('.input').on('focus blur', function () {
  if ($(this).val().length > 0 || $('.input').is(':focus')) {
    $(this)
      .siblings()
      .addClass('active');

    $(this)
      .parent()
      .addClass('active');
  } else {
    $(this)
      .siblings()
      .removeClass('active')
      .addClass('not');

    $(this)
      .parent()
      .removeClass('active')
      .addClass('not');
  }

  if (
    $(this).val().length <= 3 ||
    ($(this).val().length > 30 &&
      $(this).is(':valid') &&
      $('.input').is(':focus') != true)
  ) {
    $(this)
      .parent()
      .addClass('invalid');

    $(this)
      .siblings()
      .addClass('invalid');
  } else {
    $(this)
      .parent()
      .removeClass('invalid');

    $(this)
      .siblings()
      .removeClass('invalid');
  }

  if (
    $(this).val().length > 3 &&
    $(this).is(':valid') &&
    $('.input').is(':focus') != true
  ) {
    $(this)
      .parent()
      .addClass('valid');

    $(this)
      .siblings()
      .addClass('valid');
  } else {
    $(this)
      .parent()
      .removeClass('valid');

    $(this)
      .siblings()
      .removeClass('valid');
  }
});

$('#d').change(enableBtn);

$('.input').blur(enableBtn);

function enableBtn() {
  if (
    $('#d').is(':checked') == false ||
    $('.input')
    .parent('.input-wrap')
    .hasClass('invalid') == true ||
    $('.input').val().length < 2
  ) {
    $('#confirm').prop('disabled', true);
  } else {
    $('#confirm').prop('disabled', false);
  }
}

enableBtn();

///// show password
$(document).ready(function () {
  $('#showpwd').on('click', function () {
    $(this).toggleClass('fa-eye fa-eye-slash');
    $($(this).siblings()[2]).attr('type', function (index, attr) {
      return attr == 'password' ? 'text' : 'password';
    });
  });

  $('p.hide').hide();
});

// login & sign up page
$(document).ready(function () {
  // click event to scroll to bottom
  $('#scrltobtm').click(function () {
    $('html, body').animate({
        scrollTop: $(document).height()
      },
      1000
    );
    return false;
  });
  /////////////////////////////////////////////////////////////////////////
  // chat page (add & remove open class)
  $('.chat_user').click(function () {
    $('body').addClass('open');
  });

  ////////---///////////---///////////---///////////---//////////---/////////
  // remove open class
  $('#backbtn').click(function () {
    $('body').removeClass('open');
  });



  // emoji script
  $(document).ready(function () {
    $('#chat').emojioneArea({
      filtersPosition: 'bottom',
      autocompleteTones: true
    });

    // post emoji script
    $('.post_textarea').emojioneArea({
      pickerPosition: "buttom",
      filtersPosition: 'bottom',
      autocompleteTones: true
    });

    // chats toggle open class
    $('.open_options').click(function () {
      $(this)
        .parent()
        .toggleClass('open_opts');
    });
    // chats toggle open profile class
    $('.open_profile').click(function () {
      $('.user_information').toggleClass('open');
    });
    // chats toggle hidden class
    $('.open_profile').click(function () {
      $('.chat_content').toggleClass('over_hidden_height');
    });
  });

  // open class (add post buttons)

  $(document).ready(function () {
    // close class (close & open chats sidebar)

    $('.opt_icon').click(function () {
      $('body').toggleClass('close_chats');
    });

    // show class (show & hide add posts container)

    $('.toggleBtn .menuBtn').click(function () {
      $('body').addClass('show');
    });

    $('.toggleBtn .closeBtn').click(function () {
      $('body').removeClass('show');
    });

  });

});

// search form
$(document).ready(function () {
  $(".search-wrapper .btn").click(function () {
    $(".search-wrapper .input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
  });
});


// show more / show less function
var readMoreHtml = $('.post_content').html();
var lessText = readMoreHtml.substr(0, 170);

if (readMoreHtml.length > 170) {
  $('.post_content')
    .html(lessText)
    .append("<a href='' class='read_more_link'> ... Show More </a>");
} else {
  $('.post_content').html(readMoreHtml);
}
$('body').on('click', '.read_more_link', function (event) {
  event.preventDefault();
  $(this)
    .parent('.post_content')
    .html(readMoreHtml)
    .append("<a href='' class='read_less_link'> Show Less </a>");
});
$('body').on('click', '.read_less_link', function () {
  event.preventDefault();
  $(this)
    .parent('.post_content')
    .html(readMoreHtml.substr(0, 170))
    .append("<a href='' class='read_more_link'> ... Show More </a>");
});