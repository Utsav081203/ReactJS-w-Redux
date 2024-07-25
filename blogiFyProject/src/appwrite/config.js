// services related to file uploading and post CRUD
import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases();
        this.bucket = new Storage();
    }
    // upon initialisation of object

    async createPost({title, slug, content, featuredImage, status, userId}) {
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // assumed as document id
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch(error) {
            console.log("Appwrite Service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch(error) {
            console.log("Appwrite Service :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );
            return true;
        } catch(error) {
            console.log("Appwrite Service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );
        } catch(error) {
            console.log("Appwrite Service :: getPost :: error", error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // [
                //     Query.equal("status", "active")
                // ]
                // extra parameters for pagination could also be given
            );
        } catch(error) {
            console.log("Appwrite Service :: getPosts :: error", error);
            return false;
        }
    }
    // no parameters needed, default ones
    // query to get posts which are "active"
    // same reason why we did indexing for status attribute
    // to query based on an attribute, we need to index it.

    // file upload service
    async uploadFile(file) {
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            );
            // will return id of created file.
        } catch(error) {
            console.log("Appwrite Service :: uploadFile :: error", error);
        }
    }

    async deleteFile(fileId) {
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            );
            return true;
        } catch(error) {
            console.log("Appwrite Service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        );
    }
    // it is relatively fast so no promise needed
}

const service = new Service();
export default service;