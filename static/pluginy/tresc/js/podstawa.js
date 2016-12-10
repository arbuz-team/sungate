/**
 * Created by mrskull on 24.11.16.
 */

import {data_controller} from '../../arbuz/js/dane_strony/struktura';
export {data_controller} from '../../arbuz/js/dane_strony/struktura';

/*---------------- Kontroler Treści ----------------*/

export let content_controller = new function Content_Controller()
{
  let url, post_data;

///////////////////////////////////////////////////////////////////////////

  let _refresh_data = function()
  {
    data_controller.reset();
  };


  let _refresh_events = function()
  {
    window.dispatchEvent( window.EVENTS.define );
  };


  let _show_content = function( response, status, error )
  {
    let $kontener = $( data_controller.get( 'container' ) + ' > div > .tresc' );

    if(error === 'yes')
    {
      if( status !== 'success' )
      {
        $kontener.html( 'An error has occurred while connecting to server. Please, refresh website or check your connect with network.' )
      }
    }
    else
    {
      if( status !== 'success' )
      {
        _download_content( '/statement/404/', 'yes' );
        return false;
      }
    }

    _refresh_events();

    $kontener.animate( { opacity: 1 }, 150, function(){
      if(window.APP)
        paste_data(window.APP);
    });
  };


  let _download_content = function( response_url, error )
  {
    url = _preprocess_url(response_url);

    $( data_controller.get( 'container' ) )
      .load( url, post_data, (response, status) => {
        if(error)
          _show_content(response, status, error);
        else
          _show_content(response, status);
      })
      .add_data( 'url', url )
  };


  let _hide_content = function()
  {
    $( data_controller.get( 'container' ) +' > div > .tresc' )
      .animate( { opacity: 0.4 }, 100, () => {
        _download_content();
      });
  };


///////////////////////////////////////////////////////////////////////////

  this.change_content = function( response_url, response_post_data )
  {
    url = _preprocess_url(response_url);
    _change_url( url );
    _refresh_data();

    post_data = _prepare_post_data( response_post_data );

    _hide_content();
  };

  this.start = function()
  {
    _refresh_data();

    post_data = _prepare_post_data();

    _hide_content();
  };

///////////////////////////////////////////////////////////////////////////

  let _preprocess_url = function( response_url )
  {
    if( !response_url )
      if( url )
        return url;
      else
        return data_controller.get( 'path' );

    return response_url;
  };


  let _prepare_post_data = function( object )
  {
    if( !object )
      object = {};

    if( typeof object.__form__ === 'undefined')
      object.__content__ = 'true';
    object.csrfmiddlewaretoken = data_controller.get( 'csrf_token' );

    return object;
  };


  let paste_data = function( object )
  {
    data_controller.change_much( object );

    $( 'title' ).html( data_controller.get( 'title' ) );
    $( 'meta[ name="description" ]' ).attr( 'content', data_controller.get( 'description' ) );
  };


  let _change_url = function( url )
  {
    history.pushState( '', url, url );
  };

};