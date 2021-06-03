$ = layui.jquery;

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
					field: 'max_person',
					title: '已确认学生数 / 最大可确认数',
					width: 250,
					templet: '#stu_number',
					align: 'center'
				}, {
					field: 'new_person',
					title: '新报名学生数',
					width: 200,
					templet: "#new_number",
					align: 'center'
				}, {
					field: 'new_student',
					title: '新报名学生',
					width: 200,
					templet: '#new_student',
					align: 'center'
				}, {
					field: 'operation',
					title: '操作',
					width: 300,
					templet: '#operation',
					align: 'center'
				}
			]
		],
		url: 'http://127.0.0.1:8100/view/topicOfTeacher?teacher_id=1020180000'
	});
});

layui.use("form", function() {
	var form = layui.form;
	
	form.on("submit(search_button)", function(data) {
		var status = data.field.status;
		var topic_name = data.field.topic_name;
		var url = "http://127.0.0.1:8100/view/topicOfTeacher";
		var query = {};
		query["teacher_id"] = "1020180000";
		if (status != undefined && status != "") query["topic_status"] = status;
		if (topic_name != undefined && topic_name != "") query["topic_name"] = topic_name;
		
		var table = layui.table;
		console.log(url);
		table.reload('topic-table', {
			url: url,
			method: "get",
			where: query,
			page: true
		}, 'data')
	})
})

$(document).on('keydown', function(event) {
	console.log(event);
	if (event.keyCode == 13) {
		$("#search_button").trigger("click");
		return false
	}
});

function viewEnrolledStudents(topic_id) {
	$.get('http://127.0.0.1:8100/view/preSelectStudent', {"topic_id": topic_id}, function(data) {
		var stu = data.data;
		var str = "<table class='layui-table table-topic' lay-size='lg'>";
		str += "<colgroup><col width='250'><col width='250'><col width='250'></colgroup>";
		str += "<thead><tr><th>姓名</th><th>专业</th><th>操作</th></thead><tbody>";
		
		for (var i = 0; i < stu.length; i++) {
			str += "<tr><td style='padding-left: 15px;'>";
			str += "<div class='layui-table-cell'><a target=_blank class='layui-table-link' ";
			str += "href='" + "../../student/vita/vita.html?student_id=";
			str += stu[i].id + "'>" + stu[i].uname + "</a></div></td>";
			
			str += "<td>" + stu[i].major + "</td>";
			
			str += "<td><div class='layui-btn layui-btn-primary layui-border-green' ";
			str += "onclick=(agree(" + topic_id + "," + stu[i].id + "))>同意</div>";
			str += "<div class='layui-btn layui-btn-primary layui-border-green' ";
			str += "onclick=(disagree(" + topic_id + "," + stu[i].id + "))>拒绝</div></td>";
			str += "</td></tr>";
		}
		
		str += "</tbody></table>";
		
		layer.open({
			type: 1,
			title: '新报名学生',
			content: str, //注意，如果str是object，那么需要字符拼接。
			area: ['800px', '500px']
		});
	});
}

function agree(topic_id, student_id) {
	if (confirm("你确认要同意该学生吗？若同意后课题人满，则会自动拒绝其他所有学生！") == true) {
		$.ajax({
			type: "POST",
			url: "http://127.0.0.1:8100/post/agreeStudent",
			data: {
				"student_id": student_id,
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

function disagree(topic_id, student_id) {
	if (confirm("你确认要拒绝该学生吗？") == true) {
		$.ajax({
			type: "POST",
			url: "http://127.0.0.1:8100/post/disagreeStudent",
			data: {
				"student_id": student_id,
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

function changeTopic(topic_id) {
	window.open("../changeTopic/changeTopic.html?topic_id=" + topic_id)
}

function deleteTopic(topic_id) {
	if (confirm("你确认要删除该课题吗？") == true) {
		$.ajax({
			type: "POST",
			url: "http://127.0.0.1:8100/post/deleteTopic",
			data: {
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