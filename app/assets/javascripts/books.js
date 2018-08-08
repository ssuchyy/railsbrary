document.addEventListener('turbolinks:load', function() {
  $(".selectize").selectize({
    create: function(input, callback) {
      $.ajax({
        method: 'POST',
        url: '/authors/new',
        data: { 'author': { 'name': input } },
        success: function(response) {
          callback({ value: response.id, text: response.name });
        },
        error: function(response) {
          callback()
        }
      })
    }
  });

  $("select[name='book_rating[rating]']").on("change", function() {
    $(this).parents("form:first").submit();
  })
})
