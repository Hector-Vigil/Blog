import React, {useContext} from 'react';
import {StyleSheet} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";


const EditScreen = ({navigation, route}) => {
    const {id} = route.params;
    const {state, editBlogPost} = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <BlogPostForm
            initialValues={{title: blogPost.title, content: blogPost.content}}
            onSubmit={(title,value)=>
            editBlogPost(id,title,value,()=>navigation.pop())}
        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;