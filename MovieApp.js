<script>
  $(document).ready(function() {
    $('#movie-form').on('submit', function(e) {
      e.preventDefault();
      
      const title = $('#title').val();
      const rating = $('#rating').val();

      $('#movies-list').append(
        '<div>' +
          '<h2>' + title + '</h2>' +
          '<p>Rating: ' + rating + '</p>' +
          '<button class="remove-movie">Remove</button>' +
        '</div>'
      );

      $('#title').val('');
      $('#rating').val('');
    });

    $('#movies-list').on('click', '.remove-movie', function() {
      $(this).parent().remove();
    });
  });
</script>