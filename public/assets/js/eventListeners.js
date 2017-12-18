$(document).ready(() => {
	//click events for opening and closing modals
	openModal('sign-in', 'sign-in-modal');
	openModal('create-account', 'create-account-modal');
	openModal('update-account', 'update-account-modal');
	openModal('inbox', 'inbox-modal');
	// openModal('viewAgain', 'viewAgain-modal');
	// closeModal('viewAgain-modal');
	closeModal('sign-in-modal');
	closeModal('create-account-modal');
	closeModal('update-account-modal');
	closeModal('inbox-modal');

	

	//click event for submitting login
	$('#login-submit').on('click', (event) =>{
		event.preventDefault();
		loginUser();
	});

	//click event for submitting a newly created user
	$('#create-submit').on('click', (event) =>{
		event.preventDefault();
		createUser();
		/// addUserTable(); 
	});

	//click event for clearing all inputs
	$('#sign-in, #create-account').on('click', (event) => {
		event.preventDefault();
		clearInputs();
	});

	//click event listener for "swiping" on users
	$(document).on('click','.choose', function (event) {
		event.preventDefault();
		userSwipe($(this));
	});

	//click event for updating a user
	$(document).on('click', '#update-submit', function (event) {
		event.preventDefault();
		updateUser($(this));
	});

	//click event for requesting video chat
	$("#requestVideoBtn").on('click', (e) => {
		e.preventDefault();
		console.log("this works");
		// location.replace('http://localhost:3000/' + initialPage);
		requestVideo();
	});

	//click event for declining to request video chat

	//click event for logging user out
	$('#sign-out').on('click', function (event) {
		event.preventDefault();
		signOut();
	});

	//click event for creating a chat window
	$(document).on('click', '.chatUser', function (event) {
		event.preventDefault();
		showChatBubble($(this));
	});

	//click event for removing a chat window
	$(document).on('click', '.remove', function () {
		removeChatWindow($(this));
		reorderChatWindows();
	});

	//click event for starting a text chat with a user
	$('#connect-chat').on('click', function (event) {
		event.preventDefault();
		let user = $(this).parent().attr('data-username');
		console.log('user from front end:',user)
		$(this).parent().fadeOut();
		createChatWindow(user);
	});

	//click event for starting a video chat with a user
	$('#connect-video').on('click', function (event) {
		event.preventDefault();
		let user = $(this).parent().attr('data-username');
		$(this).parent().fadeOut();
		//
		//Enter video click event code here
		//
	});

	//event listener for 
	$(document).on('click','.viewAgain', function (event) {
		event.preventDefault();		
		$('#viewAgain-modal').fadeIn();
		addBackUser($(this));
	});

	//"click" event for enter key on chat inputs
	$(document).keypress(function (event) {

		enterMessage(event);
	});

	//click event that hides chat bubble when 
	
	// $(document).on('click', function (event) {
	// 	if($('#connectBubble').css('display') !== 'none') {
	// 		console.log('firing inside where function is called')
	// 		hideChatBubble(event);
	// 	}
	// });
	

	//click event for populating modal of user you would like a second chance at

	//commented out in case we want to utilize in the future
	// $(document).on('click', '.modal-close', function (event) {
	// 	event.preventDefault();
	// 	$('#viewAgain-modal').fadeOut();
	// })

	//layers user-tiles in the z-axis when userView loads
	layerTiles();
	$( function() {
    	$( "#chat-accordion" ).accordion({
    		collapsible: true,
    		active: false
    	});
  	});

	 	socket.on('private message', function (data) {	
			console.log('data from message:',data)
			console.log(thisUser)
			console.log(data.to==thisUser)

				createChatWindow(data.from);
				let message = $('<div class="bubble-left">').text(data.text);
				console.log('msgWindow Im trying to append to eventlisteners:', $('.msgWindow'))
				$('.msgWindow').append(message);
						
		});	

		// socket.on('your message', function (data) {
		// 	let message = $('<div class="bubble-right">').text(data.text);
		// 	$('.msgWindow').append(message);
		// })

});//end of document ready function
