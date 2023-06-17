<script>
  $(document).ready(function() {
    console.log("Let’s get ready to party with jQuery!");

    $('article img').addClass('image-center');

    $('article p').last().remove();

    var fontSize = Math.floor(Math.random() * 101);
    $('#title').css('font-size', fontSize + 'px');

    $('ol').append('<li>Random list item added by jQuery!</li>');

    $('aside').empty().append('<p>Apologies for the list’s existence.</p>');

    $('.form-control').on('input', function() {
      var red = $('input').eq(0).val();
      var blue = $('input').eq(1).val();
      var green = $('input').eq(2).val();
      $('body').css('background-color', 'rgb(' + red + ',' + blue + ',' + green + ')');
    });

    $('img').on('click', function() {
      $(this).remove();
    });
  });
</script>
