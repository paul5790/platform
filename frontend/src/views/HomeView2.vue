<template>
  <main>
    <form class="form-signin">
      <img
        class="mb-4"
        src="https://kassproject.org/include/download_img.php?idx=9b1c034190fcb2798286ff057bde5b56"
        alt=""
        width="172"
        height="137"
      />
      <p id="logintext" class="mb-1 text-start">로그인하기</p>
      <hr>
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">ID</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-check text-start my-3">
        <input
          class="form-check-input"
          type="checkbox"
          value="remember-me"
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Remember me
        </label>
      </div>
      <button class="btn btn-skyblue w-100 py-2" @click="logincheck">Sign in</button>
      <a id="forget" href="#" >비밀번호가 기억나지 않으세요?</a>
      <hr>
      <button class="btn btn-skyblue w-100 py-2">Sign up</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    logincheck(event) {
      event.preventDefault(); // 기본 동작 막기
      if (this.num === 1) {
        this.$router.push('/monitoring');
      } else {
        alert('실패');
      }
    },
  },
};
</script>



<style scoped>
.form-signin {
  text-align: center;
  margin: 0 auto;
  margin-top: 100px;
}
#logintext {
  font-size: 14px;
}
hr {
  color: skyblue;
}
#forget{
  display: block;
  text-align: left;
  margin-top: 10px;
}
.btn-skyblue {
  color: #fff;
  background-color: #67caf1; /* 하늘색 HEX 코드 */
  border-color: #67caf1; /* 하늘색 HEX 코드 */
}

.btn-skyblue:hover {
  background-color: #5badee; /* 하늘색의 hover 상태 HEX 코드 */
  border-color: #5badee; /* 하늘색의 hover 상태 HEX 코드 */
}
</style>

