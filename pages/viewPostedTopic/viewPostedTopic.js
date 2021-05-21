function viewEnrolledStudents() {
	// layer.open({
	//   type: 2, 
	//   content: '../enrolledStudents/enrolledStudents.html' //这里content是一个URL，如果你不想让iframe出现滚动条，你还可以content: ['http://sentsin.com', 'no']
	// }); 
	layer.open({
		type: 1,
		title: '新报名学生',
		content: '<table class="layui-table table-topic" lay-size="lg">'+
		'<colgroup><col width="250"><col width="250"><col width="250"></colgroup>'+
		'<thead><tr><th>姓名</th><th>专业</th><th>操作</th></thead><tbody>'+
		'<tr><th><a href="#">裴雷</a></th><th>信息管理与信息系统</th><th><div class="layui-btn">同意</div><div class="layui-btn">拒绝</div></th></tr>'+
		'<tr><th><a href="#">裴雷</a></th><th>信息管理与信息系统</th><th><div class="layui-btn">同意</div><div class="layui-btn">拒绝</div></th></tr>'+
		'<tr><th><a href="#">裴雷</a></th><th>信息管理与信息系统</th><th><div class="layui-btn">同意</div><div class="layui-btn">拒绝</div></th></tr>'+
		'<tr><th><a href="#">裴雷</a></th><th>信息管理与信息系统</th><th><div class="layui-btn">同意</div><div class="layui-btn">拒绝</div></th></tr>'+
		'<tr><th><a href="#">裴雷</a></th><th>信息管理与信息系统</th><th><div class="layui-btn">同意</div><div class="layui-btn">拒绝</div></th></tr>'+
		'<tr><th><a href="#">裴雷</a></th><th>信息管理与信息系统</th><th><div class="layui-btn">同意</div><div class="layui-btn">拒绝</div></th></tr>'+
		'<tr><th><a href="#">裴雷</a></th><th>信息管理与信息系统</th><th><div class="layui-btn">同意</div><div class="layui-btn">拒绝</div></th></tr>'+
		'<tr><th><a href="#">裴雷</a></th><th>信息管理与信息系统</th><th><div class="layui-btn">同意</div><div class="layui-btn">拒绝</div></th></tr>'+
		'<tr><th><a href="#">裴雷</a></th><th>信息管理与信息系统</th><th><div class="layui-btn">同意</div><div class="layui-btn">拒绝</div></th></tr>'+
		'</tbody></table>',
		area: ['800px', '500px']
	})
}
