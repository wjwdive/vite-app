<template>
    <div class="out">
        <div class="box">
            <h2>Login</h2>
            <div class="input-box">
                <label>账号</label>
                <input type="text">
            </div>
            <div class="input-box">
                <label>密码</label>
                <input type="password">
            </div>

            <div class="btn-box">
                <a href="#">忘记密码</a>
                <div>
                    <button>注册</button>
                    <button>登陆</button>
                </div>
            </div>

        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

</script>


<style>
* {
    margin: 0;
    padding: 0;
}

.el-main {
    margin: 0;
    padding: 0;
}

.out {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("../assets/ecy001.jpeg") no-repeat;
    height: 100vh;
    background-size: cover;
}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 380px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    border-right: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    background-color: rgba(50, 50, 50, 0.3);
    border-radius: 15px;
}

.box h2 {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 20px;
}

.box .input-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
}

.box .input-box>label {
    margin-bottom: 5px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 13px;
}

.box .input-box>input {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.9);
    height: 35px;
    width: 250px;
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    transition: 0.2s;
    outline: none;
    padding: 0 10px;
    letter-spacing: 1px;
}

.box .input-box>input:focus {
    border: 1px solid rgba(255, 255, 255, 0.8);
}

.box .btn-box {
    width: 255px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;

}

.box .btn-box>a {
    font-size: 13px;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
    transition: 0.2s;
    width: 250px;
    text-align: end;
    margin-bottom: 20px;
}

.box .btn-box>div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}

.box .btn-box>div>button {
    width: 120px;
    height: 35px;
    border: 1px solid rgba(20, 100, 150, 0.8);
    background: rgba(20, 100, 150, 0.5);
    color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
}

.box .btn-box>div>button:hover {
    border: 1px solid rgba(20, 100, 150, 0.8);
    background: rgba(20, 100, 150, 0.4);
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.5);

}

.box .btn-box>div>button:nth-of-type(2) {
    margin-left: 10px;
}
</style>