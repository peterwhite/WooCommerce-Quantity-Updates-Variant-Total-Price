$('select').on('change blur', function() {
	var price = $('.woocommerce-Price-amount').text().replace(/[^\d.-]/g, ''); 
    //Replace .woocommerce-Price-amount with the CSS selector of the single unit price
	var quantity = $("select.qty").val();
     //Replace .select.qty with the CSS selector of the quanity selector
	var total = quantity*price;	
	if (total !== 0){
		$('.complete_price_holder').text('£'+quantity*price);	
    //Replace .complete_price_holder with the target element where the total price should be displayed
	}
});
