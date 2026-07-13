$(document).ready(function() {
    $('.pub-link.abstract').click(function() {
        const panel = $(this).closest('.pub-content').find('.abstract.hidden');
        panel.toggleClass('open');
        $(this).attr('aria-expanded', panel.hasClass('open'));
    });
    $('.pub-link.bibtex').click(function() {
        const panel = $(this).closest('.pub-content').find('.bibtex.hidden');
        panel.toggleClass('open');
        $(this).attr('aria-expanded', panel.hasClass('open'));
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
