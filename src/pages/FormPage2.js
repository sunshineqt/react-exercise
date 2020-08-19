import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const nameRules = { required: true, message: "name input please" };
const passwordRules = { required: true, message: "password input please" };

// 这里会报错，因为package.json中用的是antd4.x，此方法已不存在，且form表单使用方法有所改变
@Form.create({})
class FormPage2 extends Component {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } = this.props.form;
    console.log("submit", getFieldsValue(), getFieldValue("name"));
    validateFields((err, values) => {
      if (err) {
        console.log(err, "err");
      } else {
        console.log(values, "success");
      }
    });
  };
  render() {
    console.log(this.props, "props");
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>FormPage2</h3>
        <Form>
          <Form.Item>
            {getFieldDecorator("name", { rules: [nameRules] })(
              <Input placeholder="name" autoComplete="off" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", { rules: [passwordRules] })(
              <Input
                type="password"
                placeholder="password"
                autoComplete="off"
              />
            )}
          </Form.Item>
          <Button type="submit" onClick={this.submit}>
            提交
          </Button>
        </Form>
      </div>
    );
  }
}

export default FormPage2;
