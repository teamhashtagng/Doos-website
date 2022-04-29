function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (start - end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  const obj = document.getElementById("value1");
  const second_obj = document.getElementById('value2');
  const third_obj = document.getElementById('value3');
  const fourth_obj = document.getElementById('value4')

  animateValue(obj, 500, 0, 5000);
  animateValue(second_obj, 350, 0, 5000 );
  animateValue(third_obj, 500, 0, 5000);
  animateValue(fourth_obj, 7000, 0, 5000);