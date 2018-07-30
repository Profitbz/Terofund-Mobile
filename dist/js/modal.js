jQuery(document).ready(function($){

    function toggleModal(modal, btn, oldModal) {
        //open popup
        btn.on('click', function(event){
            event.preventDefault();
            modal.addClass('is-visible');

            if (oldModal) {
                oldModal.removeClass('is-visible');
            }
        });

        //close popup
        modal.on('click', function(event){
            if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ||
                $(event.target).is('.close-svg')) {
                event.preventDefault();
                $(this).removeClass('is-visible');
            }
        });
        //close popup when clicking the esc keyboard button
        $(document).keyup(function(event){
            if(event.which=='27'){
                modal.removeClass('is-visible');
            }
        });



    }

    // convert popup

    toggleModal($('.js-modal-convert'), $('.js-convert-modal'));

    //reinvest popup

    toggleModal($('.js-modal-reinvest'), $('.js-reinvest-modal'));

    // deposit popup

    toggleModal($('.js-modal-deposit'), $('.js-deposit-modal'));

    // withdraw popup

    toggleModal($('.js-modal-withdraw'), $('.js-withdraw-modal'));

    // landing sign in

    toggleModal($('.js-modal-sign-in'), $('.js-sign-in-modal'));
    toggleModal($('.js-modal-sign-in'), $('.js-sign-in-reg-modal'), $('.js-modal-sign-up'));

    // landing forget pass

    toggleModal($('.js-modal-forget'), $('.js-forget-modal'), $('.js-modal-sign-in'));

    // landing sign up

    toggleModal($('.js-modal-sign-up'), $('.js-sign-up-modal'));
    toggleModal($('.js-modal-sign-up'), $('.js-sign-up-reg-modal'), $('.js-modal-sign-in'));
});