import request from '@/service'

export const getBannerList = async (params) => {
  return await request.post('/backApi/api/banner/list', params)
}

export const getProductList = async (params) => {
  return await request.post('/backApi/api/product/list', params)
}

export const getProductOne = async (params) => {
  return await request.post('/backApi/api/product/one', params)
}

export const settingAll = async (params) => {
  return await request.post('/backApi/api/setting/all', params)
}

export const aboutInfo = async () => {
  return await request.post('/backApi/api/about/info')
}

export const aboutAboutInfo = async () => {
  return await request.post('/backApi/api/about/about')
}

export const aboutVideo = async () => {
  return await request.post('/backApi/api/about/video')
}
