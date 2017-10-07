(function ($, jBox) {
  $(function () {

    // работа с меню
    {
      const $menuButton = $('.js-menu')
      const $menu = $($menuButton.data('target'))
      const showClass = 'show'
      $menuButton.on('click', (e) => {
        e.preventDefault()
        $menu.addClass(showClass)
      })
      $menu.find('.close').on('click', (e) => {
        e.preventDefault()
        $menu.removeClass(showClass)
      })
    }

    // свернуть/развернуть карту
    {
      const $mapButton = $('.js-map')
      const $map = $($mapButton.data('selector'))
      const showText = $mapButton.text()
      const hideText = $mapButton.data('text')
      const showClass = 'show'
      $mapButton.on('click', (e) => {
        e.preventDefault()
        if ($map.hasClass(showClass)) {
          $map.removeClass(showClass)
          $mapButton.text(showText)
        } else {
          $map.addClass(showClass)
          $mapButton.text(hideText)
        }
      })
    }

    // работа с всплывающими окнами
    {
      new jBox('Modal', {
        width: 'auto',
        height: 'auto',
        attach: '.js-form',
        closeOnClick: false,
        onOpen: function () {
          const $this = this.source
          const $target = $($this.data('target'))
          this.setContent($target.html())
          this.content.find('.close').on('click', (e) => {
            e.preventDefault()
            this.close()
          })
        }
      })
    }

  })
})(jQuery, jBox)
