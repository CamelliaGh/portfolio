document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('consoooole');
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        
      });
    });
  });


  //document.getElementById("clickMe").onclick = function () { alert('Not ready yet!'); };
