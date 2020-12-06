{/* <form class="save-me" id="save-me">

	<label for="name">Name</label>
	<input type="text" name="name" id="name" value="Mike Wazowski">

	<label for="address">Address</label>
	<input type="text" name="address" id="address" value="123 Scare Avenue, Monstropolis">

	<label for="email">Email</label>
	<input type="email" name="email" id="email" value="mikew@monstersinc.com">

	<label for="hear-about-us">How did you hear about us?</label>
	<select name="hear-about-us" id="hear-about-us">
		<option value=""></option>
		<option value="google">Google</option>
		<option value="referral">Referred by a Friend</option>
		<option value="tv" selected>A TV Ad</option>
		<option value="radio">A Radio Ad</option>
	</select>
  
  	<label for="hear-about-us-multi">How did you hear about us?</label>
	<select name="hear-about-us-multi" id="hear-about-us-multi" multiple>
		<option value=""></option>
		<option value="google">Google</option>
		<option value="referral" selected>Referred by a Friend</option>
		<option value="tv" selected>A TV Ad</option>
		<option value="radio">A Radio Ad</option>
	</select>

	<label id="more">Additional thoughts?</label>
	<textarea name="more" id="more">Laughter produces more energy than screams!</textarea>

	<p><strong>Do you agree to our terms of service?</strong></p>
	<label class="label-plain">
		<input type="radio" name="tos" value="yes" checked>
		Yes
	</label>
	<label class="label-plain">
		<input type="radio" name="tos" value="no">
		No
	</label>

	<p><strong>Pick your favorite university.</strong></p>
  
  <label class="label-plain">
		<input type="checkbox" name="scare-tech">
		Scare Tech
	</label>

	<label class="label-plain">
		<input type="checkbox" name="mu" checked>
		Monster University
	</label>

	<p><button type="submit">Submit</button></p>

</form>
 */}

/*!
* Serialize all form data into an array of key/value pairs
* (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
* @param  {Node}   form The form to serialize
* @return {Array}       The serialized form data
*/
var serializeArray = function (form) {
    var arr = [];
    Array.prototype.slice.call(form.elements).forEach(function (field) {
        if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1) return;
        if (field.type === 'select-multiple') {
            Array.prototype.slice.call(field.options).forEach(function (option) {
                if (!option.selected) return;
                arr.push({
                    name: field.name,
                    value: option.value
                });
            });
            return;
        }
        if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked) return;
        arr.push({
            name: field.name,
            value: field.value
        });
    });
    return arr;
};

var form = document.querySelector('#save-me');
var data = serializeArray(form);
console.log(data);

var serializeObject = function (form) {
    var obj = {};
    Array.prototype.slice.call(form.elements).forEach(function (field) {
        if (!field.name || field.disabled || ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1) return;
        if (field.type === 'select-multiple') {
            var options = [];
            Array.prototype.slice.call(field.options).forEach(function (option) {
                if (!option.selected) return;
                options.push(option.value);
            });
            if (options.length) {
                obj[field.name] = options;
            }
            return;
        }
        if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked) return;
        obj[field.name] = field.value;
    });
    return obj;
};

var form = document.querySelector('#save-me');
var data = serializeObject(form);
console.log(data);