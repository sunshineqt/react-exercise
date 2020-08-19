// import React, { Component, useEffect } from "react";
// import { Form, Input, Button } from "antd";
// const FormItem = Form.Item;
// const nameRules = { required: true, message: "请输入姓名" };
// const passwordRules = { required: true, message: "请输入密码" };

// export default class AntdFormPage extends Component {
//   formRef = React.createRef();
//   componentDidMount() {
//     this.formRef.current.setFieldsValue({ name: "default name" });
//   }
//   onReset = () => {
//     this.formRef.current.resetFields();
//   };
//   onFinish = (val) => {
//     console.log("onfinish", val);
//   };
//   onFinishFailed = (val) => {
//     console.log("onfinishfailed", val);
//   };
//   render() {
//     console.log("antd render", this.formRef.current);
//     return (
//       <div>
//         <Form
//           ref={this.formRef}
//           onFinish={this.onFinish}
//           onFinishFailed={this.onFinishFailed}
//           onReset={this.onReset}
//         >
//           <FormItem label="姓名" name="name" rules={[nameRules]}>
//             <Input placeholder="name" />
//           </FormItem>
//           <FormItem label="密码" name="password" rules={[passwordRules]}>
//             <Input placeholder="password" />
//           </FormItem>
//           <FormItem>
//             <Button type="primary" size="large" htmlType="submit">
//               submit
//             </Button>
//           </FormItem>
//           <FormItem>
//             <Button type="default" size="large" htmlType="reset">
//               reset
//             </Button>
//           </FormItem>
//         </Form>
//       </div>
//     );
//   }
// }

import React, { Component, useEffect } from "react";
import { Form, Input, Button } from "antd";
const FormItem = Form.Item;
const nameRules = { required: true, message: "姓名" };
const passwordRules = { required: true, message: "Mim " };
export default function AntdFormPage(props) {
  const [form] = Form.useForm();
  const onFinish = (val) => {
    console.log("onfinish", val);
  };
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val);
  };
  useEffect(() => {
    console.log("form", form);
    form.setFieldsValue({ name: "default name" });
  }, []);
  return (
    <div>
      <h3>AntdFormPage</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <FormItem label="姓名" name="name" rules={[nameRules]}>
          <Input placeholder="name" />
        </FormItem>
        <FormItem label="密码" name="password" rules={[passwordRules]}>
          <Input placeholder="password" />
        </FormItem>
        <FormItem>
          <Button type="primary" size="large" htmlType="submit">
            submit
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}
