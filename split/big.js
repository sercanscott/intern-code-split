(() => {
  function looper(name, duration) {
    var start = (new Date()).getTime();
    var elapsed = 0;
    while (elapsed < duration) {
      elapsed = (new Date()).getTime() - start;
      console.log('d');
    }
  }

  looper('waiting', 30);
  console.log('big finished');
})();
