$ = layui.jquery;
var has_choice = false;

$.ajax({
	type: "GET",
	url: "http://127.0.0.1:8100/view/studentChoiceCount",
	data: {
		"student_id": "2020180000"
	}
})
.success(function(data) {
	if (data.code == 500) {
		has_choice = true;
	}
})
.error(function(data) {
	has_choice = true;
})

layui.use('table', function() {
	var table = layui.table;
	
	table.render({
		elem: '#topic-table',
		height: 'full-100',
		page: true,
		cols: [
			[ //标题栏
				{
					field: 'topic_name',
					title: '课题名',
					templet: '#topic_title',
					align: 'center',
				}, {
					field: 'college',
					title: '院系',
					templet: '#college_form',
					width: 200,
					align: 'center'
				}, {
					field: 'teacher',
					title: '指导教师',
					width: 200,
					templet: '#teacher_form',
					align: 'center'
				}, {
					field: 'max_person',
					title: '已确认学生数 / 最大可确认数',
					width: 300,
					templet: '#stu_number',
					align: 'center'
				}, {
					field: 'end_time',
					title: '截止日期',
					width: 200,
					templet: "#end_time",
					align: 'center'
				}, {
					field: 'operation',
					title: '操作',
					width: 100,
					templet: '#operation',
					align: 'center'
				}
			]
		],
		url: 'http://127.0.0.1:8100/view/topicListStudent?student_id=2020180000'
	});
});


layui.use("form", function() {
	var form = layui.form;
	form.on("select(college)", function (opt) {
	   var college = opt.value;
	   $.get("http://127.0.0.1:8100/view/teacherList?college=" + college)
		   .then(res => {
			   //每次加载都要把之前选中的初始化
			   $("#teacher").empty();
			   $("#teacher").append(new Option());
			   $.each(res.data, function(key, teacher) {
				   $("#teacher").append(new Option(teacher.uname, teacher.id));
			   });
			   layui.form.render("select");
		   });
		}
	)
	
	form.on("submit(search_button)", function(data) {
		var college = data.field.college;
		var teacher_id = data.field.teacher_id;
		var topic_name = data.field.topic_name;
		var url = "http://127.0.0.1:8100/view/topicSearch";
		var query = {};
		query["student_id"] = "2020180000";
		if (college != undefined && college != "") query["college"] = college;
		if (teacher_id != undefined && teacher_id != "") query["teacher_id"] = teacher_id;
		if (topic_name != undefined && topic_name != "") query["topic_name"] = topic_name;
		
		if (Object.keys(query).length == 1) url = "http://127.0.0.1:8100/view/topicListStudent";
		
		var table = layui.table;
		table.reload('topic-table', {
			url: url,
			method: "get",
			where: query,
			page: {
				curr: 1
			}
		}, 'data')
	})
})

$(document).on('keydown', function(event) {
	console.log(event);
	if (event.keyCode == 13) {
		$("#search_button").trigger("click");
		return false;
	}
});

function cancelSelect(topic_id) {
	if (confirm("你确认要退选吗？") == true) {
		$.ajax({
			type: "POST",
			url: "http://127.0.0.1:8100/post/cancelSelect",
			data: {
				"student_id": "2020180000",
				"topic_id": topic_id
			}
		})
		.success(function(data) {
			alert(data.msg, "确定");
			window.location.reload();
		})
		.error(function(data) {
			alert(data.msg, "确定");
			window.location.reload();
		})
	}
}

function select(topic_id) {
	if (confirm("你确定要报名该课题吗？") == true) {
		$.ajax({
			type: "POST",
			url: "http://127.0.0.1:8100/post/selectTopic",
			data: {
				"student_id": "2020180000",
				"topic_id": topic_id
			}
		})
		.success(function(data) {
			alert(data.msg, "确定");
			window.location.reload();
		})
		.error(function(data) {
			alert(data.msg, "确定");
			window.location.reload();
		})
	}
}