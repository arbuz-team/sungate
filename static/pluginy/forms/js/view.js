/*    JavaScript    */

import {form_controller, data_controller} from './main'
import * as validator from './validator/views'


export let form_controller_events = new function Form_Controller_Events()
{

  this.define = function()
  {
    $( 'form' ).submit( prepare_form_to_send );

    validator.define();
  };

//////////////////////////////////////////////////////////

  let get_form_fields = function( element )
  {
    let $fields = $( element ).serializeArray()
      , form_object = {};

    $.each( $fields , function( i, field )
    {
      form_object[ field.name ] = field.value;
    });

    return form_object;
  };



  let prepare_form_to_send = function( event )
  {
    event.preventDefault();

    let form_name = $(this).data('name')
      , url = $(this).attr( 'action' )
      , form_object = get_form_fields( this );

    if( typeof url === 'undefined' || url === '' )
      url = data_controller.get( 'path' );

    form_controller.send( form_name, url, form_object );
  };

};
 
