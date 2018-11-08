import ajax from './ajax'

// const ImgBaseUrl ='http://192.168.1.15'
export const ImgBaseUrl = 'https://shop.zhihuimall.com.cn:443/zhihuishop/public'
// const Base_url = 'http://192.168.1.15'
const Base_url = 'https://shop.zhihuimall.com.cn:443/zhihuishop/public/index.php'

//获取权限
export const wxConfig = (url) => ajax(Base_url + '/api/allaccesstoken/tokenlist', {url})
//获取当前地址
export const districts = (longitude_latitude) => ajax(Base_url + '/api/allaccesstoken/longlat', {longitude_latitude})


//所有轮播
//列表广告
export const bannerList = () => ajax(Base_url + '/api/allbanner/bannerlist')

//优惠相关
//优惠底层图片和文案
export const discountList = () => ajax(Base_url + '/api/alldiscount/discountlist')
//今日钜惠
export const todayDiscountList = (longitude_latitude, page, area_id) => ajax(Base_url + '/api/alldiscount/todydiscountlist', {
  longitude_latitude,
  page,
  area_id
})
//很优惠
export const firmDiscountList = (longitude_latitude, page, area_id) => ajax(Base_url + '/api/alldiscount/firmdiscountlist', {
  longitude_latitude,
  page,
  area_id
})
//优惠信息
export const informationDiscountList = (longitude_latitude, page, area_id) => ajax(Base_url + '/api/alldiscount/informationdiscountlist', {
  longitude_latitude,
  page,
  area_id
})

//商家二维码
//商家二维码
export const storeImg = (uid, longitude_latitude) => ajax(Base_url + '/api/allstoreimg/storeimglist', {
  uid,
  longitude_latitude
}, "GET")
//判断否是商家
export const isaShop = (uid) => ajax(Base_url + '/api/allstoreimg/isashop', {uid}, "GET")

//需求发布
//需求发布
export const newsAdd = (uid, content) => ajax(Base_url + '/api/allnews/newsadd', {uid, content})


//搜索展示
//热搜
export const hotSearchList = () => ajax(Base_url + '/api/allsearch/hotsearchlist')
//套餐搜索
export const shopGoodsSearchList = (search_key, longitude_latitude, uid, area_id) => ajax(Base_url + '/api/allsearch/shopgoodssearchlist', {
  search_key,
  longitude_latitude,
  uid,
  area_id
})
//搜索历史
export const historySearchList = (uid) => ajax(Base_url + '/api/allsearch/historysearchlist', {uid})
//删除搜索历史
export const deleteHistory = (uid) => ajax(Base_url + '/api/allsearch/delhistorysearchlist', {uid});

//所有分类
// 一级分类
export const shopCatelist = () => ajax(Base_url + '/api/allshopcate/shopcatelist')
// 更多分类
export const moreShopCateList = () => ajax(Base_url + '/api/allshopcate/moreshopcatelist')
// 二级分类
export const twoShopCateList = (p_id) => ajax(Base_url + '/api/allshopcate/twoshopcateList', {p_id})
// 更多二级分类列表
export const moreTwoShopCateList = (p_id) => ajax(Base_url + '/api/allshopcate/moretwoshopcateList', {p_id})

//店铺套餐
//套餐
export const allShopGoodList = (store_id, longitude_latitude, status) => ajax(Base_url + '/api/allshopgoods/shopgoodslist', {
  store_id,
  longitude_latitude,
  status
})

//智能排序
//排序
export const allSort = (sort_status, longitude_latitude, type, shopcate_id, page, area_id) => ajax(Base_url + '/api/allsort/sortlist', {
  sort_status,
  longitude_latitude,
  type,
  shopcate_id,
  page,
  area_id
})

//分类下的店铺
//店铺列表
export const storeList = (shopcate_id, type, longitude_latitude, page, area_id) => ajax(Base_url + '/api/allstore/storeList', {
  shopcate_id,
  type,
  longitude_latitude,
  page,
  area_id
})
//小编推荐
export const recommendList = (longitude_latitude, area_id) => ajax(Base_url + '/api/allstore/recommendlist', {
  longitude_latitude,
  area_id
})
//小编更多推荐
export const MoreRecommendList = (longitude_latitude, page, area_id) => ajax(Base_url + '/api/allstore/morerecommendlist', {
  longitude_latitude,
  page,
  area_id
})
//商家推荐列表
export const shopGoodList = (longitude_latitude, area_id, page = 1) => ajax(Base_url + '/api/allstore/shopgoodslist', {
  longitude_latitude,
  area_id,
  page
})
//更多商家推荐列表
export const moreShopGoodsList = (longitude_latitude, page, area_id) => ajax(Base_url + '/api/allstore/moreshopgoodslist', {
  longitude_latitude,
  page,
  area_id
})

// 商家入驻相关
// 地区列表
export const areaList = (region_type, parent_id) => ajax(Base_url + '/api/allarea/arealist', {region_type, parent_id})
//图片上传
export const upLoadImgToOur = (src) => ajax(Base_url + '/api/allarea/uploadimg', {src})
// 一级分类选择
export const oneCate = () => ajax(Base_url + '/api/allarea/onecate')
// 二级分类选择
export const twoCate = (p_id) => ajax(Base_url + '/api/allarea/twocate', {p_id})
// 商家入驻添加
export const storeAdd = (uid, shopcate_id, shopchildcate_id, province_id, city_id, area_id, street_id, community_id, shop_name, phone, name, address, id_card, id_card_positive_photo, id_card_negative_photo, business_license) => ajax(Base_url + '/api/allarea/storeadd', {
  uid,
  shopcate_id,
  shopchildcate_id,
  province_id,
  city_id,
  area_id,
  street_id,
  community_id,
  shop_name,
  phone,
  name,
  address,
  id_card,
  id_card_positive_photo,
  id_card_negative_photo,
  business_license
})


// 关于订单
// 预订单添加
export const orderList = (uid, store_id, goods_id, rule, preset_time, full_reduce, realprice) => ajax(Base_url + '/api/allorder/orderlist', {
  uid,
  store_id,
  goods_id,
  rule,
  preset_time,
  full_reduce,
  realprice
})
// 预订单详情
export const budgetOrderList = (uid, store_id, goods_id) => ajax(Base_url + '/api/allorder/budgetorderlist', {
  uid,
  store_id,
  goods_id
})
// 当前用户是否存在手机号
export const memberPhone = (uid) => ajax(Base_url + '/api/allorder/memberphone', {uid})
// 当前用户添加预留手机号
export const addmemberphone = (uid, phone) => ajax(Base_url + '/api/allorder/addmemberphone', {uid, phone})

//关于城市选择
export const citySelectList = () => ajax(Base_url + '/api/allcityselect/cityselectlist')
//城市列表
export const citySearchList = (area) => ajax(Base_url + '/api/allcityselect/citysearchlist', {area})
//城市搜索
export const citySearchSelectList = (search_city) => ajax(Base_url + '/api/allcityselect/citysearchselectlist', {search_city})


