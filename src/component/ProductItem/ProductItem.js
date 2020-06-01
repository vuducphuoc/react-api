import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn có chắc muốn xóa?')) { //eslint-disable-line
            this.props.onDeleteItem(id);
        }
    }

    render() {

        var { index, item } = this.props;
        var status = item.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = item.status ? 'success' : 'warning';

        return (
            <tr>
                <td scope="row">{index + 1}</td>
                <td><Link to={`/product/${item.id}/edit`}>{item.name}</Link></td>
                <td className="text-right">${item.price}</td>
                <td className="text-center">
                    <span className={`badge badge-${statusClass} p-2`}>{status}</span>
                </td>
                <td className="text-center">
                    <button className="btn btn-danger" onClick={() => this.onDelete(item.id)}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;