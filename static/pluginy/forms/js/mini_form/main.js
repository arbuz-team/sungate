/**
 * Created by mrskull on 18.12.16.
 */


/**
 *    Defining private functions
 */

let send_prepare_post = function(name, value)
{
  return {
    __edit__ : name,
    value : value,
  };
};


/**
 *    Defining public functions
 */

export let send = function(field, callback)
{
  let $field = $(field),
    field_name = $field.attr('name'),
    field_value = $field.val(),
    post_data = send_prepare_post(field_name, field_value);
  
  window.APP.send_post(undefined, post_data, callback)
};