import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="card rounded">
                <div className="card-header bg-primary">
                    <h4 className="card-title text-white">Danh sách sản phẩm</h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên sản phẩm</th>
                                <th className="text-right">Giá</th>
                                <th className="text-center">Trạng thái</th>
                                <th className="text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;