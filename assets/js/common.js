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
    $('.news-toggle').click(function() {
        const expanded = $(this).attr('aria-expanded') !== 'true';
        $(this).closest('.news').find('.news-more').prop('hidden', !expanded);
        $(this).attr('aria-expanded', expanded).text(expanded ? 'Show less' : 'Show more');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
