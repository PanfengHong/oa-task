import { useState, useEffect } from 'react'
import { getTasks } from '../api'
import '../module.css'
import type { ResponseData } from '@zdy-oa/utils'

interface TaskType {
  id: string;
  title: string;
  endLine?: string;
}

export function TaskMinePage() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  useEffect(() => {
    getTasks().then((res: ResponseData) => {
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
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong>
            {task.endLine && (
              <span>截止：{task.endLine}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
