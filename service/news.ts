import request from '@/service'

export const newsSearch = async (params) => {
  return await request.post('/backApi/api/news/search', params)
}
export const newsDetail = async (params) => {
  return await request.post('/backApi/api/news/detail', params)
}
export const newsTagsList = async (params) => {
  return await request.post('/backApi/api/news/tags/list', params)
}
export const caseList = async (params) => {
  return await request.post('/backApi/api/news/case/list', params)
}
export const caseDetail = async (params) => {
  return await request.post('/backApi/api/news/case/one', params)
}
