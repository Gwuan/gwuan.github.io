(function () {
  if (window.__imageCompareInit) return;
  window.__imageCompareInit = true;

  var clamp = function (v) { return Math.min(Math.max(v, 0), 100); };

  function setPos(el, pct) {
    pct = clamp(pct);
    el.style.setProperty('--pos', pct);
    el.setAttribute('aria-valuenow', Math.round(pct));
  }

  function pctFromX(el, clientX) {
    var rect = el.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  function init(el) {
    if (el.dataset.compareInit) return;
    el.dataset.compareInit = '1';
    var dragging = false;

    el.addEventListener('pointerdown', function (e) {
      dragging = true;
      el.setPointerCapture(e.pointerId);
      setPos(el, pctFromX(el, e.clientX));
    });
    el.addEventListener('pointermove', function (e) {
      if (dragging) setPos(el, pctFromX(el, e.clientX));
    });
    function stop(e) {
      dragging = false;
      if (e.pointerId != null && el.hasPointerCapture(e.pointerId)) {
        el.releasePointerCapture(e.pointerId);
      }
    }
    el.addEventListener('pointerup', stop);
    el.addEventListener('pointercancel', stop);

    el.addEventListener('keydown', function (e) {
      var cur = parseFloat(el.style.getPropertyValue('--pos')) || 50;
      if (e.key === 'ArrowLeft')  { setPos(el, cur - 2); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { setPos(el, cur + 2); e.preventDefault(); }
      else if (e.key === 'Home')  { setPos(el, 0);   e.preventDefault(); }
      else if (e.key === 'End')   { setPos(el, 100); e.preventDefault(); }
    });
  }

  function initAll() { document.querySelectorAll('.image-compare').forEach(init); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();