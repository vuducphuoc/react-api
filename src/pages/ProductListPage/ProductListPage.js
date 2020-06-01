import React, { Component } from 'react';
import ProductList from '../../component/ProductList/ProductList';
import ProductItem from '../../component/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductsRequest } from '../../actions/index';

class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDeleteItem = (id) => {
        this.props.onDeleteItem(id);
    }

    showProductItem = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((item, index) => {
                return (<ProductItem onDeleteItem={this.onDeleteItem} item={item} key={index} index={index} />)
            })
        }

        return result;
    }

    render() {
        var { products } = this.props;

        return (
            <div className="container py-3">
                <div className="row">
                    <div className="col">
                        <Link to="/product/add" className="btn btn-info">
                            Thêm sản phẩm
                        </Link>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col">
                        <ProductList>
                            {this.showProductItem(products)}
                        </ProductList>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispath, props) => {
    return {
        fetchAllProducts: (products) => {
            dispath(actFetchProductsRequest());
        },
        onDeleteItem: (id) => {
            dispath(actDeleteProductsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);