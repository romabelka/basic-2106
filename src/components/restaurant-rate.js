import React from "react";
import {connect} from "react-redux"
import PropTypes from "prop-types";
import {addReview} from "../ac"
import { Modal, Form, Input, Rate } from 'antd';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, rate } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Leave a review please"
          okText="Submit a review"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Overall Rating">
                {getFieldDecorator('rating',{initialValue: rate})(<Rate></Rate>)}
            </Form.Item>
            <Form.Item label="Your Name">
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your name!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Your review">
              {getFieldDecorator('reviewtext')(<Input type="textarea" />)}
            </Form.Item>
            
          </Form>
        </Modal>
      );
    }
  },
);

class RestaurantRate extends React.Component {
  state = {
    visible: false,
  };
  componentDidMount(){
    this.saveRate(this.props.restaurant.rate);
  }
  static propTypes = {
    restaurant: PropTypes.object
  };
  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    const { form } = this.formRef.props;
    form.resetFields();
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
  
      let {rating, username, reviewtext} = values;
        this.props.handleSubmitReview(rating, username, reviewtext, this.props.restaurant);

      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  saveRate = rate =>
  {
    this.rate = rate;
  }
  render() {
    return (
      <div>
        <Rate
        value={this.props.restaurant.rate}
        onChange={(value)=>{this.saveRate(value); this.showModal();}
          }
        />
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          rate = {this.rate}
          restaurant = {this.props.restaurant}
        />
      </div>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  handleSubmitReview: addReview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantRate);