import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { actAddProductsRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';

import { connect } from 'react-redux';

class ProductAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkStatus: false
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var { id } = match.params;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            var product = nextProps.itemEditing;
            this.setState({
                id: product.id,
                txtName: product.name,
                txtPrice: product.price,
                chkStatus: product.status
            })
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (event) => {
        event.preventDefault();
        var { history } = this.props;

        var { id, txtName, txtPrice, chkStatus } = this.state;

        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkStatus
        }

        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddItem(product);
        }
        history.goBack();
    }

    render() {
        var { txtName, txtPrice, chkStatus } = this.state;

        return (
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h3>Thêm sản phẩm</h3>
                        <form className="form" onSubmit={this.onSave}>
                            <div className="form-group">
                                <label htmlFor="name" >Name</label>
                                <input type="text" name="txtName" id="name" className="form-control" placeholder="Tên sản phẩm" value={txtName} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name" >Price</label>
                                <input type="number" name="txtPrice" id="name" className="form-control" placeholder="Giá sản phẩm" value={txtPrice} onChange={this.onChange} />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" name="chkStatus" id="status" value={chkStatus} onChange={this.onChange} checked={chkStatus} />
                                  Còn hàng?
                                </label>
                            </div>
                            <div className="form-group">
                                <Link to="/product-list" className="btn btn-secondary px-4">Back</Link>
                                <span className="px-3"></span>
                                <input type="submit" name="submit" id="submit" className="btn btn-primary px-4" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddItem: (product) => {
            dispatch(actAddProductsRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAction);

