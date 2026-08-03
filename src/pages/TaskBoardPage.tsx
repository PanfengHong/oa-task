import '../module.css'

const columns = [
  { title: '待处理', items: ['完善登录页 UI', '接口联调'] },
  { title: '进行中', items: ['OA 模块路由注册'] },
  { title: '已完成', items: ['项目脚手架'] },
]

export function TaskBoardPage() {
  return (
    <div className="oa-module-page">
      <h2>任务看板</h2>
      <p className="oa-module-page__desc">oa-task 业务模块</p>
      <div className="oa-kanban">
        {columns.map((col) => (
          <section key={col.title} className="oa-kanban__col">
            <h3>{col.title}</h3>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
