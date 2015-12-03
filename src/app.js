/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */
var UI = require('ui');

var main = new UI.Menu({
  sections: [{
    items:[{
      title: 'Rutina A',
      subtitle: 'Lunes y miercoles'
    }, {
      title: 'Rutina B',
      subtitle: 'Martes y jueves'
    }]
  }]
});
main.on('select', function(e) {
  if (e.itemIndex==0) {
    var rutinaA = new UI.Menu({
      sections: [{
        items:[{
          title: 'Calentamiento',
          subtitle: '1km corriendo'
        }, {
          title: 'Calentamiento',
          subtitle: '3x10 arrancada'
        }, {
          title: 'Press banca +',
          subtitle: '4 series (20+10+8+6)'
        }, {
          title: '5 flex explosivas'
        }, {
          title: 'Jalon tras nuca',
          subtitle: '4 series (20+10+8+6)'
        }, {
          title: 'Peck deck o poleas',
          subtitle: '3 series (10+8+ 6)'
        }, {
          title: 'Dominadas',
          subtitle: '4 series (12+12+8+6)'
        }, {
          title: 'Squat',
          subtitle: '4 series (10+6+5+3)'
        }, {
          title: 'Peso muerto',
          subtitle: '3 series (5 rep)'
        }, {
          title: 'Lunges',
          subtitle: '3 series (10 rep)'
        }, {
          title: 'Gluteos bridges o',
          subtitle: '3 series (10 rep)'
        }, {
          title: 'Nordic Hamst.',
          subtitle: '2 series (5 rep)'
        }]  
      }]
    });
  rutinaA.show();
  } else if (e.itemIndex==1) {
      var rutinaB = new UI.Menu({
        sections: [{
          items:[{
            title: 'Calentamiento',
            subtitle: '500m remo'
          }, {
            title: 'Elev. laterales',
            subtitle: '4 ser. (15+12+10+10)'
          }, {
            title: 'Rotadores',
            subtitle: '4 series (15 rep)'
          }, {
            title: 'Press Militar',
            subtitle: '4 series (15+12+10+8)'
          }, {
            title: 'Chin Ups +',
            subtitle: '4 series (15+15+10+8)'
          }, {
            title: 'Biceps',
            subtitle: '4 series (20 rep)'
          }, {
            title: 'Remo vertical',
            subtitle: '3 series (12+10+8)'
          }, {
            title: 'Dips +',
            subtitle: '4 ser. (20+20+15+12)'
          }, {
            title: 'Press Frances',
            subtitle: '4 series (20 rep)'
          }]
        }]
      });
    rutinaB.show();
  }
});
main.show();