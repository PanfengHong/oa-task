import { useState, useEffect } from 'react'
import { getTasks } from '../api'
import '../module.css'

export function TaskMinePage() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getTasks().then(res => {
      console.log("tasks", res)
      if(res.code === 200) {
        setTasks(res.data)
      }
    })
  }, [])

  return (
    <div className="oa-module-page">
      <h2>我的任务</h2>
      <ul className="oa-module-list">
        <li>
          <strong>提交周报</strong>
          <span>截止：本周五 18:00</span>
        </li>
        <li>
          <strong>审批流程联调</strong>
          <span>优先级：高</span>
        </li>
      </ul>
    </div>
  )
}
