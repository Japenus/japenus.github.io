
require('./like.css');
let jsonp = require('../util/jsonp.js');
import React from 'react';

let Like = React.createClass({
	getInitialState: function() {
		return {
			stores: [],
		}
	},

	componentDidMount: function() {
		jsonp(this.props.source, "", "callback", (data) => {
			if(data.status) {
				if(this.isMounted()) {
					this.setState({
						stores: data.data,
					});
				}
			}else {
				alert(data.msg);
				reject("get data error!")
			}
		})
	},

	render: function() {
		let countId = 0;
		return (
			<div id="like">
				<p>项目案例</p>
				{
					this.state.stores.map((item) => {
						return <div className="like_content" key={ countId++}>
									<div className="like_link">
										<a href={ item.url }>
											<img src={ item } alt=""/>
										</a>
									</div>
									<div className="like_desc">
										<span>
											{ item.desc }
										</span>
									</div>
									<div className="like_price">
										<div><a href={ item.more }>项目截图</a></div>
									</div>
								</div>
					})
				}
			</div>
		);
	}
})

module.exports = Like;
