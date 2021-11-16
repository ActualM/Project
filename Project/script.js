var arrLang = {
    'en': {
      'city': 'Rostov-on-Don',
      'login': 'Log in',
      'main': 'Placeholder'
      
    },
    'ru': {
      'city': 'г. Ростов-на-Дону',
      'login': 'Войти',
      'main': 'Привет, рады видеть тебя на сайте гида по Ростовской области'
      
    }
  }
  
    $(function() {
      $('.translate, .translate1').click(function() {
        var lang = $(this).attr('id');
  
        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });
