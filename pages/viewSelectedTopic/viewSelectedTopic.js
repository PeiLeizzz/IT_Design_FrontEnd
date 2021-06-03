$ = layui.jquery;

layui.use('table', function() {
	var table = layui.table;
	
	table.render({
		elem: '#topic-table',
		cols: [
			[ //标题栏
				{
					field: 'topic_name',
					title: '课题名',
					templet: '#topicTitle',
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
					align: 'center'
				}, {
					field: 'choice_status',
					title: '状态',
					width: 200,
					align: 'center'
				}
			]
		],
		url: 'http://127.0.0.1:8100/view/topic?student_id=2020180000&&choice_status=0'
	});
});