//=require ../blocks/**/*.js

$(document).ready(function () {

    //main slider
	$('.js-main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
		arrows: true,
		dots: false,
		infinite: true,
		mobileFirst: true,
		focusOnSelect: true
	});

    //event-toggle
	$('.event__arrow').click(function () {
        $('.event__arrow.active').not(this).removeClass('active').parent().next('.event__hidden-wrap').slideUp();
		$(this).toggleClass('active').parent().next('.event__hidden-wrap').slideToggle();
	});

    //betting-toggle
    $('.betting-table__arrow').click(function () {
        $('.betting-table__arrow.active').not(this).removeClass('active').parent().next('.betting-table__hidden').slideUp();
        $(this).toggleClass('active').parent().next('.betting-table__hidden').slideToggle();
    });

    //games-arrow
    $('.games-arrow').click(function () {
        $(this).toggleClass('active');
        $('.games-row').slideToggle();
    });

    //niceSelect
    $('.select-nice').niceSelect();

    //profile nav arrow
    $('.profile-nav__arrow').click(function () {
        $('.profile-nav').toggleClass('slide');
        $(this).toggleClass('animation');
    });

    //disabled / anabled
    $('.profile-form__edit').click(function (event) {
        event.preventDefault();
        $(this).parent().find($("input.profile-form__input")).prop('disabled', false);
    });

    //scroll
    $('.scroll').simplebar();


    $("input[name=allgame]").click(function () {
        $("input[type=checkbox].cbx").prop('checked', $(this).prop('checked'));
        if ($(this).prop('checked')) {
            $('input[type=checkbox].cbx').parent('.center').siblings('.games__img').addClass('checked');
            addMatch('cs');
        } else {
            $('input[type=checkbox].cbx').parent('.center').siblings('.games__img').removeClass('checked');
            removeAllMatch();
        }
    });

    $("input[name=game].cbx").click(function () {
        let allCheckboxGame = $("input[type=checkbox].cbx").not('input[name=allgame]').length;
        let allCheckboxGameChecked = $("input[type=checkbox].cbx:checked").not('input[name=allgame]').length; 
        
        if (allCheckboxGameChecked === allCheckboxGame){
            $("input[name=allgame]").prop('checked', true);
            
        } else{
            $("input[name=allgame]").prop('checked', false);
        }
        if ($(this).prop('checked')){
            $(this).parent('.center').siblings('.games__img').addClass('checked');
            addMatch($(this).val())
        }else{
            
            $(this).parent('.center').siblings('.games__img').removeClass('checked');
            removeMatch($(this).val());
        }
    });

    function removeMatch(val){
        $('.match[data-value="'+ val + '"]').remove();
    }

    function removeAllMatch(){
        $('.match[data-value]').remove();
    }

    function addMatch(val){
        $('.match-wrap').append('<div class="match" data-value="'+ val +'"><div class="match__team"><div class="match__logo"><img src="images/img7.png" alt=""></div><span class="match__team-name">WAcademy</span><span class="match__team-rating">1,43</span><a class="match__btn" href="#"><span>Поставить</span></a></div><div class="match__info"><div class="match__game">              <img src="images/img11.png" alt=""></div><a class="match__watch" href="#">LIFE</a><span class="match__time">14:14</span><span class="match__data">14 мар</span> <span class="match__vs">vs</span></div><div class="match__team"><div class="match__logo"><img src="images/img8.png" alt=""></div><span class="match__team-name">Unique Team</span><span class="match__team-rating">5,27</span><a class="match__btn" href="#"><span>Поставить</span></a></div></div>'
        );
    }
    $('.match-wrap').on('click', '.match__btn', function () {
        addBet();
    })
  

    function addBet(){
        $('.bet__match-wrap .simplebar-content').append(' <div class="match match_bet"> <div class="match__team"><div class="match__logo match__logo_bet"><img src="images/img7.png" alt=""></div><span class="match__team-name">WAcademy</span><span class="match__team-rating">1,43</span><a class="match__btn match__btn_close" href="#"></a></div><div class="match__info"><div class="match__game"><img src="images/img11.png" alt=""></div><a class="match__watch active" href="#">LIFE</a><span class="match__time">14:14</span><span class="match__data">14 мар</span><span class="match__vs">vs</span></div><div class="match__team"><div class="match__logo match__logo_bet"><img src="images/img8.png" alt=""></div><span class="match__team-name">Unique Team</span><span class="match__team-rating">5,27</span><a class="match__btn match__btn_check" href="#"></a></div></div>');
    }


    //validation registration form
    var $form = $(".reg-form");

    $.validator.addMethod("numbers", function (value, element) {
        return this.optional(element) || value == value.match(/^[0-9]+$/);
    });
    $.validator.addMethod("laxEmail", function(value, element) {
        return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@(?:\S{1,63})$/.test( value );
      });
    $.validator.addMethod("letters", function (value, element) {
        return this.optional(element) || value == value.match(/^[А-Яа-яЁё\s]+$/);
    });

    $form.validate({
      rules: {
        fullName: {
            required: true,
            minlength: 3,
            letters: true
        },
        nickname: {
            required: true,
            minlength: 3,
            letters: true      
        },
        email: {
            required: true,
            laxEmail: true,
            minlength: 5
        },
        password: {
            required: true,
            minlength: 8,
            numbers: true
        },
        dateOfBirth: {
            required: true,
            minlength: 3,
            numbers: true
        },
        repeatPassword: {
            required: true,
            equalTo: "#password",
            minlength: 8,
            numbers: true
        },
      },

      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (data) {
          }
        });
        return false;
      }
    });


    //validation deposit form
    var $form = $(".depositform");
    $.validator.addMethod("numbers", function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]+$/);
    });
    
    $form.validate({
        rules: {
            deposit: {
                required: true,
                minlength: 1,
                numbers: true
            },
        },

        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (data) {
            }
        });
            return false;
        }
    });

    //validation deposit form
    var $form = $(".bet-sum-form");
    $.validator.addMethod("numbers", function (value, element) {
      return this.optional(element) || value == value.match(/^[0-9]+$/);
    });

    $form.validate({
      rules: {
        betSum: {
          required: true,
          minlength: 1,
          numbers: true
        },
      },

      submitHandler: function (form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (data) {
          }
        });
        return false;
      }
    });
});