export function searchProduct() {
    $(function() {
        // event listener for search input
        $('#searchinput').on('input', function() {
            const text = $(this).val().toLowerCase();

            // loop on products
            $('.product-item').each(function() {
                const productname = $(this).find('h6.text-center.text-capitalize').text().toLowerCase();
                if (productname.includes(text)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        });
    });
}