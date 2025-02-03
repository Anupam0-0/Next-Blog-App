import connectDB from "@/lib/config/db";
const { NextResponse } = require("next/server");
import {writeFile } from 'fs/promises';
import BlogModel from '@/lib/models/blogModel';



const LoadDB = async() => {
    await connectDB();
}

LoadDB();

// API endpoint for getting blogs
export async function GET(request) {
    try {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs});
        
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 404 });
    }
}

// API endpoint for uploading blogs
export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        const path = `./public/${timestamp}_${image.name}`;
        await writeFile(path, buffer);

        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: `${formData.get('title')}`,
            description: formData.get('description'),
            category: formData.get('category'),
            author: `${formData.get('author')}`,
            image: `${imgUrl}`,
            authorImg: `${formData.get('authorImg')}`
        }

        await BlogModel.create(blogData);
        console.log('Blog saved');
        return NextResponse.json({
            success: true,
            message: 'Blog saved'            
        });

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 404 });
    }
}

