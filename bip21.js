// #BIP 0021 Bitcoin Payment URI Scheme
// #https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki#ABNF_grammar

// # A function that takes and bitcoin address, optional label, optional message and optional amount.
// # Returns BIP21 compliant URI that should work

var numOfKeys = function(obj) {
	// Returns number of keys in an object since obj.length does not work.
	// Doesnt work IE < 9.
	return Object.keys(obj).length;
};

var createBIP21URI = function(address, label, amount, message) {
	var uri = 'bitcoin:' + address;
	
	var key_value_pairs = {};
	if (message !== undefined && message !== null && message !== '') key_value_pairs.message = message;
	if (label !== undefined && label !== null && label !== '') key_value_pairs.label = label;
	if (amount !== undefined && amount !== null && amount !== '') key_value_pairs.amount = amount;

	if (numOfKeys(key_value_pairs) > 0) {
		uri += '?';
		for (var key in key_value_pairs) {
			uri += '&' + key + '=' + encodeURIComponent(key_value_pairs[key]);
		}
		uri = uri.replace('?&','?');
	}
	return uri;
};

console.log(createBIP21URI('1AGNa15ZQXAZUgFiqJ2i7Z2DPU2J6hW62i', 'Roger Andrews', 3, 'Nike shoes'));
