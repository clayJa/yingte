<template>
  <div class="index-wrapper">
    <Header />
    <div class="banner d-md-none">
      <img :src="require('@/static/images/about/banner/13.png')" alt="">
    </div>
    <div class="banner d-md-block d-none">
      <img :src="require('@/static/images/about/mobile_banner/mobile_banner_4.png')" alt="">
    </div>
    <div class="wrapper">
      <div class="breadcrumb-wrapper">
        <Breadcrumb :data="routes" />
      </div>
      <div class="search-list">
        <div class="search-wrapper">
          <div class="input-wrapper">
            <b-form-input
              id="help-search"
              placeholder="搜索…"
              v-model="searchText"
            ></b-form-input>
            <i class="iconfont input-search" @click="handleTextSearch">&#xe63a;</i>
          </div>
        </div>
        <div :class="['search-item', { image: item.cover_picture }]" v-for="(item) in list"
          @click="toPath(item)" :key="item.id">
          <div :class="['image-wrapper']" v-if="item.cover_picture">
            <img :src="`/backApi/upload/${item.cover_picture}`" alt="">
          </div>
          <div class="content-wrapper">
            <div class="content">
              <div class="title">{{item.title}}</div>
              <div class="info line-2">{{item.description}}</div>
            </div>
            <div class="button-wrapper"><div class="button"  @click="toPath(item)">查看</div></div>
          </div>
        </div>
      </div>
      <div class="pager-wrapper">
        <div :class="`prev step ${ page === 1 ? 'disabled' : ''}`" @click="fetchData({type:'prev'})"><i class="iconfont icon">&#xe608;</i>上一页</div>
        <div :class="`next step ${ page === lastPage ? 'disabled' : ''}`" @click="fetchData({type:'next'})">下一页<i class="iconfont icon">&#xe60a;</i></div>
      </div>
    </div>
    <ContactUs />
    <Footer />
  </div>
</template>

<script lang="ts">
import SelfSelect from '@/components/SelfSelect/index.vue'
import { newsSearch } from '@/service/news'
export default {
  data() {
    return {
      routes: [
        {
          name: '首页',
          path: '/',
        },
        {
          name: '搜索结果',
          path: '/search',
        },
        // {
        //   name: 'APP',
        //   path: '/search',
        // },
      ],
      // options: [
      //   { label: '网址建设', value: 1},
      //   { label: '移动互联', value: 2},
      //   { label: '网址运维', value: 3},
      //   { label: '影像创意与制作', value: 4},
      // ],
      searchText: '',
      page: 1,
      lastPage: 1,
      list: [],
    }
  },
  created() {
    if (process.browser){
      this.searchText = window.localStorage.getItem('searchText')
      window.localStorage.setItem('searchText','')
    }
    this.requestData()
  },
  methods: {
    handleTextSearch() {
      this.requestData()
    },
    toPath(item) {
      if(item.is_link) {
        window.open(item.link_url)
        return
      }
      this.$router.push(`/news/detail?id=${item.id}`)
    },
    async requestData(params = {}) {
      const { type = '' } = params as any
      let page
      switch (type) {
        case 'prev':
          page = this.page - 1
          break;
        case 'next':
          page = this.page + 1
          break;
        default:
          page = this.page
          break;
      }
      const res:any = await newsSearch({
        keyword: this.searchText,
        // keyword: '',
        limit: 8,
        page: page,
        category: 1,
        ...params
      })
      console.log('111',res)
      this.page = res.current_page
      this.lastPage = res.last_page
      this.list = res.data
    },
  },
  components: {
    SelfSelect,
  }
}
</script>

<style lang="less" scoped>
.index-wrapper {
  .wrapper {
    .search-list {
      padding: 64px 150px 0 150px;
      .search-wrapper {
        position: relative;
        #help-search {
          height: 60px;
          background: #FFFFFF;
          border-radius: 4px;
          border: 1px solid #E5E5E5;
        }
        .input-search {
          display: inline-block;
          font-size: 18px;
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
      }
      .search-item {
        display: flex;
        width: 100%;
        padding: 40px 0;
        border-bottom: 1px solid #ECECEC;
        cursor: pointer;
      }
      .search-item.image {
        .content-wrapper {
          flex-direction: column;
        }
        .button-wrapper {
          text-align: right;
        }
      }
      .image-wrapper {
        width: 300px;
        height: 200px;
        padding: 6px;
        border-radius: 4px;
        border: 1px solid #ECECEC;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 32px;
        img {
          width: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
      .content-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .button-wrapper {
          flex-shrink: 0;
        }
        .title {
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #404040;
          line-height: 28px;
        }
        .info {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #9A9A9A;
          line-height: 30px;
          margin-top: 24px;
        }
        .button {
          display: inline-block;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 20px;
          padding: 4px 20px;
          background: #354194;
          border-radius: 15px;
        }
      }
    }
  }
  .pager-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #3E3E3E;
    line-height: 28px;
    letter-spacing: 1px;
    padding: 48px 150px;
    .icon {
      font-size: 38px;
    }
    .disabled {
      color: #9A9A9A !important;
      cursor: not-allowed !important;
      pointer-events: none !important;
    }
    .step {
      cursor: pointer;
      &:hover {
        color: #354194;
      }
    }
    .prev {
      display: inline-flex;
      align-items: center;
      .icon {
        margin-right: 16px;
      }
    }
    .next {
      display: inline-flex;
      align-items: center;
      .icon {
        margin-left: 16px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .wrapper {
      .search-list {
        padding: 10px 16px 0 16px;
        .search-wrapper {
          position: relative;
          #help-search {
            height: 48px;
            background: #FFFFFF;
            border-radius: 4px;
            border: 1px solid #E5E5E5;
          }
          .input-search {
            display: inline-block;
            font-size: 18px;
            position: absolute;
            right: 24px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
          }
        }
        .search-item {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 30px 0;
          border-bottom: 1px solid #ECECEC;
        }
        .search-item.image {
          .content-wrapper {
            flex-direction: column;
          }
          .button-wrapper {
            text-align: right;
          }
        }
        .image-wrapper {
          width: 100%;
          height: 200px;
          padding: 6px;
          border-radius: 4px;
          border: 1px solid #ECECEC;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0;
          margin-bottom: 24px;
          img {
            width: auto;
            max-width: 100%;
            max-height: 100%;
          }
        }
        .content-wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .button-wrapper {
            flex-shrink: 0;
            text-align: right;
          }
          .title {
            font-size: 20px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #404040;
            line-height: 28px;
          }
          .info {
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #9A9A9A;
            line-height: 30px;
            margin-top: 20px;
            margin-bottom: 12px;
          }
          .button {
            display: inline-block;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 20px;
            padding: 4px 20px;
            background: #354194;
            border-radius: 15px;
          }
        }
      }
    }
    .pager-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #3E3E3E;
      line-height: 28px;
      letter-spacing: 1px;
      padding: 16px 16px;
      .icon {
        font-size: 38px;
      }
      .disabled {
        color: #9A9A9A !important;
        cursor: not-allowed !important;
        pointer-events: none !important;
      }
      .step {
        cursor: pointer;
        &:hover {
          color: #354194;
        }
      }
      .prev {
        display: inline-flex;
        align-items: center;
        .icon {
          margin-right: 16px;
        }
      }
      .next {
        display: inline-flex;
        align-items: center;
        .icon {
          margin-left: 16px;
        }
      }
    }
  }
}
</style>
