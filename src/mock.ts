/**
 * oa-task mock 规则
 * 命中接口：GET /api/task/list
 */
import { registerMocks, type ResponseData } from '@zdy-oa/utils'

function ok<T>(data: T, message = ''): ResponseData<T> {
  return { code: 200, data, message }
}

const tasks = [
  { id: 't-001', title: '提交周报', priority: 'high', due: '本周五 18:00', status: 'pending' },
  { id: 't-002', title: '审批流程联调', priority: 'high', due: '今天 20:00', status: 'in_progress' },
  { id: 't-003', title: 'OA 模块路由注册', priority: 'medium', due: '下周三', status: 'in_progress' },
  { id: 't-004', title: '项目脚手架', priority: 'low', due: '已完成', status: 'done' },
]

export function registerTaskMocks(): void {
  registerMocks([
    {
      method: 'GET',
      pattern: '/api/task/list',
      handler: () => ok(tasks),
    },
  ])
}
