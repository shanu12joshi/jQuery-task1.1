		$('#btn').click(function() {
		$.post("https://reqres.in/api/users",{fname: $('#fname').val(), lname: $('#lname').val()},function(response){
			$('#app').append('<tr>'+'<td>'+response['id']+'</td>' +'<td>'+response.fname+'</td>'+'<td>'+response.lname+'</td>'+'<td>'+response.createdAt+'</td>'+'</tr>');
		});
	});
