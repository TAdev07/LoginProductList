$( document ).ready(function() {
    var Setting = []; //
    var Work_time = [];
    var Hidden_comment = {};
    var Atteched_label = [];
    
 //-----------WORK TIME----------//
    
    // Work_time[0] = {
    // 	isDone : false,
    // 	day : "value",
    // 	start_t : "value",
    // 	end_t : ""
    // }

   
   function loadWorkTime(){
   		var value = Setting[0];
		var value2 = '[{"isDone":false,"value":"Thứ hai","start_t":"10","end_t":"0"},{"isDone":false,"value":"Thứ ba","start_t":"0","end_t":"0"},{"isDone":false,"value":"Thứ tư","start_t":"0","end_t":"0"},{"isDone":false,"value":"Thứ Năm","start_t":"0","end_t":"0"},{"isDone":false,"value":"Thứ sáu","start_t":"0","end_t":"0"},{"isDone":false,"value":"Thứ bảy","start_t":"0","end_t":"0"},{"isDone":false,"value":"Chủ Nhật","start_t":"0","end_t":"0"}]';
		if (value !== undefined) {
			Work_time = value; 
		}
		else {
			Work_time = JSON.parse(value2);
		} 
   }

   function saveWorkTime() {
   	for(var i=0, len=Work_time.length; i < len; i++){
   		var ischecked = $('.checkbox-work-time')[i].checked;
   		if (ischecked) {
   			markWorkTimeAsDone(i);
   		}
   		else {
   			markWorkTimeAsIncompleted(i)
   		}
   	}
   }

   function markWorkTimeAsDone(index) {
   		var obj = Work_time[index];
   		obj.isDone = true;
   		var start = $('.start')[index].value;
   		obj.start_t = start;
   		var end = $('.end')[index].value;
   		obj.end_t = end;
   		console.log(start);
   }

   function markWorkTimeAsIncompleted(index) {
   		var obj = Work_time[index];
   		obj.isDone = false;
   		obj.start_t = "0";
   		obj.end_t =  "0";
   }

   function renderWorkTime(obj) {
   	$('#work-time-list').empty();
   	for (var i=0, len=obj.length; i < len ; i++) {
   		var newItem = $('#template-work-time').find('.work-time-list-item').clone();
   		var ischecked = obj[i]['isDone'];
   		var val = obj[i]['value'];
   		var start = obj[i]['start_t'];
   		var end = obj[i]['end_t'];

   		newItem.find('span').text(val);
   		newItem.find('.start').val(start);
   		newItem.find('.end').val(end);
   		if(ischecked){
   			newItem.find('input[type="checkbox"]').prop('checked',true);
   		}

   		$('#work-time-list').append(newItem);
   	}
   }
   ///////   Option time  //////
	var select = document.getElementsByClassName("select-time")
	for (var i = 0, len=select.length ; i < len; i++) {
		for (var j = 0; j <= 24; j ++) {
			var option = document.createElement( 'option' )
			option.value = option.text = j
			select[i].add( option )
		}
	}




	//--------------AUTO HIDDEN COMMENT----------//

	var Hidden_comment = {};
	function loadHiddenComment() {
		var value = Setting[1];
		if (value !== undefined) {
			Hidden_comment = value;
		}
		else {
		Hidden_comment = {
			atteched_key: false,
			atteched_phone:true,
			hidden_cmt:false,
			hidden_key_word:true,
			hidden_phone:false,
			key_word:"",
			phone:""
		}
		}
	}

	function renderHiddenComment(){
		var hidden = $('.hidden-comment-list');
		var hiddenComment = Hidden_comment['hidden_cmt'];
		var hiddenPhone = Hidden_comment['hidden_phone'];
		var hiddenKeyWord = Hidden_comment['hidden_key_word'];
		var keyWord = Hidden_comment['key_word'];
		var attechedKey = Hidden_comment['atteched_key'];
		var attechedPhone = Hidden_comment['atteched_phone'];
		var tel = Hidden_comment['phone'];

		$($('.hidden-comment')).prop('checked', hiddenComment);
		hidden.find('.hidden-phone').prop('checked', hiddenPhone);
		hidden.find('.hidden-key-word').prop('checked', hiddenKeyWord);
		$($('.atteched-key')).prop('checked', attechedKey);
		$('.key-word')[0].value = keyWord;
		$($('.atteched-phone')).prop('checked', attechedPhone);
		$('.phone')[0].value = tel;
	}

	function saveHidden() {
		for(var i=0, len=$('.checkbox-hidden').length; i < len; i++){
			var ischecked = $('.checkbox-hidden')[i].checked;
			var n = $('.checkbox-hidden')[i].name;
			if (ischecked) {
				Hidden_comment[n] = true;
			}
			else {
				var n = $('.checkbox-hidden')[i].name;
				Hidden_comment[n] = false;
			}
		}
		if($('.hidden-key-word')[0].checked){
			Hidden_comment['key_word'] = $('.key-word')[0].value;
		}
		else {
			Hidden_comment['key_word'] = "";
		}

		if (!Hidden_comment.atteched_phone) {
			Hidden_comment['phone'] = "";
		}
	}

   $('#save-phone').click(function(){
   		var ischecked = Hidden_comment.atteched_phone;
   		if (ischecked) {
   			Hidden_comment['phone'] = $('.phone')[0].value;	
   		}
   });


	// $('#save').click(function(){
	// 	saveHidden();
	// });

	//-----------------AUTO ATTECHED-------------//
	
	function loadAttechedLabel(){
		var value = Setting[2];
		if (value !== undefined) {
			Atteched_label = value;
		}
		else {
			Atteched_label[0] = {
				label_name: "",
				label_key: ""
			};
		}
	}

	function renderAttechedLabel(obj){
		$('#atteched-label-list').empty();
		for(var i=0, len= obj.length; i < len; i++){
			var newItem = $('.template-label').find('.atteched-label-item').clone();
			newItem.data('index',i);
			var name = obj[i].label_name;
			var key = obj[i].label_key;

			newItem.find('.label-name').val(name);
			newItem.find('.label-key').val(key);
			$('#atteched-label-list').append(newItem);

		}
		
	}

	function setAttechedItem(obj){
		var ItemAtteched = $('#atteched-label-list').find('.atteched-label-item');
		for(var i =0, len=ItemAtteched.length; i < len; i++){
			var name = $('.label-name')[i].value;
			var key = $('.label-key')[i].value;

			obj[i].label_name = name;
			obj[i].label_key = key;
		}
	}
	
	function pushToAttechedLabel() {
		var obj = {
			label_name: "",
			label_key: ""
		}
		Atteched_label.push(obj);
	}
	function createAttechedLabel() {
		pushToAttechedLabel();
		setAttechedItem(Atteched_label);
		renderAttechedLabel(Atteched_label);
	}
	function removeAttchedItem(index){
		console.log(Atteched_label);
		Atteched_label.splice(index,1);
	}
	////  Remove
	$("#atteched-label-list").on('click','.fa-trash', function(){
		var index = $(this).parents('li').data('index');
		setAttechedItem(Atteched_label);
		removeAttchedItem(index);
		renderAttechedLabel(Atteched_label);
	});

	$('.create-atteched').click(function() {
		createAttechedLabel()
	});

	// function checkAttechedItem() {
	// 	for(var i = 0, len=Atteched_label.length; i<len;i++){
	// 		var n =  Atteched_label[i].label_name;
	// 		var k = Atteched_label[i].label_key;
	// 		console.log(n);
	// 		console.log(k);
			
	// 		if (n == "" || k == "") {
	// 			Atteched_label.splice(i,1);
	// 		}
	// 	}
	// }

	function saveAttechedItem(){
		if (!Hidden_comment.atteched_key){
			Atteched_label = [];
			Atteched_label[0] = {
				label_name: "",
				label_key: ""
			};
		}
		else {
			setAttechedItem(Atteched_label);
		}
		Setting[0] = Work_time;
		Setting[1] = Hidden_comment;
		Setting[2] = Atteched_label;
		console.log(JSON.stringify(Setting));
		localStorage.setItem('Setting' , JSON.stringify(Setting));
	}

	function loadSetting(){
		var value = localStorage.getItem('Setting');
		if(value !== null){
			Setting = JSON.parse(value);
		}
	}
	
	loadSetting();
	loadHiddenComment();
	loadWorkTime();
	loadAttechedLabel();
	renderWorkTime(Work_time);
	renderHiddenComment();
	renderAttechedLabel(Atteched_label);

	
	$('#save').click(function(){
		saveWorkTime();
		saveHidden();
		saveAttechedItem();
	});
});