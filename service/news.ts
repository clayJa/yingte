import request from '@/service'

export const newsSearch = async (params) => {
  return await request.post('/backApi/api/news/search', params)
}
export const newsDetail = async (params) => {
  return await request.post('/backApi/api/news/detail', params)
}
export const hiringList = async (params) => {
  return await request.post('/backApi/api/hiring/list', params)
}
export const hiringDetail = async (params) => {
  return await request.post('/backApi/api/hiring/one', params)
}
