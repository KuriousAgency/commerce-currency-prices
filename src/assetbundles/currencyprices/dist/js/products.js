(function() {
	// delete payment currency
	var $currenciesTable = $('table#currencies');
	if ($currenciesTable[0]) {
		(function() {
			var timer = setInterval(function() {
				if (window.adminTable) {
					clearInterval(timer);
					window.adminTable.settings.deleteAction = 'commerce-currency-prices/payment-currencies/delete';
				}
			}, 50);
		})();
	}

	//add/edit payment currency
	var $newCurrencyAction = $('input[value="commerce/payment-currencies/save"]');
	if ($newCurrencyAction[0]) {
		$newCurrencyAction.val('commerce-currency-prices/payment-currencies/save');
	}

	// edit product
	// #details .meta .field[id="*-price-field"]
	/*var $price = $('#details .meta:not(.read-only) .field[id$="-price-field"]');
	if ($price[0]) {
		var id = $price.attr('id').replace('variants-', '').replace('-price-field', '');
		$prices.each(function() {
			$(this)
				.parent()
				.parent()
				.insertAfter($price);
		});
	}*/

	var $variants = $('#variants .variant-properties .field[id$="-price-field"], #details .meta:not(.read-only) .field[id$="-price-field"]');
	if ($variants[0]) {
		$variants.each(function() {
			var $this = $(this),
				id = $this
					.attr('id')
					.replace('variants-', '')
					.replace('-price-field', '');
			$('#prices-' + id)
				.children()
				.each(function() {
					$(this).insertAfter($this);
				});
		});

		$('#variants .btn.add').on('click', function(e) {
			setTimeout(function() {
				var $new = $('#variants .variant-matrixblock[data-id^="new"]').last(),
					$field = $new.find('.variant-properties .field[id$="-price-field"]');

				$('#prices-new')
					.children()
					.each(function() {
						var $newField = $(this).clone();
						var html = $newField.html();
						html = html.replace(new RegExp('new', 'g'), $new.data('id'));
						$newField.html(html).insertAfter($field);
					});
			}, 50);
		});
	}

	// var $saveProductAction = $('input[value="commerce/products/save-product"]');
	// if ($saveProductAction[0]) {
	// 	$saveProductAction.val('currency-prices/prices/save');
	// }
})();
