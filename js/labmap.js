$(document).ready(function() { $.getJSON('../cgi-bin/finger_m.cgi', function(data, textStatus, jqXHR) {
      $.each(data.labs, function(lab, machines) {
        $.each(machines, function(machine, details) {
          var id = '#' + lab + '_' + details.x + '_' + details.y;
          if (details.up) {
          var busy = details.busy;
          $(id + ' img').attr('src', (busy ? 'img/cpu_frown.png' : 'img/cpu_smile.png'));
          $(id + ' img').attr('title', machine + ' is ' + 
              (busy ? 'occupied' : 'available') + ' with a load of ' + details.load);
          } else {
          $(id + ' img').attr('src', 'img/cpu_dead.png');
          $(id + ' img').attr('title', machine + ' appears to be down.');
          }
          $(id + ' img').tipTip({delay: 0});
          });
        });
      });
    });
