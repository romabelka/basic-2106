import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, Form, Input, Rate } from "antd";
import { idPropTypes } from "../utils";
import { createNewUserReview } from "../ac";

const NewRateForm = Form.create({
  name: "form_in_modal",
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      userName: Form.createFormField({
        ...props.userName,
        value: props.userName.value
      }),
      text: Form.createFormField({
        ...props.text,
        value: props.text.value
      }),
      rating: Form.createFormField({
        ...props.rating,
        value: props.rating.value
      })
    };
  }
})(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          title="New review"
          visible={visible}
          onCancel={onCancel}
          onOk={onCreate}
          okText="Add"
        >
          <Form layout="vertical">
            <Form.Item label="User name">
              {getFieldDecorator("userName", {
                rules: [{ required: true, message: "Please input your name" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Text">
              {getFieldDecorator("text", {
                rules: [{ required: true, message: "Please input text" }]
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="Rate">
              {getFieldDecorator("rating", {
                initialValue: 0
              })(<Rate />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class NewReview extends Component {
  static propTypes = {
    restaurantId: idPropTypes
  };

  state = {
    visible: false,
    fields: {
      userName: { value: "" },
      text: { value: "" },
      rating: { value: 0 }
    }
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.props.dispatchReview({
        restaurantId: this.props.restaurantId,
        name: this.state.fields.userName.value,
        text: this.state.fields.text.value,
        rating: this.state.fields.rating.value
      });

      form.resetFields();

      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  handleFormChange = changedFields => {
    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields }
    }));
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Write a review
        </Button>
        <NewRateForm
          {...this.state.fields}
          onChange={this.handleFormChange}
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchReview: ({ restaurantId, name, text, rating }) => {
    dispatch(createNewUserReview({ restaurantId, name, text, rating }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(NewReview);
