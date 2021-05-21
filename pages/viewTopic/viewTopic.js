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
					templet: '#college',
					width: 200,
					align: 'center'
				}, {
					field: 'teacher',
					title: '指导教师',
					width: 200,
					templet: '#teacher',
					align: 'center'
				}, {
					field: 'max_person',
					title: '已确认学生数 / 最大可确认数',
					width: 300,
					align: 'center'
				}, {
					field: 'end_time',
					title: '截止日期',
					width: 200,
					align: 'center'
				}, {
					field: 'operation',
					title: '操作',
					width: 100,
					align: 'center'
				}
			]
		],
		url: 'http://127.0.0.1:8100/view'
	});
})