$(document).ready(function() {
	var $form = $('.form__inner'),
			inputName = $form.find('.form__input--name'),
      inputEmail = $form.find('.form__input--email'),
      formTextarea = $form.find('.form__textarea'),
      $popup = $('.popup'),
      $btnPopupClose = $('.popup__btn'),
      regExp = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i,
      inputNameError = true,
      inputEmailError = true,
      formTextareaError = true;

  /*------validation for email field------*/
  inputEmail.on('keyup', function() {
    if (!regExp.test(inputEmail.val()) || inputEmail.val() == '') {
      inputEmail.addClass('form__input--invalid');
      inputEmail.removeClass('form__input--valid');
      inputEmailError = true;
    } else {
      inputEmail.addClass('form__input--valid');
      inputEmail.removeClass('form__input--invalid');
      inputEmailError = false;
    }
  });

  /*------validation for name field------*/
  inputName.on('keyup', function() {
    if (inputName.val() == '') {
      inputName.addClass('form__input--invalid');
      inputName.removeClass('form__input--valid');
      inputNameError = true;
    } else {
      inputName.addClass('form__input--valid');
      inputName.removeClass('form__input--invalid');
      inputNameError = false;
    }
  });

  /*------validation for textarea field------*/
  formTextarea.on('keyup', function() {
    if (formTextarea.val() == '') {
      formTextarea.addClass('form__input--invalid');
      formTextarea.removeClass('form__input--valid');
      formTextareaError = true;
    } else {
      formTextarea.addClass('form__input--valid');
      formTextarea.removeClass('form__input--invalid');
      formTextareaError = false;
    }
  });

  /*------form submit------*/
  $form.on('submit', function(event) {
    event.preventDefault();

    if (inputNameError || inputEmailError || formTextareaError) {
      if ($form.hasClass('form__inner--error')) {
        $form.removeClass('form__inner--error');
        setTimeout(function() {
          $form.addClass('form__inner--error');
        }, 100);
      } else {
        $form.addClass('form__inner--error');
      }
    } else {
      $form.removeClass('form__inner--error');

      inputName.val('');
      inputEmail.val('');
      formTextarea.val('');

      inputNameError = true;
      inputEmailError = true;
      formTextareaError = true;

      inputName.removeClass('form__input--valid').removeClass('.form__input--invalid');
      inputEmail.removeClass('form__input--valid').removeClass('.form__input--invalid');
      formTextarea.removeClass('form__input--valid').removeClass('.form__input--invalid');

      $popup.addClass('popup--active');
    }
  });

  /*------close popup eventHandler------*/
  $btnPopupClose.on('click', function() {
    $popup.removeClass('popup--active');
  });

});
