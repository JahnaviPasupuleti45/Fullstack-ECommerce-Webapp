import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    const images = [image1, image2, image3, image4].filter(
      (item) => item != undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );
    console.log(imagesUrl);
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    console.log(productData);
    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message:"product added" });
  } catch (err) {
    res.json({ success: false, message: err.message });
    console.log(err);
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products: products });   /*here changed look here */
  } catch (err) {
    res.json({ success: false, message: err.message });
    console.log(err);
  }
};


const removeProduct = async (req, res) => {
  try {
    const product =  await productModel.findByIdAndDelete(req.body.id);
    console.log(product)
    res.json({ success: true, message: "product removed" });
  } catch (err) {
    res.json({ success: false, message: err.message });
    console.log(err);
  }
};

const singleProduct = async (req,res) => {
    try{
      const {productId}=req.body;
      const product = await productModel.findById(productId);
      res.json({success:true,message:product})
    }catch(err){
       res.json({ success: false, message: err.message });
       console.log(err);
    }


};

export { addProduct, singleProduct, listProducts, removeProduct };
