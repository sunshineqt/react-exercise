// 模拟登录接口
export const UserService = {
  login(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.name === "xx") {
          resolve({ id: 123, name: "xx,hello" });
        } else {
          reject({ msg: "用户名或密码错误" });
        }
      }, 1000);
    });
  },
};
