window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.tabs__btn').forEach(function(btn){
        btn.classList.remove('tabs__btn_active')});
        event.currentTarget.classList.add('tabs__btn_active');
      document.querySelectorAll('.tabs__item').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('tabs__item_active')});

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item_active');
    });
  });
});
