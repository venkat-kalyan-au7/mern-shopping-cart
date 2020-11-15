import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class AddProduct extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			price: "",
			quantity: "",
			description: "",
			image: "",
			errors: {}
		};
	}
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};

	onChangeim = e => {
		const fr = new FileReader();
		fr.onload = function() {
			this.setState({ image: fr.result });
		}.bind(this);
		fr.readAsDataURL(e.target.files[0]);
	};

	onSubmit = e => {
		e.preventDefault();
		const newProduct = {
			name: this.state.name,
			price: this.state.price,
			quantity: this.state.quantity,
            image: this.state.image,
            description: this.state.description,
			
		};
		console.log(newProduct);
		axios
			.post("api/products", newProduct)
			.then(function(res) {
				alert("Product Added Successfully");
				window.location.reload();
			})
			.catch(function(res) {
				alert(res.response.data[Object.keys(res.response.data)[0]]);
			});
	};

	render() {
		const { errors } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col s8 offset-s2">
                    <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
						<div
							className="col s12"
							style={{ paddingLeft: "11.250px" }}
						>
							<h4>
								<b>Add Product</b>
							</h4>
						</div>
						<form noValidate onSubmit={this.onSubmit}>
                        
							<div className="input-field col s12">
                            <label htmlFor="name">Product Name</label><br/>
								<input
									onChange={this.onChange}
									value={this.state.name}
                                    error={errors.name}
                                    placeholder=' Eg:I Phone'
									id="name"
									type="text"
								/>
								
							</div>


                            <div className="input-field col s12">
                            <label htmlFor="description">Product description</label><br/>
								<input
									onChange={this.onChange}
									value={this.state.description}
									error={errors.description}
									id="description"
                                    type="text"
                                    placeholder='Describe Product'
								/>
								
							</div>



							<div className="input-field col s12">
                            <label htmlFor="price">Price</label><br/>
								<input
									onChange={this.onChange}
									value={this.state.price}
                                    error={errors.price}
                                    placeholder='Price in INR'
									id="price"
									type="number"
								/>
								
							</div>
							<div className="input-field col s12">
                            <label htmlFor="quantity">Quantity</label><br/>
								<input
									onChange={this.onChange}
									value={this.state.quantity}
									error={errors.quantity}
									id="quantity"
                                    type="number"
                                    placeholder='1=1 Unit'
								/>
								
							</div>
							<div className="input-field col s12">
								
								<br></br>
                                <label for="image">Select Product Image:</label>
								<br></br>
                                
								<input
									type="file"
									onChange={this.onChangeim}
									// value={this.state.image}
									id="image"
									name="image"
								></input>
							</div>
							<div
								className="col s12"
								style={{ paddingLeft: "11.250px" }}
							>
								<button
									style={{
										width: "150px",
										borderRadius: "3px",
										letterSpacing: "1.5px",
										marginTop: "1rem"
									}}
									type="submit"
									className="btn-block"
								>
									Add Product
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddProduct;