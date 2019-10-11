var container = document.getElementById('anim_research');
      // Set up our animation 

      var animData = {
          container: container,
          renderer: 'svg',
          autoplay: true,
          loop: false,
          path : 'data_research.json'
      };
      var anim = bodymovin.loadAnimation(animData);