/**
 * Created by mrskull on 23.01.17.
 */

import * as image_convert_views from './views'


export let define = function($container)
{
  let
    views = image_convert_views,
    settings = views.models.settings,
    $forms = $(settings.form, $container),
    $file_fields = $(settings.input_file, $forms);

  $file_fields.each(function(i, field)
  {
    $(field).change(function()
    {
      if(field.files[0])
        views.get_base64(field.files[0], views.create_convert_done(field), views.create_convert_error(field));
    });
  });
};