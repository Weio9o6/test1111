<template>
  <VueLoading :active="isLoading"></VueLoading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">首頁</a></li>
        <li class="breadcrumb-item active" aria-current="page">聯絡我們</li>
      </ol>
    </nav>
    <div class="row">
      <h1 style="text-align: center; font-size: 50px" class="mt-5">聯絡我們</h1>
      <div class="col-md-6 col-sm-6 my-5">
        <h2 style="text-align: center">預約請加入官方ＬＩＮＥ</h2>
        <div class="d-flex justify-content-around my-5">
          <a href="https://line.me/R/ti/p/@285fyfqx">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2504/2504922.png"
              alt=""
              style="width: 200px"
            />
          </a>
          <div>
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676951311663.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OvwTk7dBgZN%2BfCBz%2FVHNUwy93nuHM9GZ0mqtLaNnpP7YbHU1foFhoBmzoGgpl3hmKFv8CDa6M4M79jCj2%2F9NiQvn7C%2BnN6A3c3FwQ2RBsie7lxZdZTnbV5uKqhIeRyJ7jBgiMwM%2FlR1uublt0Xtoj9pO2orRsWzpyAyW4dJo5MYFjeRn4UoSepS7yg%2Br0jKvpO1KuymMhEF2DDxQ1PFEh%2FMRjwwD0urg%2FUnuy79d1KNiLS2TbJFqxUKHw%2Bw3XCEZkd0yAeX8L4swWUXaY6GGGOqEWr%2FTOoi7ihhr6jQU5q9rP93DDrChdAl9CjOukwpz1qHoCWTmb8D2%2FGlisPZ8tw%3D%3D"
              alt=""
              style="width: 200px"
            />
            <h3 style="text-align: center">@285fyfqx</h3>
          </div>
        </div>
        <h2 style="text-align: center">追蹤ＩＧ獲得更多消息</h2>
        <div class="d-flex justify-content-around my-5">
          <a href="https://www.instagram.com/morizanko_nails/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png"
              alt=""
              style="width: 200px"
            />
          </a>
          <div>
            <img
              src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676953120130.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bRI8O%2F1aVafgtxrG92gT9IVektWv1V%2Fi5EXfDWJ5gb%2BZouPXVCiDfzdf9DdQqsol0hWpIoAEQj4en46ZP8x4zs0yRuffnvItHaYl73pQ6YRhFXnvGUEy82eNyObe%2FL90amkTLN84gd4hQgDjoVZOKQmajHlj0pdxwHXQH%2BmFolL07frxhuF3vRy5szCMI1fttads1fBaAjc%2BXcg1yLXPpKjzT96q5Qz9Pg6pYiLVTxlAQYhRHBqLclNZkPKJBDt2ruFd1tKuX78dAb6b7YFe%2FV0MhuTcqPWZqo3WMkj%2FYWqAwJAF33jIb8pivdTCUG1abnEAkzuD3GtuM0O%2FfjqVJw%3D%3D"
              alt=""
              style="width: 200px"
            />
            <h5 style="text-align: center">MORIZANKO_NAILS</h5>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6 my-5" style="width: 600px">
        <img
          src="https://storage.googleapis.com/vue-course-api.appspot.com/azraelk/1676953232388.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=X6NDBgprNbzjh0EElY8DbANk1y5UXpO9%2BXsqtXr5N%2BFGfPWThyOESro817mNKPpU%2FP7FD926okUP7FQXkX3VIbwr7Kdq9Z2b%2FXYazfoIqpkyHvWlBhV9FcHm3ub0FD7LunyDbUNP3W8DfTN0TgqRQ94vKgB7l34Uq7WOKPoVlXCIiEVfZp4OO2sXakP9uowJot9uVcgikl49a8V2WTiWF63zTi%2BIRctU9XK7w2rfnxXkjCrT8bOuI9nbGd6UXPCYYlUBZRf99e4PHKbnx4NpF9t%2BVuCsD%2FDouj0%2Fo9kMtxmbDdcz%2B7tuQJE1%2BQ19pS1fcNR4TD2cR5S7%2BU6MII5mbA%3D%3D"
          alt=""
          style="width: 100%"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
