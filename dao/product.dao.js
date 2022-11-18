const db = require('./db');

const Product = function(product){
	this.name = product.name;
	this.description = product.description;
	this.imageURL  = product.imageURL
}

Product.getAllProductInACategory = (categoryName, result) =>{
	const queryText =`SELECT price, product_id, new, p.name, description, category_mobile_image_url, category_tablet_image_url, category_desktop_image_url  FROM category c, product p WHERE c.category_id = p.category_id AND c.name ='${categoryName}' ORDER BY new DESC , name DESC `;
	db.query(queryText,(err,queryResult)=>{
		if(err){
			console.log(err);
			result(err)
			return
		}
		if(queryResult.rowCount==0){
			result({kind:"not found"}, null)
			return
		}
		result(null,queryResult.rows)
	})
	

}

Product.getProductDetails = (category,product_id,result)=>{
	const queryText =`SELECT price, product_id, new, p.name, description, feature, mobile_image_url, tablet_image_url, desktop_image_url  FROM product p WHERE product_id=${product_id}`;
	db.query(queryText,(err,queryResult)=>{
		if(err){
			console.log(err);
			result(err)
			return
		}
		if(queryResult.rowCount==0){
			result({kind:"not found"}, null)
			return
		}
		console.log(queryResult.rows)
		result(null,queryResult.rows)
	})

}
module.exports = Product;