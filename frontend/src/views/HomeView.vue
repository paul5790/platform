<template>
  <div class="form-signin">
    <img
      src="https://kassproject.org/include/download_img.php?idx=9b1c034190fcb2798286ff057bde5b56"
      alt=""
      width="172"
      height="137"
    />
    <p class="ml-1 text-start">로그인하기</p>
    <hr />
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent>
        <v-text-field
          type="text"
          v-model="ID"
          label="ID"
          :rules="IDRules"
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="Password"
          label="Password"
          :rules="PasswordRules"
        ></v-text-field>

        <v-btn type="submit" block class="btn-skyblue" @click="logincheck"
          >Submit</v-btn
        >
      </v-form>
      <a id="forget" href="#">비밀번호가 기억나지 않으세요?</a>
      <hr/>
      <v-btn type="button" class="btn-skyblue btn-width">Sign up</v-btn>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from 'axios';

const ID = ref("");
const IDRules = [
  // value => {
  //   if (value?.length > 0) return true
  //   return 'First name must be at least 3 characters.'
  // },
];

const Password = ref("");
const PasswordRules = [
  // value => {
  //   if (/[^0-9]/.test(value)) return true
  //   return 'Last name can not contain digits.'
  // },
];
// Vue Router 인스턴스를 생성
const router = useRouter();

const jsonData = ref("");

const num = ref(1);
const logincheck = () => {
  if (num.value === 1) {
    try {
      axios.post('http://192.168.0.99:13000/data/user')
      .then((response) => {
        jsonData.value = response.data; // jsonData에 서버에서 받아온 데이터를 할당 (JSON.stringify를 사용하지 않음)
        console.log(jsonData.value); // Use .value to access the actual data

        // 로그인 정보 확인
        const foundUser = jsonData.value.find(user => user.USERID === "paul");
        if (foundUser) {
          console.log("있습니다");
          router.push("/monitoring");
        } else {
          console.log("없습니다");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.log(error)
    }



    console.log('로그인 성공! 이동합니다.');
    console.log(ID.value)
    console.log(Password.value)
  } else {
    alert("실패");
  }
};

</script>

<style scoped>
.form-signin {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 100px;
}

#logintext {
  font-size: 14px;
}

hr {
  color: skyblue;
}

#forget {
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

.btn-width {
  width: 400px;
  color: white;
}
</style>
