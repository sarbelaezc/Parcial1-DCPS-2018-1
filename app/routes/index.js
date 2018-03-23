import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return{
      todoList:[
        {
          action:'Calificar parciales de diseño',
          isReady: false,
        },
        {
          action:'Subir notas de redes al sia',
          isReady: false,
        },
        {
          action:'Preparar clase de diseño',
          isReady: true,
        },
      ]
    };
  },
});
