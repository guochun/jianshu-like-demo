import { fromJS } from 'immutable';

const defaultState = fromJS({

  topicItemList: [

    {
      id: 1,
      title: '手绘',
      url: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },

    {
      id: 2,
      title: '读书',
      url: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },

    {
      id: 3,
      title: '电影',
      url: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },

    {
      id: 4,
      title: '摄影',
      url: '//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },

    {
      id: 5,
      title: '自然科普',
      url: '//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    },

    {
      id: 6,
      title: '故事',
      url: '//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },

    {
      id: 7,
      title: '旅行.在路上',
      url: '//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },

  ],
  
})

export default (state = defaultState) => {
  return  state;
}




