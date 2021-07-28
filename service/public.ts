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
