import { TaskBoardPage } from './pages/TaskBoardPage'
import { TaskMinePage } from './pages/TaskMinePage'
import type { OaModuleDefinition } from './types'

export const taskModule: OaModuleDefinition = {
  id: 'oa-task',
  name: '任务',
  basePath: '/task',
  menu: [
    { key: 'board', label: '任务看板', path: '/task' },
    { key: 'mine', label: '我的任务', path: '/task/mine' },
  ],
  routes: [
    { index: true, element: <TaskBoardPage /> },
    { path: 'mine', element: <TaskMinePage /> },
  ],
}
