//------------------------------------------animacja------------------------------
const uruchomAnime = () => {
  const x = 200 //duration
  const y = 400 //delay

  document.getElementById("source1").animate([{
    transform: 'translate(700px,200px)'
  }], {
    duration: x,
    fill: 'forwards'
  });

  document.getElementById("source2").animate([{
    transform: 'translate(350px,150px)'
  }], {
    duration: x,
    delay: y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(350px,150px)'
  }], {
    duration: x,
    delay: 2 * y,
    fill: 'forwards'
  });

  document.getElementById("source3").animate([{
    transform: 'translate(700px,100px)'
  }], {
    duration: x,
    delay: 3 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(0px,100px)'
  }], {
    duration: x,
    delay: 4 * y,
    fill: 'forwards'
  });

  document.getElementById("source2").animate([{
    transform: 'translate(700px,100px)'
  }], {
    duration: x,
    delay: 5 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(700px,100px)'
  }], {
    duration: x,
    delay: 6 * y,
    fill: 'forwards'
  });

  document.getElementById("source4").animate([{
    transform: 'translate(350px,50px)'
  }], {
    duration: x,
    delay: 7 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(350px,150px)'
  }], {
    duration: x,
    delay: 8 * y,
    fill: 'forwards'
  });

  document.getElementById("source2").animate([{
    transform: 'translate(0px,100px)'
  }], {
    duration: x,
    delay: 9 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(0px,100px)'
  }], {
    duration: x,
    delay: 10 * y,
    fill: 'forwards'
  });

  document.getElementById("source3").animate([{
    transform: 'translate(350px,50px)'
  }], {
    duration: x,
    delay: 11 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(700px,200px)'
  }], {
    duration: x,
    delay: 12 * y,
    fill: 'forwards'
  });

  document.getElementById("source2").animate([{
    transform: 'translate(350px,50px)'
  }], {
    duration: x,
    delay: 13 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(350px,50px)'
  }], {
    duration: x,
    delay: 14 * y,
    fill: 'forwards'
  });

  document.getElementById("source5").animate([{
    transform: 'translate(700px,0px)'
  }], {
    duration: x,
    delay: 15 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(0px,200px)'
  }], {
    duration: x,
    delay: 16 * y,
    fill: 'forwards'
  });

  document.getElementById("source2").animate([{
    transform: 'translate(700px,100px)'
  }], {
    duration: x,
    delay: 17 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(700px,100px)'
  }], {
    duration: x,
    delay: 18 * y,
    fill: 'forwards'
  });

  document.getElementById("source3").animate([{
    transform: 'translate(0px,100px)'
  }], {
    duration: x,
    delay: 19 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(350px,150px)'
  }], {
    duration: x,
    delay: 20 * y,
    fill: 'forwards'
  });

  document.getElementById("source2").animate([{
    transform: 'translate(0px,100px)'
  }], {
    duration: x,
    delay: 21 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(0px,100px)'
  }], {
    duration: x,
    delay: 22 * y,
    fill: 'forwards'
  });

  document.getElementById("source4").animate([{
    transform: 'translate(700px,0px)'
  }], {
    duration: x,
    delay: 23 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(700px,100px)'
  }], {
    duration: x,
    delay: 24 * y,
    fill: 'forwards'
  });

  document.getElementById("source2").animate([{
    transform: 'translate(350px,150px)'
  }], {
    duration: x,
    delay: 25 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(350px,150px)'
  }], {
    duration: x,
    delay: 26 * y,
    fill: 'forwards'
  });

  document.getElementById("source3").animate([{
    transform: 'translate(700px,0px)'
  }], {
    duration: x,
    delay: 27 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(0px,200px)'
  }], {
    duration: x,
    delay: 28 * y,
    fill: 'forwards'
  });

  document.getElementById("source2").animate([{
    transform: 'translate(700px,0px)'
  }], {
    duration: x,
    delay: 29 * y,
    fill: 'forwards'
  });

  document.getElementById("source1").animate([{
    transform: 'translate(700px,0px)'
  }], {
    duration: x,
    delay: 30 * y,
    fill: 'forwards'
  })
  setTimeout("window.location.reload()", 31 * y);
}