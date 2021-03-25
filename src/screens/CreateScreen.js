import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
import {EvilIcons} from "@expo/vector-icons";

const CreateScreen = ({navigation}) => {
    const {addBlogPost} = useContext(Context);

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
    }}/>
};

const styles = StyleSheet.create({});

export default CreateScreen;